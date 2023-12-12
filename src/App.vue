<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import github from "@/components/icons/base64/IconGithub";
import discord from "@/components/icons/base64/IconDiscord";
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->

  <header class="h-16 bg-[#1c1e2d] fixed w-full px-8 flex items-center">
    <section class="w-full flex justify-between items-center">
      <div class="flex items-center">
        <a href="/"><img src="/img/logo/cypress-logo-dark.png" class="h-[2.3rem] mr-4" alt=""></a>
        <nav class="text-[1.1rem]">
          <a class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] bg-[#383947] text-[#fcfcfc] rounded-[0.375rem] font-medium" href="">向导</a>
          <a class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium" href="">API</a>
          <a class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium" href="">Plugins</a>
          <a class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium" href="">Examples</a>
          <a class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium" href="">FAQ</a>
          <a class="ml-4 px-[0.75rem] inline-block leading-7 transition-colors py-[0.45rem] hover:bg-[#383947] hover:text-[#fcfcfc] text-[#d0d2df] rounded-[0.375rem] font-medium" href="">Learn</a>
        </nav>
      </div>
      <div class="flex items-center">
        <a class="w-[20px] px-2 py-1 box-content hover:bg-[#383947] transition-colors rounded-[0.375rem]" href="https://github.com/cypress-io/cypress-documentation" target="_blank">
          <img :src="github" class="w-full" alt="">
        </a>
        <a class="w-[20px] p-2 box-content hover:bg-[#383947] transition-colors rounded-[0.375rem]" href="https://discord.com/invite/cypress" target="_blank">
          <img :src="discord" class="w-full" alt="">
        </a>
      </div>
    </section>
      
  </header>

  <main class="flex justify-between h-full pt-16">
    <section class="border-r border-[#dddfe7] h-full p-2 pr-0 w-[292px] bg-[#f7f7f7]">
      <div class="p-3">
        1
      </div>
    </section>
    <section class="flex justify-center flex-1 p-4 pb-8">
      <div class="w-5/6 px-4">2</div>
      <section class="border-l border-[#dddfe7] w-1/6 h-1/5 mx-4">
        <div class="p-2 pr-0">3</div>
      </section>
    </section>
  </main>

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>