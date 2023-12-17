<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="flex justify-between h-full pt-16">
    <section
      class="border-r border-[#dddfe7] h-full p-2 pr-0 w-[300px] bg-[#f7f7f7] overflow-auto overflow-x-hidden"
    >
      <div class="w-[285px] p-3">
        <sidebar :data="sidebarStore.data" />
      </div>
    </section>
    <section class="flex justify-center flex-1 p-4 pb-8">
      <div class="w-5/6 px-4">2</div>
      <section class="border-l border-[#dddfe7] w-1/6 h-1/5 mx-4">
        <div class="p-2 pr-0">3</div>
      </section>
    </section>
  </main>
</template>
<script lang="ts" setup>
import sidebar from "@/components/app/main/sidebar/sidebar.vue";
import { useSidebarStore } from "@/stores/sidebar";

const sidebarStore = useSidebarStore();
</script>
