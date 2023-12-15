<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <span 
        v-if="props.status == BadgeType.primary"
        class="px-[0.3125rem] py-[0.125rem] ml-1 text-[#fff] text-[0.7rem] rounded-[5px]"
        :style="`background-color: ${props.color ? props.color : '#6670eb'}`">
            {{ props.text }}
    </span>
</template>
<script setup lang="ts">
import { BadgeType, badgeProps } from './badge';

const props = defineProps(badgeProps);
</script>
