import { ref } from "vue";
import { defineStore } from "pinia";
import type { ListItemType } from "@/components/app/footer/item/item";

export const useFooterStore = defineStore("footer", () => {
  const itemsData = ref<Array<ListItemType[]>>([
    [
      {
        title: "Real World App",
        url: "https://github.com/cypress-io/cypress-realworld-app",
      },
      { title: "Real World Testing", url: "https://learn.cypress.io/" },
      {
        title: "Cypress.io YouTube",
        url: "https://www.youtube.com/channel/UC-EOsTo2l2x39e4JmSaWNRQ",
      },
    ],
    [
      {
        title: "GitHub Discussions",
        url: "https://github.com/cypress-io/cypress/discussions",
      },
      { title: "Discord", url: "https://on.cypress.io/discord" },
      { title: "Twitter", url: "https://twitter.com/Cypress_io" },
    ],
    [
      { title: "Cypress App", url: "https://www.cypress.io/features" },
      { title: "Cypress Cloud", url: "https://www.cypress.io/cloud" },
      { title: "Cypress Migrator", url: "https://migrator.cypress.io/" },
    ],
    [
      { title: "About", url: "https://www.cypress.io/about-us" },
      { title: "Cypress Blog", url: "https://www.cypress.io/blog" },
      { title: "Careers", url: "https://www.cypress.io/careers" },
      { title: "Support", url: "https://www.cypress.io/support" },
    ],
  ]);

  return { itemsData };
});
