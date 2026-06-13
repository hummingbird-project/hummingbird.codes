---
title: Hummingbird (HB) command line tool
description: We are really pleased to announce the release of "hb" our new command line tool for supporting Hummingbird application development.
---
# Hummingbird (HB) command line tool

We are really pleased to announce the release of `hb` our new command line tool for supporting Hummingbird application development.

## Installing

You can install `hb` using homebrew. It is available from the hummingbird-project tap. 

```
brew install hummingbird-project/tap/hb
```

## Creating new projects

When starting a new project there is some level of boiler plate needed to be setup. Up until this point we have supplied a template git repository which users download and then call a `configure.sh` script from. This has worked to a degree but it requires users to remember a download script. `Hb` introduces an easy to remember single step. 

```
hb init <optional target folder>
```

If you don’t supply a target folder it will create your new project in the current folder otherwise it will create it in the target folder. 

It uses the same template repository as mentioned above but you don’t have to remember the bash scipt to download it and configure it. 

## Background compilation

The second feature of `hb` is background compilation and running of your project.

The following command line will build and run your project. 

```
hb watch
```

At the same time as building and running your project it will also watch for changes to your Sources folder. If a file changes it will terminate the currently running version of your application, rebuild it and run it again.

Currently `hb` has two features but we intend to extend it to support others. We will be very happy to hear from you if you have any ideas how it can help you when developing Hummingbird applications. 