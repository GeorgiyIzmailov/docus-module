export default defineNuxtConfig({
  modules: ["../src/module"],
  devtools: { enabled: true },

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
          // botAvatarSrcUrl: "/img/logo.svg", // optional -- use your own bot avatar
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
