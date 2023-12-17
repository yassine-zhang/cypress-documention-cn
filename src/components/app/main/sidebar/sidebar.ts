import type { ExtractPropTypes, PropType } from "vue";
import type { ItemData } from "./item/item";

export type SidebarData = ItemData[];
export const sidebarProps = {
  data: Object as PropType<ItemData[]>,
};
export type SidebarProps = ExtractPropTypes<typeof sidebarProps>;

/* 查找所有指定选择器的父元素 */
function findAllParentElements(
  element: HTMLElement,
  selector: string,
  maxLevel?: number,
) {
  const parents = [];
  let parent = element.parentElement;
  let curLevel = 0;

  while (parent && curLevel < (maxLevel || Infinity)) {
    if (parent.matches(selector)) {
      parents.push(parent);
    }
    parent = parent.parentElement;
    curLevel++;
  }
  return parents;
}

/* 高度切换 */
function h_toggle(style: CSSStyleDeclaration, preresult: string): void {
  const duration_time = parseFloat(preresult) * 16 * 2.8;
  const max_duration_time = 500;
  style.transitionDuration = `${Math.min(duration_time, max_duration_time)}ms`;
  if (style.height === "") {
    style.height = preresult;
    requestAnimationFrame(() => (style.height = "0rem"));
    // setTimeout(() => style.height = '0rem', 0)
  } else
    requestAnimationFrame(
      () => (style.height = style.height === "0rem" ? preresult : "0rem"),
    );
}
/* 过滤Items对象 */
function filterItems(
  source: Array<Element> | NodeListOf<Element>,
  selector: string,
): Array<Element> {
  const source_final: Element[] = [];
  source.forEach((ele) => {
    const img = ele.querySelector("div>img") as Element;
    for (const value of img.classList.values() || []) {
      value === selector
        ? (() => {
            source_final.push(ele);
          })()
        : "";
    }
  });

  return source_final;
}
/* 侧边栏列表折叠 */
export function collpase(): void {
  // 获取所有侧边栏items
  const items = document.querySelectorAll(".a-item>div");
  // 剔除不符合的items
  const items_final: Element[] = filterItems(items, "opacity-1");

  // 绑定点击事件
  items_final.forEach((ele) => {
    ele.addEventListener("click", function (this: HTMLElement) {
      // 获取方向箭头图标
      const img: Element = this.querySelector("img") as Element;
      // 每次按钮点击设置右边方向箭头变化
      img.classList.toggle("rotate-90");
      img.classList.toggle("rotate-180");

      // 获取子列表
      const subitem: HTMLElement =
        (this.parentElement?.querySelector(".sublist") as HTMLElement) ||
        undefined;
      const subitem_resolve: Record<string, Function> = {
        true: () => {
          // Clears the height of the specified parent element.
          findAllParentElements(subitem, ".sublist", 8).forEach((ele) => {
            ele.style.height = "";
          });
          // 每次点击事件都会进行控制子列表展开与隐藏
          h_toggle(subitem.style, `${subitem.scrollHeight / 16}rem`);
        },
        false: () => {},
      };
      subitem_resolve[(subitem !== undefined).toString()]();
    });
  });
}

/* 所有物品点击事件处理 */
export function allItemsClickHandle(): void {
  const items = document.querySelectorAll(".a-item>div");
  const items_final: Array<Element> = filterItems(items, "opacity-0");

  items_final.forEach((ele) => {
    ele.addEventListener("click", function (this: HTMLElement) {
      console.log(
        new URL(this.dataset.url || "https://docs.cypress.io/").pathname,
      );

      // todo: 清除原有状态：文本颜色，物品背景

      // todo: 设置目标状态etc
    });
  });
}
