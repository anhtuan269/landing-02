<template>
  <div class="flex justify-center items-center mt-4 tablet:mt-0" >
    <ul class=" flex items-center text-black justify-center" >
    <li v-for="(item, index) in menu" :key="index" class="menu-item text-14 :tablet:text-16 mr-5 last:mr-0 desktop:ml-10 py-2 tablet:ml-5  tablet:mr-0">
      <nuxt-link :to="item.link">{{item.name}}</nuxt-link>
    </li>
  </ul>
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