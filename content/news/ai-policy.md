---
title: Our AI Policy
description: As AI assisted coding becomes more prevalent in open source, we have established a policy for AI usage in contributions to Hummingbird.
---
# Our AI Policy

As AI assisted coding is becoming more prevalent in open source projects, we have established a policy about AI usage in contributions to Hummingbird and its related projects.

We are happy to accept contributions that have been generated using some form of AI assistance. However, because AI generated PRs take up a lot of maintainer's time to review - we've added some guidelines, rules and clarifications around this.

Most importantly: We expect contributors to have fully reviewed their generated code, and are able to answer any questions related to the PR and decisions made. If you don't understand the generated code, please do not submit it - file an issue instead. This ensures your PR is not a proxy for us interfacing with an LLM.

Hummingbird sets a high quality bar, which is essential to the project's goals and succeess. The introduction of AI does not lower this bar - we still expect the same code standards and requirements to apply. All supported platforms remain supported, and tests are added where applicable.

Tests in particular should be much easier to write with AI. However, as AI has the tendency to force things green, please don't introduce redundant of "fake" tests that are effectively equivalent to `XCTAssert(true)`. It's wise to spend the time discussing with your LLM what the goal of the feature is, and find out in ways it can break. Breaking can be a mistake in your current PR, but could also arise when someone modifies your code.

Any non-code submission, e.g. issues, PR descriptions or security reports, should not be generated using AI, with the exception of fixing grammar and spelling. There should always be a human in the loop. Agents cannot be used to respond to PR comments, feedback or commits. All responses have to be reviewed by a human before submission.

The full, exact and up-to-date policy is available in [AI_POLICY.md](https://github.com/hummingbird-project/hummingbird/blob/main/AI_POLICY.md) in the Hummingbird repository. Much of this policy was inspired by the [LLVM Project AI Tool Use Policy](https://llvm.org/docs/AIToolPolicy.html).