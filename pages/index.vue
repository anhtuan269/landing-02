<template>
  <div id="app">
    <Hero />
    <Content />
    <Divider />
    <Feature />
    <Divider />
    <Content_2 />

  </div>
</template>

<script>
import Hero from "@/components/Sections/Hero.vue";
import Content from '@/components/Sections/Text_content_1.vue';
import Content_2 from '@/components/Sections/Text_content_2.vue';
import Divider from '@/components/Sections/Divider.vue'
import Feature from '@/components/Sections/Feature.vue'
export default {
  components: {
    Hero,
    Content,
    Content_2,
    Divider,
    Feature
  },
};
</script>

<style>
</style>
