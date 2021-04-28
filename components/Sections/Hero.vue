<template>
  <div class="relative  pb-207 tablet:pb-0 ">
    <div
      class="bg-hero-bg bg-opacity-10 mx-auto bg-cover bg-center z-a w-full h-full absolute top-0"
    ></div>

    <div
      class="bg-blue-color absolute w-3/5 top-0 z-a h-full bg-opacity-90 tablet:w-full tablet:h-3/5 "
    ></div>
    <div class="bg-white absolute right-0 w-2/5 z-a h-full bg-opacity-90 tablet:bottom-0 tablet:h-2/5 tablet:w-full tablet:bg-gray-100" ></div>
    <div class="z-20">
      <div class="content">
        <div
          class="header flex justify-between items-center max-w-d mx-auto pt-28 tablet:max-w-screen-tablet tablet:pt-24 tablet:px-39"
        >
          <div class="flex items-center ">
            <nuxt-link to="/">
              <img class="mr-10 tablet:mr-6" src="@/static/image/white-logo.png" alt="" />
            </nuxt-link>
            <Menu />
          </div>
          <Login />
        </div>
      </div>
      <div class="mt-36 text-black max-w-d mx-auto flex  justify-between tablet:mt-60 tablet:block">
        <div class="block w-2/5 tablet:w-full tablet:text-center">
        <div class="mb-5 text-white flex items-center tablet:justify-center">
          <div class="mr-2">
            <img src="@/static/image/start.png" alt="">
          </div>
          <p class="text-white">Top market company</p>
        </div>
          <Heading />
          <nuxt-link to="/" class="flex items-center mt-20 font-bold tablet:mt-30 tablet:justify-center">
            read more
            <img src="@/static/image/arrow.png" class="ml-4" alt="" />
          </nuxt-link>
        </div>
       <div class="tablet:flex tablet:justify-center tablet:pt-60">
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