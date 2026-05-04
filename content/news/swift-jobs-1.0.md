---
title: Swift Job v1.0
description: Last year we released v1.0 of swift-jobs, the durable job execution queue. This week we released v1.0 of swift-jobs-valkey, the Valkey driver for swift-jobs. This is the final piece of the durable jobs puzzle.
---
# Swift Jobs v1.0

Last year we released v1.0 of swift-jobs, the durable job execution queue. This week we released v1.0 of swift-jobs-valkey, the Valkey driver for swift-jobs. This is the final piece of the durable jobs puzzle.

## Overview

Swift-jobs is a job execution queue that allows you to process jobs across multiple servers. It has a driver model where the underlying storage for the queue is abstracted behind a protocol. There are two official drivers one using the database Postgres and one using the key value store Valkey. The Postgres driver hit v1.0 last year. This week v1.0 of the Valkey driver was released.

On top of the basic queue we have added features such as retry failed jobs, pausing and resuming of jobs, cancellation of jobs, scheduling jobs based on crontab and middleware to catch queuing, de-queuing, processing and completion of jobs.

## Durable

We call swift-jobs durable, because it doesn't lose jobs if they fail, or servers crash. If you have a job that triggers a payment you cannot afford for that job to be missed or run twice. Jobs that continue to fail after their defined retry attemtps are stored separately. For instance if a service a job uses is offline the failed jobs will be stored and can be re-queued manually when the service is back online. 

Another situation where jobs can be lost is if a server running jobs crashes. Any jobs currently being processed will be orphaned and never completed. Swift-jobs provides a regularly scheduled job that will recognise jobs left in the processing state whose server is no longer running and re-queue them so they can be processed fully.

## Features

The full feature set of swift-jobs includes:
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