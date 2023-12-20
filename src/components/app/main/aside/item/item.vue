<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li class="m-2">
    <a
      :class="[
        (data?.level || 1) === 1
          ? 'font-medium leading-8'
          : 'font-normal leading-[1.2rem]',
      ]"
      class="hover:text-[#69d3a7] text-[#525860] opacity-90 transition-colors"
      :href="data?.url?.toString() || '#'"
    >
      {{ data?.title }}
    </a>

    <slot></slot>
  </li>
</template>
<script lang="ts" setup>
import { itemProps } from "./item";

const { data } = defineProps(itemProps);
</script>
