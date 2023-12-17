<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="h-16 bg-[#1c1e2d] fixed w-full px-8 flex items-center">
    <section class="w-full flex justify-between items-center">
      <div class="flex items-center">
        <a class="mr-4" href="/"
          ><img
            src="/img/logo/cypress-logo-dark.png"
            class="h-[2.3rem] mr-2"
            alt=""
        /></a>
        <nav class="text-[1.1rem]">
          <a
            class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] bg-[#383947] text-[#fcfcfc] rounded-[0.375rem] font-medium"
            href=""
            >向导</a
          >
          <a
            class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium"
            href=""
            >API</a
          >
          <a
            class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium"
            href=""
            >Plugins</a
          >
          <a
            class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium"
            href=""
            >Examples</a
          >
          <a
            class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium"
            href=""
            >FAQ</a
          >
          <a
            class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium"
            href=""
            >Learn</a
          >
        </nav>
      </div>
      <div class="flex items-center">
        <a
          class="w-[20px] px-2 py-1 box-content hover:bg-[#383947] transition-colors rounded-[0.375rem]"
          href="https://github.com/cypress-io/cypress-documentation"
          target="_blank"
        >
          <img :src="github" class="w-full" alt="" />
        </a>
        <a
          class="w-[20px] p-2 box-content hover:bg-[#383947] transition-colors rounded-[0.375rem]"
          href="https://discord.com/invite/cypress"
          target="_blank"
        >
          <img :src="discord" class="w-full" alt="" />
        </a>
      </div>
    </section>
  </header>
</template>
<script lang="ts" setup>
import github from "@/components/icons/base64/IconGithub";
import discord from "@/components/icons/base64/IconDiscord";
</script>
