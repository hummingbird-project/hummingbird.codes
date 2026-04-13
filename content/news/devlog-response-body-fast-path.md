---
title: "Devlog: Faster HTTP responses in Hummingbird 2.22"
description: A single-write fast path for ByteBuffer response bodies cut typical HTTP route throughput from 122K to over 180K req/sec.
---

# Faster HTTP responses in Hummingbird 2.22

Hummingbird 2.22 ships a new optimization, improving throughput on typical HTTP routes from **122,000** to **165,000 req/sec**. In some cases even up to **180,000 req/sec** - a 47% improvement — without changing any user-facing API.

## The problem

Before this change, every `ResponseBody` was backed by an async closure — even when the content was a plain `ByteBuffer`. Writing a response took three separate operations through NIO's channel pipeline:

1. Write the HTTP response head
2. Write the body bytes
3. Write the end frame

Three encoder passes per request, with three separate calls from Swift Concurrency into SwiftNIO - all context switches. Under load, that adds up.

## The fix

`ResponseBody` now uses a tagged enum to represent its contents directly:

```swift
enum _Backing: Sendable {
    case byteBuffer(ByteBuffer)
    case empty
    case closure(Int?, @Sendable (inout any ResponseBodyWriter) async throws -> Void)
}
```

Simple bodies - a single `ByteBuffer` or an empty response — are stored directly, no closure needed. A new `write(response:body:)` method on `ResponseWriter` checks the backing and, for the common cases, batches head + body + end into a single `write(contentsOf:)` call:

```swift
switch body._backing {
case .byteBuffer(let buf):
    try await self.outbound.write(contentsOf: [.head(head), .body(buf), .end(nil)])
case .empty:
    try await self.outbound.write(contentsOf: [.head(head), .end(nil)])
case .closure(_, let fn):
    let bodyWriter = try await self.writeHead(head)
    var w: any ResponseBodyWriter = bodyWriter
    try await fn(&w)
}
```

NIO coalesces the batched write into a single syscall and a single thread hop — down from three.

Streaming and closure-backed bodies are unchanged at this time, so will not benefit from the performance gains.

## The result

On a typical JSON endpoint, throughput jumped from **122,000 to 165,000 req/sec** on the same hardware. Most routes that return a fixed response body — JSON, HTML, redirects — benefit automatically.

On endpoints without any response body, the throughput is **180,000 req/sec**. A significant step up!

The full change is in [PR 808](https://github.com/hummingbird-project/hummingbird/pull/808) and is available today in Hummingbird 2.22.0.
