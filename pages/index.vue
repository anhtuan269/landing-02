<template>
  <div id="app">
    <Hero />
    <Content />
  </div>
</template>

<script>
import Hero from "@/components/Sections/Hero.vue";
import Content from '@/components/Sections/Text_content_1.vue'
export default {
  components: {
    Hero,
    Content
  },
};
</script>

<style>
</style>
