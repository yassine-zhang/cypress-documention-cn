<template>
    <div class="sidebar">
        <ul>
            <!-- 一级栏目外 -->
            <li v-for="(item, item_index) in props.data" :key="item.title" :class="['sidebar_item', (!props.first ? 'mt-1' : ''), 'pb-1']">
                <div class="sidebar_header px-3 py-1 mb-1 hover:bg-[#eaeaea] transition-colors ease-in-out rounded cursor-pointer" :data-url="item.url">
                    <!-- text-[#275d3c] -->
                    <p :class="['flex justify-between items-center font-medium text-[1.05rem]', (!item_index ? 'text-[#275d3c]' : 'text-[#44485f]')]">{{ item.title }} <img :class="['w-6 h-6 transition-transform ease-in-out', (!item_index ? 'rotate-180' : 'rotate-90'), (!item.children ? 'opacity-0' : '')]" :src="sublist" alt=""></p>
                </div>

                <!-- 二级栏目外 -->
                <ul v-if="item.children" class='subitem block pl-3 will-change-[height] transition-[height] ease-in-out overflow-hidden' :style="[(item_index ? 'height: 0rem' : '')]">
                    <!-- text-[#275d3c] bg-[#cbf0df] -->
                    <li v-for="(subitem, subitem_index) in item.children" :key="subitem.title" :class="[(!subitem_index ? '': 'mt-1')]">
                        <p v-if="!subitem.children" :class="['px-3 py-1 transition-colors rounded font-medium cursor-pointer', ((!subitem_index && !item_index) ? 'text-[#275d3c] bg-[#cbf0df]': 'hover:bg-[#eaeaea] text-[#44485f]')]" :data-url="subitem.url">{{ subitem.title }}</p>
                    
                        <div v-if="subitem.children" class="level3_header px-3 py-1 mb-1 hover:bg-[#eaeaea] transition-colors rounded cursor-pointer" :data-url="subitem.url">
                            <!-- text-[#275d3c] -->
                            <p :class="['flex justify-between items-center font-medium  text-[1.05rem]', (!subitem_index && !item_index ? 'text-[#275d3c]' : 'text-[#44485f]')]">{{ subitem.title }} <img :class="['w-6 h-6 transition-transform', (!subitem_index && !item_index ? 'rotate-180' : 'rotate-90'), (!subitem.children ? 'opacity-0' : '')]" :src="sublist" alt=""></p>
                        </div>
                        <ul v-if="subitem.children" class="level3_body block pl-3 will-change-[height] transition-[height] overflow-hidden" :style="[(!subitem_index && !item_index ? '' : 'height: 0rem')]">
                            <li v-for="(sub_subitem, sub_subitem_index) in subitem.children" :key="sub_subitem.title" :class="[(!sub_subitem_index ? '': 'mt-1')]"> 
                                <p :class="['px-3 py-1 transition-colors rounded font-medium cursor-pointer', ((!sub_subitem_index && !subitem_index && !item_index) ? 'text-[#275d3c] bg-[#cbf0df]': 'hover:bg-[#eaeaea] text-[#44485f]')]" :data-url="sub_subitem.url">{{ sub_subitem.title }}</p>    
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import sublist from "@/components/icons/base64/IconSublist";
import { onMounted, type PropType } from "vue";

export interface SidebarData {
    /* 侧边栏物品的标题 */ 
    title: string
    /* 侧边栏物品的点击URL，不需要时则需赋值为# */ 
    url: string
    /* 子对象 */ 
    children?: SidebarData[]
}

const props = defineProps({
    first: Boolean,
    data: Object as PropType<SidebarData[]>,
});

function calc_h_rem(count: number):string {
    return `${(36 * count + 4 * (count - 1)) / 16}rem`;
}
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
function sidebar_collpase():void {
    // 获取所有侧边栏items
    const sidebar_header = document.querySelectorAll('li.sidebar_item .sidebar_header');
    // 绑定点击事件
    sidebar_header.forEach((ele) => {
        ele.addEventListener('click', function(this: HTMLElement){
            // 获取方向箭头图标
            const img:Element = this.querySelector('img') as Element;
            // 每次按钮点击设置右边方向箭头变化
            img.classList.toggle('rotate-90');
            img.classList.toggle('rotate-180');

            // 获取子列表
            const subitem:HTMLElement = this.parentElement?.querySelector('.subitem') as HTMLElement || undefined;
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
function sidebar_collpase_2():void {
    // 获取所有侧边栏items
    const sidebar_header = document.querySelectorAll('.level3_header');
    // 绑定点击事件
    sidebar_header.forEach((ele) => {
        ele.addEventListener('click', function(this: HTMLElement){
            // 获取方向箭头图标
            const img:Element = this.querySelector('img') as Element;
            // 每次按钮点击设置右边方向箭头变化
            img.classList.toggle('rotate-90');
            img.classList.toggle('rotate-180');

            // 获取子列表
            const subitem:HTMLElement = this.parentElement?.querySelector('.level3_body') as HTMLElement || undefined;
            const subitem_resolve:Record<string, Function> = {
                'true': () => {
                    // 每次点击事件都会进行控制子列表展开与隐藏
                    const parent_item_style = subitem.parentElement?.parentElement?.style;
                    // 这句很重要，将父级折叠面板移除height，让它根据内容变化。
                    parent_item_style && (() => { parent_item_style.height = '' })();
                    h_toggle(subitem.style, `${subitem.scrollHeight / 16}rem`);
                },
                'false': () => { },
            }
            subitem_resolve[(subitem !== undefined).toString()]();
        })
    })
}

onMounted(() => {
    sidebar_collpase();
    sidebar_collpase_2();
});
</script>