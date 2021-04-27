<template>
  <div id="app">
    <Hero />
    <Content />
    <Divider />
  </div>
</template>

<script>
import Hero from "@/components/Sections/Hero.vue";
import Content from '@/components/Sections/Text_content_1.vue';
import Divider from '@/components/Sections/Divider.vue'
export default {
  components: {
    Hero,
    Content,
    Divider
  },
};
</script>

<style>
</style>
