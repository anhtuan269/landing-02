<template>
  <div class="p-5 text-center bg-black text-white relative">
    <div class="px-200 py-100 text-center text-white">
      <Heading 
      :head="head"
      />
      <CTA />
    </div>
    <img class="absolute top-5 left-5" src="@/static/image/1.png" alt="">
    <img class="absolute right-5 bottom-5" src="@/static/image/2.png" alt="">
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