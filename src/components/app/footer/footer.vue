<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="bg-[#303846] p-8">
    <div class="mx-[56.5px] px-4 text-[#ebedf0]">
      <div class="flex flex-row mb-8 -mx-4">
        <item title="Learn" :list="itemsData[0]" />
        <item title="Community" :list="itemsData[1]" />
        <item title="Solutions" :list="itemsData[2]" />
        <item title="Company" :list="itemsData[3]" />
      </div>
      <div class="text-center">© 2023 Cypress.io. All rights reserved.</div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import item from "./item/item.vue";
import { useFooterStore } from "@/stores/footer";

const { itemsData } = useFooterStore();
</script>
