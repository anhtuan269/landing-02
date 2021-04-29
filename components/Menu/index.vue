<template>
  <div class="flex justify-end tablet:justify-center items-center">
    <ul class=" tablet:flex items-center text-white hidden " >
    <li v-for="(item, index) in menu" :key="index" class="menu-item  desktop:ml-10 tablet:ml-6 py-2">
      <nuxt-link :to="item.link">{{item.name}}</nuxt-link>
    </li>
  </ul>
  <div class="border-2 border-white py-2 px-4 text-white text-14 font-semibold uppercase tablet:hidden">menu</div>
  </div>
</template>

<script src="./script.js"></script>

<style src="./style.css" >
   
</style>