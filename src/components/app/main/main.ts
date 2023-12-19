/* 检测ClassList中是否存在token值 */
function checkClassListItem(target: Element, token: string): boolean {
  return target.classList.contains(token);
}

/* 自动控制侧边栏边框状态 */
export function autoCtrlSidebarBorder(
  target: Element,
  borderSelector: string = "border-r",
): void {
  const showSidebarResolve: Record<string, Function> = {
    true: () => {
      if (checkClassListItem(target, borderSelector)) {
        target.classList.remove(borderSelector);
      }
    },
    false: () => {
      if (!checkClassListItem(target, borderSelector)) {
        target.classList.add(borderSelector);
      }
    },
  };
  setInterval(
    () =>
      showSidebarResolve[
        (target.scrollHeight > target.clientHeight).toString()
      ](),
    50,
  );
}
