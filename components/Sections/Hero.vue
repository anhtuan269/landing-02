<template>
  <div class="relative  pb-207">
    <div
      class="bg-hero-bg bg-opacity-10 mx-auto bg-cover bg-center z-a w-full h-full absolute top-0"
    ></div>

    <div
      class="bg-blue-color absolute w-3/5 top-0 z-a h-full bg-opacity-90"
    ></div>
    <div class="bg-white absolute right-0 w-2/5 z-a h-full bg-opacity-90"></div>
    <div class="z-20">
      <div class="content">
        <div
          class="header flex justify-between items-center max-w-d mx-auto pt-28"
        >
          <div class="flex items-center">
            <nuxt-link to="/">
              <img class="mr-10" src="@/static/image/white-logo.png" alt="" />
            </nuxt-link>
            <Menu />
          </div>
          <Login />
        </div>
      </div>
      <div class="mt-36 text-black max-w-d mx-auto flex  justify-between ">
        <div class="block w-2/5">
        <div class="mb-5 text-white flex items-center">
          <div class="mr-2">
            <img src="@/static/image/start.png" alt="">
          </div>
          <p class="text-white">Top market company</p>
        </div>
          <Heading />
          <nuxt-link to="/" class="flex items-center mt-20">
            read more
            <img src="@/static/image/arrow.png" class="ml-4" alt="" />
          </nuxt-link>
        </div>
        <Singup />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Login from "@/components/Login";
import Singup from '@/components/Singup';
import Heading from "@/components/Header/heading.vue";
export default {
  components: {
    Menu,
    Login,
    Heading,
    Singup
  },
};
</script>

<style>
</style>