<template>
 <div class="root">
      <div class="heading" v-for="(item, index) in head" :key="index">
    <h2 class="text-60 text-menu font-bold leading-h2" v-show="item.title_show">
      {{ item.title }}
    </h2>
    <h2 class="text-34 font-bold" v-show="item.normal_show">
      {{ item.normal_title }}
    </h2>
    <p class="text-white text-24 heading-l-24 mt-10" v-show="item.title_show">{{item.description}}</p>
     <p class="  heading-l-24 mt-10" v-show="item.normal_show">{{item.description}}</p>
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
          },
        ];
      },
    },
  },
};
</script>

<style>
</style>