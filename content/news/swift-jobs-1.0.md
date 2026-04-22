---
title: Swift Job v1.0
description: Last year we released v1.0 of swift-jobs, the durable job execution queue. This week we released v1.0 of swift-jobs-valkey, the Valkey driver for swift-jobs. This is the final piece of the durable jobs puzzle.
---
# Swift Jobs v1.0

Last year we released v1.0 of swift-jobs, the durable job execution queue. This week we released v1.0 of swift-jobs-valkey, the Valkey driver for swift-jobs. This is the final piece of the durable jobs puzzle.

Swift-jobs is a job execution queue that allows you to process jobs across multiple servers. It is has a driver model where the underlying storage for the queue is abstracted behind a protocol. There are two official drivers one using the database Postgres and one using the key value store Valkey. The Postgres driver hit v1.0 last year. This week v1.0 of the Valkey driver was released.

## Features

Swift-jobs includes the following features
- Queue, pause, resume, cancel jobs.
- Queue delayed jobs.
- Job processor executing jobs across multiple servers.
- Graceful handling of SIGTERM, SIGINT signals.
- Job scheduler for queuing of jobs at regular intervals. Schedules are flexible enough to support most crontab setups.
- Customizable retry strategies, with a default exponential jitter implementation.
- Timeouts to catch jobs that have hung.
- Middleware to catch job queuing, dequeuing, handling and completion.
- Support for metrics and tracing via middleware.
- Customizable storage of failed, completed and cancelled jobs with automatic cleanup available via the job scheduler.
- Re-queuing of jobs that never completed because a server crashed.

Swift jobs allows to you offload work your HTTP server would otherwise be doing but it can also be used for much more than that.