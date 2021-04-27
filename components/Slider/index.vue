<template>
  <div class="text-right overflow-x-hidden ">
    <img class="mb-10 ml-auto" src="@/static/image/udix.2.png" alt="" />
    <h2 class="text-34 leading-h3 font-semibold">
      is a leading provider of digital marketing services
    </h2>
    <Carousel
      :visibleSlide="visibleSlide"
      :total="total"
    >
      <Slide
        v-for="(slide, index) in slides"
        :key="index"
        :index="index"
        :visibleSlide="visibleSlide"
        :direction="direction"

      >
        <p class="pt-50 leading-l-24">{{ slide.content }}</p>
      </Slide>
    </Carousel>
     <div class="flex items-center justify-end pt-48 opacity-30 ">
      <button class="focus:outline-none" @click="pre">
        <svg
          width="30"
          height="18"
          viewBox="0 0 30 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.1395 0.941454C8.378 1.19651 8.378 1.61045 8.1395 1.8654L2.0842 8.3465H29.3895C29.7266 8.3465 30 8.63913 30 8.99993C30 9.36073 29.7266 9.65336 29.3895 9.65336H2.0843L8.1397 16.1346C8.378 16.3896 8.3781 16.8035 8.1396 17.0586C7.9012 17.3138 7.5146 17.3138 7.2762 17.0585L0.178801 9.4619C0.0596008 9.33438 0 9.1671 0 8.99993C0 8.83277 0.0595989 8.66549 0.1789 8.53796L7.2763 0.941454C7.5146 0.686182 7.9012 0.686182 8.1395 0.941454Z"
            fill="#222222"
          />
        </svg>
      </button>
      <p class="mx-5 font-normal heading-l-24" >{{visibleSlide + 1}} / {{total}}</p>
      <button class="focus:outline-none" @click="next">
          <img src="@/static/image/right.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import Carousel from "./carousel";
import Slide from "./carousel_slide";
export default {
  data() {
    return {
      slides: [
        {
          content:
            "Using proprietary tools and we run thousands of simultaneous self-funded campaigns across different platforms such as paid search, social advertising, mobile and video ads and many more. The campaigns either support our publishing assets or (in most cases) direct users directly to our clients.",
        },
        {
          content:
            " and we run thousands of simultaneous self-funded campaigns across different platforms such as paid search, social advertising, mobile and video ads and many more. The campaigns either support our publishing assets or (in most cases) direct users directly to our clients.",
        },
      ],
      visibleSlide: 0,
      direction: "",
    };
  },
  components: {
    Slide,
    Carousel,
  },
  methods: {
    next() {
        this.direction = "left";
      if (this.visibleSlide >= this.total - 1) {
        return (this.visibleSlide = 0);
      } else {
        this.visibleSlide++;
      }
      console.log(this.direction)
    },
    pre() {
        this.direction = "right";
      if (this.visibleSlide <= 0) {
        return (this.visibleSlide = this.total - 1);
      } else {
        this.visibleSlide--;
      }
      console.log(this.direction)

    },
  },
  computed: {
    total() {
      return this.slides.length;
    },
  },
};
</script>

<style>
</style>