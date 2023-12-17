import type { ExtractPropTypes, PropType } from "vue";

export interface ItemData {
  /* 侧边栏物品的标题 */
  title: string;
  /* 侧边栏物品的点击URL，不需要时则需赋值为# */
  url: string;
  badge?: String | Boolean;
  /* 子对象 */
  children?: ItemData[];
}
export const itemProps = {
  index: {
    type: Number,
    default: 0,
  },
  item: {
    type: Object as PropType<ItemData>,
    default: {
      title: "Overview",
      url: "#",
      badge: false,
    },
  },
  rootClass: {
    type: String,
    default: "a-item",
  },
};
export type ItemProps = ExtractPropTypes<typeof itemProps>;
