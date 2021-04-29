<template>
 <div class="root">
      <div class="heading" v-for="(item, index) in head" :key="index">
    <h2 class="text-60 text-menu font-bold desktop:w-full  leading-h2 tablet:w-11/12 tablet:mx-auto" v-show="item.title_show">
      {{ item.title }}
    </h2>
    <h2 class=" text-28 tablet:text-34 font-bold max-w-18  mx-0 tablet:max-w-full" v-show="item.normal_show">
      {{ item.normal_title }}
    </h2>
     <h2 class=" text-28 tablet:text-34 font-bold max-w-18 mx-auto tablet:mx-0 tablet:max-w-full" v-show="item.special">
      {{ item.normal_title }}
    </h2>
    <p class="text-white mt-5 text-18 tablet:text-24 desktop:w-full heading-l-24 desktop:mt-10 tablet:mt-30 tablet:w-8/12 tablet:mx-auto" v-show="item.title_show">{{item.description}}</p>
     <p class="  heading-l-24 mt-5  text-14 tablet:text-16 tablet:mt-30" v-show="item.normal_show">{{item.description}}</p>
     <p class="  heading-l-24 mt-5  opacity-70 mx-auto w-full text-14 tablet:text-16" v-show="item.special">{{item.description}}</p>
  </div>
 </div>
</template>

<script>
export default {
  props: {
    head: {
      type: Array,
      default: () => {
        return [
          {
            title: "Focus on the work that matters",
            description:
              "udix is the world’s first smart workspace. We bring all your team’s content together while letting you use the tools you love.",
            normar_title: "",
            title_show: true,
            normal_show: false,
            special:false
          },
        ];
      },
    },
  },
};
</script>

<style>
</style>