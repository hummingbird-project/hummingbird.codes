---
title: GitHub Secure Open Source Fund
description: Securing the future of Hummingbird with the GitHub Secure Open Source Fund.
---
<h1 style="position:fixed;top:108px;padding-left:20px;">GitHub Secure Open </br> Source Fund</h1>

![](github-secure-open-source-fund.png)

In March of this year we were very lucky to be invited to join the 4th round of the GitHub Secure Open Source Fund. The program is designed to help secure the future of open source projects by providing funding linked to the uptake of good security practices. At the same time projects become more financially secure they also become more secure to use. 

Previous projects that have been through the program include projects like curl, Node.js, Python, LLVM and our fellow Swift server framework Vapor. Projects that joined us in the 4th round include 

Initially the program consisted of three weeks of sessions presented by experts related to a wide range of security subjects including general security practices when running project, threat modelling, incident response, GitHub action hardening, CodeQL, fuzz testing and AI security. Once completed we received a lump sum from the fund and if we can prove we are acting on what we learnt over those three weeks a further two smaller sums will also come our way at 6 months and 12 months.

When we were first invited to join the program I never thought it would be so intense. Nine hours a week for three weeks doesn’t sound that bad. It turned out to be three weeks of exclusively thinking about software security, 24 hours a day. Each session opened up questions that needed answered, what are we currently doing, what are we not doing, how can we improve?

Practical changes you can see in Hummingbird today include

-   We tidied up our reporting of security issues and wrote an [incident response plan](https://github.com/hummingbird-project/hummingbird/blob/main/docs/incident_response.md).
-   We started writing a [threat model](https://github.com/hummingbird-project/hummingbird/blob/main/docs/threat_model.md).
-   We added [documentation]((https://docs.hummingbird.codes/2.0/documentation/hummingbird/securingyourapplication)) for end users on how to secure their application.
-   We hardened our Github Actions by setting minimum permissions on every action and using commit hashes to avoid supply chain attacks.
-   We enabled immutable releases so releases cannot be edited by a bad actor.
-   We require MFA for all members of the Hummingbird organisation.
-   Reviewed the CWE [Top 25 Most Dangerous Software Weaknesses](https://cwe.mitre.org/top25/archive/2025/2025_cwe_top25.html) to see what we could do to improve the security of applications using Hummingbird.

On top of everything we are now part of a community of projects who have been through the program. Thanks to technical backing of GitHub that community hasn't disbanded after the end of the three weeks. It still continues. We have access to a group of people who understand the complex world of building secure open source projects. We get insight into how to deal with issues and can collaborate on solutions.

We’d like to thank the GitHub Security Lab for including us in the program. We learnt so much and it has changed the way we look at security. If anyone has the chance to join this program. You can find out more about the GitHub Secure Open Source Funds [here](https://github.com/open-source/github-secure-open-source-fund). 
