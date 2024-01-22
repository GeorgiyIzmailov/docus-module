import { defineNuxtPlugin } from "#app";
import { useRuntimeConfig } from "#imports";

// Function to create and append a script tag for Inkeep
function createInkeepScriptElement() {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/@inkeep/widgets-embed@latest/dist/embed.js";
  script.type = "module";
  script.id = "inkeep-script";
  script.defer = true;
  document.head.appendChild(script);
  return script;
}

// Function to create and append a div tag for Inkeep
function createInkeepDivElement() {
  const div = document.createElement("div");
  div.id = "inkeep";
  div.style.position = "absolute";
  document.body.appendChild(div);
  return div;
}

// Function to initialize the Inkeep widget with configuration and theme mode
function initializeInkeepWidget(inkeepConfig: any, isCurrentlyDark: boolean) {
  const inkeepScript = createInkeepScriptElement();
  const inkeepDiv = createInkeepDivElement();

  inkeepScript.addEventListener("load", () => {
    const inkeepWidget = Inkeep().embed({
      componentType: "ChatButton",
      targetElement: inkeepDiv, // Use the created div
      properties: {
        ...inkeepConfig,
        baseSettings: {
          ...inkeepConfig.baseSettings,
          colorMode: {
            forcedColorMode: isCurrentlyDark ? "dark" : "light",
          },
        },
      },
    });

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === "class") {
          const isDark = mutation.target.classList.contains("dark");
          inkeepWidget.render({
            baseSettings: {
              ...inkeepConfig.baseSettings,
              colorMode: {
                forcedColorMode: isDark ? "dark" : "light",
              },
            },
          });
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });
  });
}

// Define Nuxt.js plugin
export default defineNuxtPlugin({
  name: "chatButton",
  async setup() {
    const {
      public: { inkeepConfig },
    } = useRuntimeConfig();

    if (!inkeepConfig) {
      throw new Error(
        "Configuration Error: inkeepConfig is missing in the Nuxt configuration file"
      );
    }

    if (document) {
      const isCurrentlyDark =
        document.documentElement.classList.contains("dark");

      // Initialize the Inkeep widget
      initializeInkeepWidget(inkeepConfig, isCurrentlyDark);
    }
  },
});
