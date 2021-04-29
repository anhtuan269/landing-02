<template>
  <div class="relative desktop:pb-207 pb-0 ">
    <div
      class=" mx-auto bg-cover bg-center desktop:bg-hero-bg desktop:bg-opacity-10  desktop:z-a desktop:w-full desktop:h-full desktop:absolute desktop:top-0"
    ></div>

    <div
      class="bg-blue-color z-a absolute desktop:w-3/5 desktop:top-0  desktop:h-full desktop:bg-opacity-90 w-full h-3/5 "
    ></div>
    <div class="desktop:bg-white absolute desktop:right-0 desktop:w-2/5 z-a desktop:h-full desktop:bg-opacity-90 bottom-0 h-2/5 w-full bg-gray-100" ></div>
    <div class="z-20">
      <div class="content">
        <div
          class="header max-w-18 tablet:flex   tablet:justify-between tablet:items-center desktop:max-w-d mx-auto pt-28 tablet:max-w-screen-tablet tablet:pt-24 tablet:px-39"
        >
          <div class=" flex justify-between tablet:flex tablet:items-center  ">
            <nuxt-link to="/">
              <img class="mr-10 tablet:mr-6" src="@/static/image/white-logo.png" alt="" />
            </nuxt-link>
            <Menu />
          </div>
          <Login  class=" hidden tablet:block"/>
        </div>
      </div>
      <div class="desktop:mt-36 desktop:text-black desktop:max-w-d mx-auto desktop:flex  desktop:justify-between tablet:mt-60 tablet:block mt-10">
        <div class="block desktop:w-2/5 tablet:w-full tablet:text-center desktop:text-left">
        <div class="mb-5 text-white flex items-center desktop:justify-start justify-center  ">
          <div class="mr-2">
            <img src="@/static/image/start.png" alt="">
          </div>
          <p class="text-white">Top market company</p>
        </div>
          <Heading />
          <nuxt-link to="/" class="flex desktop:justify-start items-center desktop:mt-20 font-bold mt-30 mb-124 justify-center">
            read more
            <img src="@/static/image/arrow.png" class="ml-4" alt="" />
          </nuxt-link>
        </div>
       <div class="flex justify-center pt-60">
          <Signup />
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Login from "@/components/Login";
import Signup from '@/components/Singup';
import Heading from "@/components/Header/heading.vue";
export default {
  name:'Hero',
  components: {
    Menu,
    Login,
    Heading,
    Signup
  },
};
</script>

<style>
</style>