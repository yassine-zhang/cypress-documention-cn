<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="flex justify-between h-full pt-16">
    <section
      class="border-r border-[#dddfe7] h-full p-2 pr-0 w-[300px] bg-[#f7f7f7] overflow-auto overflow-x-hidden scroll-s-cypress"
      ref="sidebarRootElement"
    >
      <div class="w-[285px] p-3">
        <cy_sidebar :data="sidebarStore.data" />
      </div>
    </section>
    <section class="flex justify-center flex-1 p-4 pb-8 pr-0">
      <div class="flex-1 px-4">2</div>
      <section
        class="w-[16.42rem] mx-4 overflow-auto overflow-x-hidden scroll-s-cypress"
      >
        <div class="p-2 pr-0 border-l border-[#dddfe7]">
          <cy_aside />
        </div>
      </section>
    </section>
  </main>
</template>
<script lang="ts" setup>
import cy_sidebar from "@/components/app/main/sidebar/sidebar.vue";
import cy_aside from "@/components/app/main/aside/aside.vue";
import { useSidebarStore } from "@/stores/sidebar";
import { onMounted, ref } from "vue";
import { autoCtrlSidebarBorder } from "./main";

const sidebarStore = useSidebarStore();
const sidebarRootElement = ref<Element>();

onMounted(() => {
  autoCtrlSidebarBorder(sidebarRootElement.value as Element, "border-r");
});
</script>
