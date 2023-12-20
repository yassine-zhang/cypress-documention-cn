<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ul>
    <item v-for="item in items_data" :key="item.title?.toString()" :data="item">
      <ul v-if="item.children" class="pl-2">
        <item
          v-for="sub_item in item.children"
          :key="sub_item?.toString()"
          :data="sub_item"
        >
        </item>
      </ul>
    </item>
  </ul>
</template>
<script lang="ts" setup>
import item from "./item/item.vue";
import { useAsideStore } from "@/stores/aside";

const { items_data } = useAsideStore();
</script>
