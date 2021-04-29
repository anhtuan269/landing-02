<template>
  <div
    class="desktop:max-w-desktop mx-auto py-32 desktop:bg-white tablet:max-w-tablet tablet:bg-gray-100 tablet:bg-opacity-50"
  >
    <h2
      class="text-28 max-w-18  tablet:text-34 font-bold leading-l-h3 text-center desktop:pb-0 desktop:max-w-d tablet:max-w-690 mx-auto"
    >
      Working with a diverse global customer base
    </h2>
    <div class="desktop:pt-32 relative text-center left-a pt-30">
      <VueSlickCarousel v-bind="setting" ref="carousel" @init="onInitCarousel">
        <div v-for="(customer, index) in customers" :key="index" :index="index">
          <img class="bg-gray-200 py-5  desktop:px-30 tablet:px-30" :src="customer.img" alt="" />
        </div>
        <template #prevArrow="arrowOption">
          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        /*...*/
        <template #customPaging="page">
          <div class="custom-dot">
            {{ page }}
          </div>
        </template>
      </VueSlickCarousel>
      <div
        class="absolute left-0 top-0 w-4/12 h-full bg-gradient-to-r from-white tablet:w-3/12"
      ></div>
      <div
        class="absolute right-0 top-0 w-4/12 h-full bg-gradient-to-l from-white tablet:w-3/12"
      ></div>
      <div
        class="flex items-center justify-center opacity-30 pt-10 desktop:relative -left-11"
      >
        <button class="focus:outline-none" @click="showPrev">
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
        <p class="mx-5 font-normal heading-l-24">
          {{ visibleSlide + 1 }} / {{ total }}
        </p>
        <button class="focus:outline-none" @click="showNext">
          <img src="@/static/image/right.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script src="">
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Customer",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      setting: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode:true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              centerMode: true,
              centerPadding: "20px",
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "30px",
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "10px",
            },
          },
        ],
      },
      customers: [
        {
          id: 1,
          img: "/image/Group 687.png",
        },
        {
          id: 2,
          img: "/image/Group 688.png",
        },
        {
          id: 1,
          img: "/image/Group 689.png",
        },
        {
          id: 1,
          img: "/image/Group 690.png",
        },
        {
          id: 1,
          img: "/image/Group 691.png",
        },
        {
          id: 1,
          img: "/image/Group 692.png",
        },
        {
          id: 1,
          img: "/image/Group 690.png",
        },
      ],
      visibleSlide: 0,
    };
  },
  methods: {
    showNext() {
      if (this.visibleSlide >= this.total - 1) {
        return (this.visibleSlide = 0);
      } else {
        this.visibleSlide++;
      }
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
      if (this.visibleSlide <= 0) {
        return (this.visibleSlide = this.total - 1);
      } else {
        this.visibleSlide--;
      }
    },
    onInitCarousel() {
      console.log("our carousel is ready");
    },
  },
  computed: {
    total() {
      return this.customers.length;
    },
  },
};
</script>

<style>
</style>