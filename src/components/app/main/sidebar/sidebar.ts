import type { ExtractPropTypes, PropType } from "vue"
import type { ItemData } from "./item/item";

export type SidebarData = ItemData[];
export const sidebarProps = {
    data: Object as PropType<ItemData[]>
}
export type SidebarProps = ExtractPropTypes<typeof sidebarProps>
