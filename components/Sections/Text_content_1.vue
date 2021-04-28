<template>
  <div class=" desktop:max-w-d desktop:mx-auto desktop:bg-white flex desktop:flex-row desktop:pt-0 desktop:justify-between  tablet:flex-col-reverse tablet:justify-center tablet:pt-100 tablet:bg-gray-100 ">
      <div class="desktop:mt-70 desktop:w-3/5 tablet:w-full tablet:mt-2">
        <img class=" tablet:mx-auto" src="@/static/image/image.png" alt="">
      </div>
      <Slide />
  </div>
</template>

<script>
import Slide from '@/components/Slider/index.vue'
export default {
    name:'Text-slide-content',
    components:{
        Slide
    }

}
</script>

<style>

</style>