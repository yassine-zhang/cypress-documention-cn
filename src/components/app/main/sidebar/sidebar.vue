<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <ul>
        <item v-for="(item, index) in props.data" :key="item.title" :item="item" :index="index">
            <ul v-if="item.children" class="sublist pl-3 overflow-hidden" :style="[(index ? 'height: 0rem' : '')]">
                <item v-for="(two, two_i) in item.children" :key="two.title" :item="two" :index="two_i"></item>
            </ul>
        </item>
    </ul>
</template>
<script lang="ts" setup>
import { sidebarProps } from "./sidebar";
import item from "./item/item.vue";
import { onMounted } from "vue";

const props = defineProps(sidebarProps);

/* 高度切换 */ 
function h_toggle(style: CSSStyleDeclaration, preresult: string):void {
    const duration_time = parseFloat(preresult) * 16 * 2.8;
    const max_duration_time = 500;
    style.transitionDuration = `${Math.min(duration_time, max_duration_time)}ms`
    if (style.height === '') {
        style.height = preresult;
        requestAnimationFrame(() => style.height = '0rem');
        // setTimeout(() => style.height = '0rem', 0)
    }
    else requestAnimationFrame(() => style.height = (style.height === '0rem' ? preresult : '0rem'));
}
/* 侧边栏列表折叠 */ 
function collpase():void {
    // 获取所有侧边栏items
    const sidebar_header = document.querySelectorAll('.a-item');
    // 绑定点击事件
    sidebar_header.forEach((ele) => {
        ele.addEventListener('click', function(this: HTMLElement){
            // 获取方向箭头图标
            const img:Element = this.querySelector('img') as Element;
            // 每次按钮点击设置右边方向箭头变化
            img.classList.toggle('rotate-90');
            img.classList.toggle('rotate-180');

            // 获取子列表
            const subitem:HTMLElement = this.parentElement?.querySelector('.sublist') as HTMLElement || undefined;
            const subitem_resolve:Record<string, Function> = {
                'true': () => {
                    // 每次点击事件都会进行控制子列表展开与隐藏
                    h_toggle(subitem.style, `${subitem.scrollHeight / 16}rem`);
                },
                'false': () => { },
            }
            subitem_resolve[(subitem !== undefined).toString()]();
        })
    })
}

onMounted(() => {
    collpase();
})
</script>