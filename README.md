# mParticle Data Planning Snippets SDK

<img src="https://static.mparticle.com/sdk/mp_logo_black.svg" width="280"><br>

[![npm](https://img.shields.io/npm/v/@mparticle/data-planning-snippets.svg?maxAge=2592000)](https://www.npmjs.com/package/@mparticle/data-planning-snippets)

Hello! This is the public repo of the mParticle Data Planning Snippet SDK. We've built the mParticle platform to take a new approach to web and mobile app data and the platform has grown to support 200+ services and SDKs, including developer tools, analytics, attribution, messaging, and advertising services. mParticle is designed to serve as the connector between all of these services - check out [our site](http://mparticle.com), or hit us at developers@mparticle.com to learn more.

:arrow_right: [**Check out the demo here**](https://mparticle.github.io/data-planning-snippets/)

## Documentation

Fully detailed documentation and other information about mParticle web SDK can be found at our doc site

-   [Core mParticle SDK](https://docs.mparticle.com/developers/sdk/web/getting-started)

What is Data Planning? Data Planning is part of the new Data Master feature for the mParticle SDK. Check out this section of the doc site to learn more.

-   [Data Master mParticle SDK](https://docs.mparticle.com/guides/data-master/)

# Overview

The main purpose of this project is to create example code for clients based off of their data plans.

This project allows the you to input a DataPlanPoint and recieve executable code.

# Getting Started

## Importing Data Planning Snippets

`$ npm install @mparticle/data-planning-snippets`

To use this within your project:

```typescript
import { MPSnippets } from '@mparticle/data-planning-snippets';
```

## Generate a Snippet

To get a `DataPlanPoint` you'll first need to fetch your DataPlan using the [Data-Planning-Node Library](https://www.npmjs.com/package/@mparticle/data-planning-node) or the [MParticle CLI](https://www.npmjs.com/package/@mparticle/cli)

```typescript
import { MPSnippets } from '@mparticle/data-planning-snippets';

// Generate a Swift snippet
const exampleCode = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

// Generate a Objective C snippet
const exampleCode = MPSnippets.createSnippet(
    dataPlanPoint,
    Language.ObjectiveC
);
```

# Contribution Guidelines

At mParticle, we are proud of our code and like to keep things open source. If you'd like to contribute, simply fork this repo, push any code changes to your fork, and submit a Pull Request against the `master` branch of mParticle/data-planning-snippets.

## Running the Tests

Prior to running the tests please install all dev dependencies via an `npm install`, and build the mParticle.js file as well as the test file by running `npm run build`:

```bash
$ npm install
$ npm run build
$ npm test
```

The test script will run all tests using Mocha as unit tests.

## Development Notes

This package comes with the NPM package [pre-commit](https://www.npmjs.com/package/pre-commit), which will run [GTS](https://github.com/google/gts) when you try to commit.

## Support

<support@mparticle.com>

## License

The mParticle Web Media SDK is available under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0). See the LICENSE file for more info.
