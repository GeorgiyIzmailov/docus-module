# Search Bar Docus (Nuxt) Module

[![Nuxt][nuxt-src]][nuxt-href] 

by Inkeep ✨

## Quick Setup

You can test the work of the widget in the playground that the module provides.

Run the following command:

```bash
# Develop with the playground
npm run dev
```
## How to build npm package?

```bash
# Running the linter
npm run lint

# Running unit, integration, and e2e tests
npm run test

# Building the module
npm run prepack

# Publish
npm run release (npm publish)
```

## Use in Docus

After installing the npm package in Docus, add it to the nuxt.config.ts file, for example:

```bash
npm i @PACKAGE/NAME
```
```ts nuxt.config.ts
export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  devtools: { enabled: true },
  modules: [
    "@PACKAGE/NAME"
  ],

  runtimeConfig: {
    public: {
      inkeepConfig: {
        chatButtonType: "ICON",
        baseSettings: {
          apiKey: "YOUR_API_KEY", // required
          integrationId: "YOUR_INTEGRATION_ID", // required
          organizationId: "YOUR_ORGANIZATION_ID", // required
          primaryBrandColor: "#26D6FF", // required -- your brand color, the widget color scheme is derived from this
          organizationDisplayName: "Inkeep",
          // ...optional settings
        },
        modalSettings: {
          // optional settings
        },
        searchSettings: {
          // optional settings
        },
        aiChatSettings: {
          // optional settings
          quickQuestions: [
            "Example question 1?",
            "Example question 2?",
            "Example question 3?",
          ],
        },
      },
    },
  },
});
```

<!-- Badges -->
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
