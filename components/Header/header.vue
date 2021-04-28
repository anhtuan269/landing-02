<template>
  <div class="flex justify-center items-center">
    <ul class=" flex items-center text-black" >
    <li v-for="(item, index) in menu" :key="index" class="menu-item  ml-10 py-2">
      <nuxt-link :to="item.link">{{item.name}}</nuxt-link>
    </li>
  </ul>
  <div class="border-2 border-white py-2 px-4 text-white text-14 font-semibold uppercase md:hidden">menu</div>
  </div>
</template>

<script >
export default {
    props: {
        menu: {
            type: Array,
            require: true,
            default() {
                return [
                    {
                        id: 1,
                        name: "HOME",
                        link:'/'
                    },
                    {
                        id: 2,
                        name: "BLOG",
                        link:'/blog'
                    },
                    {
                        id: 3,
                        name: "PRODUCT",
                        link:'/product'
                    },
                    {
                        id: 4,
                        name: "CONTACTS",
                        link:'/contacts'
                    },
                ];
            },
        },
    }
};
</script>

<style  >
   
</style>