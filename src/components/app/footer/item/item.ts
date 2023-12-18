import type { ExtractPropTypes, PropType } from "vue";

export interface ListItemType {
  title: string;
  url?: string;
}
export const itemProps = {
  title: {
    type: String,
    default: "Example Title",
  },
  list: {
    type: Array<ListItemType> as PropType<ListItemType[]>,
    default: [
      { title: "list of 1", url: "#" },
      { title: "list of 2", url: "#" },
      { title: "list of 3", url: "#" },
    ],
  },
};
export type ItemProps = ExtractPropTypes<typeof itemProps>;
