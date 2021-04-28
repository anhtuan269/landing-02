<template>
  <div class="max-w-desktop mx-auto bg-gray-200 p-10  tablet:max-w-tablet ">    
       <div
          class="header flex justify-between items-center max-w-d mx-auto pt-28 tablet:max-w-screen-tablet tablet:pt-24 tablet:px-39"
        >
          <div class="flex items-center ">
            <nuxt-link to="/">
              <img class="mr-10 tablet:mr-6" src="@/static/image/white-logo.png" alt="" />
            </nuxt-link>
            <Header />
          </div>
          <Login />
        </div>
      <div class="text-left flex justify-between">
          <p class="pt-10">
              udix is a market-leading provider of digital marketing services, using proprietary tools and methodologies to generate high-value engagement for our customers.
          </p>
         <div class="pt-10 max-w-lg ml-auto">
              <Social />
         </div>
      </div>

  </div>
</template>

<script>
import Social from '@/components/Social/Social.vue'
import Header from '@/components/Header/header'
import Sign from '@/components/Login'
export default {
name: 'Footer',
components: {
    Header,
    Sign,
    Social
}
}
</script>

<style>

</style>