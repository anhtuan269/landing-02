<template>
  <div class=" desktop:max-w-d desktop:mx-auto desktop:bg-white flex desktop:flex-row desktop:pt-0 desktop:justify-between  flex-col-reverse justify-center pt-100 bg-gray-100 ">
      <div class="desktop:mt-70 desktop:w-3/5 w-full mt-2">
        <img class=" mx-auto" src="@/static/image/image.png" alt="">
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