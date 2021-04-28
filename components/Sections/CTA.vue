<template>
  <div class="tablet:bg-gray-100 desktop:bg-white">
    <div class="p-5 text-center bg-black text-white relative desktop:max-w-desktop tablet:max-w-690 tablet:mx-auto">
    <div class="desktop:px-200 desktop:py-100  desktop:max-w-d text-center text-white tablet:max-w-570 tablet:p-60 tablet:mx-auto">
      <Heading 
      :head="head"
      />
      <CTA />
    </div>
    <img class="absolute top-5 left-5" src="@/static/image/1.png" alt="">
    <img class="absolute right-5 bottom-5" src="@/static/image/2.png" alt="">
  </div>
  </div>
</template>

<script>
import Heading from "@/components/Header/heading";
import CTA from '@/components/CTA/CTA.vue'
export default {
  components: {
    Heading,
    CTA
  },
  data() {
    return {
      head: [
        {
          title: "",
          description:
            `Get the Onboarding Package for Free and enjoy our platform  with the support of our professional onboarding team.`,
          normal_title: "Working with us are the path to success",
          title_show: false,
          normal_show: false,
          special:true
        },
      ],
    };
  },
};
</script>

<style>
</style>