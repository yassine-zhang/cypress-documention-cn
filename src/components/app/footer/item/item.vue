<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex-1 px-4">
    <div class="mb-4 text-[#fcfcfc] font-medium">{{ props.title }}</div>
    <ul>
      <li
        v-for="item in props.list"
        :key="item.title || item.toString()"
        class="leading-8"
      >
        <p v-if="!item.title">{{ item }}</p>
        <a
          v-else
          :href="item.url"
          target="_blank"
          class="hover:text-[#84d1aa] hover:underline transition-colors"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { itemProps } from "./item";

const props = defineProps(itemProps);
</script>
