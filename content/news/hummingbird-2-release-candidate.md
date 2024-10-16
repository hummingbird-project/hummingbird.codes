---
title: Hummingbird 2 release candidate
description: The Hummingbird 2 Release Candidate is now available, marking the final stages before the official release.
---
# Hummingbird 2 release candidate

The Hummingbird 2 Release Candidate is now available, marking the final stages before the official release.

## Overview

We started the path to Hummingbird v2.0 in May 2023. I wrote a small experimental server using SwiftNIO's (then new) communication layer between their own EventLoop based APIs and Swift concurrency. A lot of what was learned from this project was used in the development of Hummingbird 2. 

Initially we wanted to release an interim version that included some of the features we experimented with earlier. As time went on, we realized it would be much better to do a release including our full plans for the framework. By January we had what we considered our alpha release. 

While this release was pretty much feature complete, it needed some cleaning up. Since then we have been refining our public APIs and fixing bugs. The release candidate is the result of this work. 

Hummingbird 2 is a complete re-write, based around structured concurrency. We have access to the many new features of Swift concurrency including AsyncSequences, task cancellation, task locals. The code is much easier to maintain as structured concurrency provides better clarity over task lifetimes. And this maintainability and clarity is also transferred to the backends you write with Hummingbird 2.

## Features

Hummingbird 2 comes with a repository full of pre-built [examples](https://github.com/hummingbird-project/hummingbird-examples), including working with various different databases, JWT, AWS Lambda, Fluent, HTTP proxies, Passkeys and more.

- Support for a flexible HTTP layer. With official support for HTTP1.1/TLS, HTTP2 and AWS Lambda
- Two new routers. A traditional but extremely optimised trie based router and a result builder based routing system.
- Pre-built middleware for your routes including:
  - File Serving (from the File System or externally)
  - CORS support
  - Observability (logging, metrics and tracing)
- Integration with [Swift Service Lifecycle](https://github.com/swift-server/swift-service-lifecycle).
- Uses new [HTTP types](https://github.com/apple/swift-http-types) from Apple.

Additional packages provide more features including
- Support for [WebSocket](https://github.com/hummingbird-project/hummingbird-websocket) clients and servers, with all new structured concurrency APIs and support for compression.  
- An updated [authentication framework](https://github.com/hummingbird-project/hummingbird-auth), leveraging request contexts for passing authentication states into routes. 
- [Jobs](https://github.com/hummingbird-project/swift-jobs), a Job Queue framework used to persist and offload work to other systems.
- [Mustache templating](https://github.com/hummingbird-project/swift-mustache) support for generating dynamic content.
- Integration with common packages like [FluentKit](https://github.com/vapor/fluent-kit) and [RediStack](https://github.com/swift-server/redistack).
- [HTTP compression/decompression](https://github.com/hummingbird-project/hummingbird-compression) support through middleware.

## Flexible

Hummingbird is still the flexible framework you know, more so now than ever before. Add your own middleware to edit requests and responses as they pass through the router. Use your own type to define the contextual data that is passed through the router alongside the HTTP request. If you don't like, or need a new feature, you can replace even the router or transport implementation with your own.

Hummingbird is a feature rich, robust and performant solution, ready to implement your next server application!

## Try it

You can follow the instructions on the [getting started](https://docs.hummingbird.codes/2.0/documentation/hummingbird/gettingstarted) help page, or look at one of our many [examples](https://github.com/hummingbird-project/hummingbird-examples).

Also consider visiting the community's [Discord](https://discord.gg/4twfgYqdat) server.  
