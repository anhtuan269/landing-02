<template>
  <div class="max-w-d mx-auto text-center pb-70">
      <Heading
      :head="head"
       />
       <div class="mt-90">
           <Card />
       </div>
  </div>
</template>

<script>
import Card from '@/components/Card/Card.vue'
import Heading from '@/components/Header/heading.vue'

export default {
    name:'Feature',
    data(){
        return {
            head: [
                {
                    title:'',
                    description:'Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts.',
                    normal_title:'Solutions that will change your business forever',
                    title_show:false,
                    normal_show: true
                },
            ]
        }
    },
    components: {
        Heading,Card
    }
}
</script>

<style>

</style>