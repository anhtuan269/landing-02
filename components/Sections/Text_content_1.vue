<template>
  <div class=" max-w-d mx-auto flex justify-between ">
      <div class="mt-70 w-3/5">
        <img src="@/static/image/image.png" alt="">
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