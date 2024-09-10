---
title: Hummingbird 2
description: Hummingbird 2 - the swift server framework has been released.
draft: true
---
# Hummingbird 2

![](hummingbird2-fireworks2.jpg)
We are really pleased to announce the release of Hummingbird 2. 

Over the last 15 months we have rebuilt the Hummingbird server framework from scratch with Swift concurrency taking a central role. The rebuild included an extended period refining the public API to make it as clear and easy to use as possible.

The time I started writing what was to become version 1 of the Hummingbird server framework is almost exactly the same time the first of the Swift evolution proposals for concurrency were published. To date there have been over 35 different proposals related to concurrency published. Having concurrency built into the language has been a major structural change for Swift. 

But when starting out building Hummingbird many of these were only proposals, or hadn't even been published so I wrote the framework with what was available at the time which was Swift NIO EventLoopFutures. As Swift concurrency proposals were accepted and implemented I started adding support for them in the framework. But when Hummingbird 1.0 was finally released, it was still inherently an EventLoopFuture based framework with a thin veneer of Swift concurrency layered on top of it. Because of this many features of Swift concurrency were unavailable to it eg structured concurrency, task locals, task cancellation. 

Hummingbird 2 is a complete rewrite of the framework built on top of structured concurrency. The code is easier to read, maintain and reason about and this transfers to the backends built with it. This is the version of Hummingbird I wanted to write initially but wasn't able to because the language features weren't ready. With the imminent release of Swift 6 this is the perfect time to try out Hummingbird.

Hummingbird consists of a number of packages. We are not doing a full release of all of these packages at the same time. Initially only [Hummingbird](https://github.com/hummingbird-project/hummingbird) and [HummingbirdWebSocket](https://github.com/hummingbird-project/hummingbird-websocket) will be available as 2.0. The rest of the packages will get a 2.0 release over the next couple of months.

You can find the full release notes for Hummingbird 2 [here](https://github.com/hummingbird-project/hummingbird/releases/tag/2.0.0).