<template>
  <div class="max-w-desktop mx-auto bg-gray-200 p-10 flex items-center justify-between mt-134">    
      <div class="text-left max-w-md">
          <img src="@/static/image/udix.2.png" alt="">
          <p class="pt-10">
              udix is a market-leading provider of digital marketing services, using proprietary tools and methodologies to generate high-value engagement for our customers.
          </p>
      </div>
      <div class="text-left">
          <div class="flex items-center justify-center">
              <Header class="mr-20"/>
              <Sign />
          </div>
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