<template>
  <div class=" desktop:max-w-d mx-auto
   flex desktop:flex-row desktop:justify-center
    items-center desktop:bg-white desktop:-mt-14 
     mt-0 py-100 bg-gray-100 flex-col-reverse">
      <div class="image desktop:w-6/12 ">
        <img src="@/static/image/content.png" alt="">
      </div>
      <div class="content desktop:w-5/12 relative  ml-3 tablet:w-9/12 tablet:mx-auto ">
          <Heading 
          :head="head1"
          />
          <Heading 
          :head="head2"
          class="mt-42 mb-42"

          />
          <nuxt-link to="/" class=" flex items-center justify-start font-bold">
              Check our solutions
              <img class="ml-2" src="@/static/image/arrow-right-1.png" alt="">
          </nuxt-link>
      </div>
  </div>
</template>

<script>
import Heading from '@/components/Header/heading.vue'
export default {
    name:'Text-slide-content-2',
    data() {
            return {
                head1:[
                    {
                        title:'',
                    description:'Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts on-call with the tools you need based on real-time results',
                    normal_title:'Creativity & Technology',
                    title_show:false,
                    normal_show: true
                    }
                ],
                head2:[
                    {
                        title:'',
                    description:'Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech.',
                    normal_title:'Defines our true value',
                    title_show:false,
                    normal_show: true
                    }
                ],

            }
        },
    components:{
        Heading
    }

}
</script>

<style scoped>
a.nuxt-link-exact-active {
       color:#381DDB;

}

</style>