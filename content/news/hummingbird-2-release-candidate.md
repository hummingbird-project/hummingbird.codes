# Hummingbird 2 release candidate

The Hummingbird 2 Release Candidate is now available, marking the final stages before the official release.

## Overview

Hummingbird 2 is a complete re-write of the package based around structured concurrency. With this we get access to the many new features of Swift concurrency including AsyncSequences, task cancellation, task locals. The code is much easier to maintain as structured concurrency provides better clarity over task lifetimes. And this maintainability and clarity is also transferred to the backends you write with Hummingbird 2.

## Features

Below is a list of some the features of Hummingbird 2
- Structured concurrency. No need to worry about Swift NIO EventLoopFutures anymore.
- Support for HTTP1.1/TLS and HTTP2
- Two routers, one a traditional trie based router and the other built using a result builder.
- Router middleware, including implementations of File serving, CORS, logging, metrics and tracing. 
- Integration with [Swift Service Lifecycle](https://github.com/swift-server/swift-service-lifecycle).
- Uses new [HTTP types](https://github.com/apple/swift-http-types) from Apple.

Additional packages provide more features including
- Support for WebSockets.
- Authentication framework.
- Jobs framework, for offloading work to other servers.
- Mustache templating system for generating dynamic content.
- Integration with common packages like [FluentKit](https://github.com/vapor/fluent-kit) and [RediStack](https://github.com/swift-server/redistack).
- Request decompression and response compression.

## Flexible

Hummingbird is still the flexible framework you know, if not more so now. Add your own middleware to edit requests and responses as they pass through the router, don't like the router implementation then replace it with your own, need to add a new protocol, go ahead.

## Try it!

If you want to give it a go, you can follow the instructions on the [getting started](https://docs.hummingbird.codes/2.0/documentation/hummingbird/gettingstarted) help page.
