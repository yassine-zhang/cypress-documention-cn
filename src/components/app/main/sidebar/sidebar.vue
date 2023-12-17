<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ul>
    <item
      v-for="(item, index) in props.data"
      :key="item.title"
      :item="item"
      :index="[index]"
    >
      <ul
        v-if="item.children"
        class="sublist pl-3 overflow-hidden"
        :style="[index ? 'height: 0rem' : '']"
      >
        <item
          v-for="(two, two_i) in item.children"
          :key="two.title"
          :item="two"
          :index="[index, two_i]"
        >
          <ul
            v-if="two.children"
            class="sublist pl-3 overflow-hidden"
            :style="[!index && !two_i ? '' : 'height: 0rem']"
          >
            <item
              v-for="(three, three_i) in two.children"
              :key="three.title"
              :item="three"
              :index="[index, two_i, three_i]"
            >
              <ul
                v-if="three.children"
                class="sublist pl-3 overflow-hidden"
                :style="[!index && !two_i && !three_i ? '' : 'height: 0rem']"
              >
                <item
                  v-for="(four, four_i) in three.children"
                  :key="four.title"
                  :item="four"
                  :index="[index, two_i, three_i, four_i]"
                />
              </ul>
            </item>
          </ul>
        </item>
      </ul>
    </item>
  </ul>
</template>
<script lang="ts" setup>
import { sidebarProps, collpase, allItemsClickHandle } from "./sidebar";
import item from "./item/item.vue";
import { onMounted } from "vue";

const props = defineProps(sidebarProps);

onMounted(() => {
  requestAnimationFrame(() => {
    collpase();
    allItemsClickHandle();
  });
});
</script>
