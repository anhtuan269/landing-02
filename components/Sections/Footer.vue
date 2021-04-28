<template>
  <div class="max-w-desktop mx-auto bg-gray-200 p-10  tablet:max-w-tablet ">    
      <div class="text-left  flex  items-center justify-between">
          <img class="w-18 mr-5 " src="@/static/image/udix.2.png" alt="">
          <div class="flex items-center justify-between ">
              <Header class="mr-20 tablet:mr-10 "/>
              <Login  />
          </div>
      </div>
      <div class="text-left flex justify-between">
          <p class="pt-10 tablet:w-7/12 text-12 leading-l-18 opacity-30">
              udix is a market-leading provider of digital marketing services, using proprietary tools and methodologies to generate high-value engagement for our customers.
          </p>
         <div class="pt-10 max-w-lg ml-auto tablet:ml-0 tablet:w-2/5">
              <Social />
         </div>
      </div>

  </div>
</template>

<script>
import Social from '@/components/Social/Social.vue'
import Header from '@/components/Header/header'
import Login from '@/components/Card/Login'
export default {
name: 'Footer',
components: {
    Header,
    Login,
    Social
}
}
</script>

<style>
.w-18 {
    width:70px;
}

</style>