<template>
  <div class="desktop:max-w-desktop mx-auto bg-gray-200 py-10 px-30  tablet:p-10  tablet:max-w-tablet ">    
      <div class="text-left   tablet:flex  tablet:items-center tablet:justify-between">
          <img class=" mx-auto w-18 :tablet:mr-5  " src="@/static/image/udix.2.png" alt="">
          <div class="tablet:flex tablet:items-center tablet:justify-between ">
              <Header class="desktop:mr-20 tablet:mr-10 "/>
              <Login  />
          </div>
      </div>
      <div class=" text-center tablet:text-left flex flex-col-reverse tablet:flex-row tablet:justify-between">
          <p class="pt-10 desktop:w-3/12 tablet:w-7/12 text-12 leading-l-18 opacity-30">
              udix is a market-leading provider of digital marketing services, using proprietary tools and methodologies to generate high-value engagement for our customers.
          </p>
         <div class="pt-10 desktop:max-w-lg tablet:ml-auto tablet:ml-0 tablet:w-2/5">
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