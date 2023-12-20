<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li v-if="item" :class="$props.rootClass">
    <div
      class="flex justify-between px-3 py-1 mb-1 transition-colors ease-in-out rounded cursor-pointer"
      :class="[
        checkIndexIsAllZero(index) && !hasMultipChildren()
          ? 'bg-[#c2f1de]'
          : 'hover:bg-[#eaeaea]',
      ]"
      :data-url="item.url"
    >
      <p
        class="flex items-center font-medium"
        :class="[
          checkIndexIsAllZero(index) ? 'text-[#275d3c]' : 'text-[#434861]',
          isRootLevel(index) ? 'text-[1.1rem]' : '',
        ]"
      >
        {{ item.title }}
        <badge
          v-if="item?.badge"
          text="New"
          :status="item.badge === true ? 'primary' : item.badge.toString()"
        />
      </p>
      <img
        ref="img"
        :class="[
          'w-6 h-6 transition-transform ease-in-out',
          !index[0] ? 'rotate-180' : 'rotate-90',
          hasMultipChildren() ? 'opacity-1' : 'opacity-0',
        ]"
        :src="sublist"
        alt=""
      />
    </div>

    <slot></slot>
  </li>
</template>

<script lang="ts" setup>
import { itemProps } from "./item";
import sublist from "@/components/icons/base64/IconSublist";
import badge from "@/components/badge/badge.vue";
import { ref } from "vue";

const img = ref();
const hasMultipChildren = (): boolean => {
  return img.value?.parentElement?.parentElement?.children.length > 1
    ? true
    : false;
};

const { index, item } = defineProps(itemProps);
const checkIndexIsAllZero = (num: Array<Number>): boolean => {
  return num.filter((val) => val != 0).length === 0;
};

const isRootLevel = (num: Array<Number>): boolean => {
  return num.length === 1;
};
</script>
