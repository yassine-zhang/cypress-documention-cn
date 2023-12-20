import { defineStore } from "pinia";
import type { ItemData } from "@/components/app/main/aside/item/item";
import { ref } from "vue";

export const useAsideStore = defineStore("aside", () => {
  const items_data = ref<ItemData[]>([
    { title: "In a nutshell" },
    { title: "Who uses Cypress?" },
    { title: "Cypress ecosystem" },
    { title: "Our mission" },
    {
      title: "Features",
      children: [
        { title: "Setting up tests", level: 2 },
        { title: "Writing tests", level: 2 },
        { title: "Running tests", level: 2 },
        { title: "Debugging tests", level: 2 },
      ],
    },
    {
      title: "Test types",
      children: [
        { title: "End-to-end", level: 2 },
        { title: "Component", level: 2 },
        { title: "API", level: 2 },
        { title: "Other", level: 2 },
      ],
    },
    { title: "Cypress in the Real World" },
  ]);

  return { items_data };
});
