import type { ExtractPropTypes, PropType } from "vue";

export interface ItemData {
  level?: Number;
  title?: String;
  url?: String;
  children?: ItemData[];
}

export const itemProps = {
  data: Object as PropType<ItemData>,
};
export type ItemProps = ExtractPropTypes<typeof itemProps>;
