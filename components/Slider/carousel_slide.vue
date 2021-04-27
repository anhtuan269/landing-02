<template>
  <div class="relative">
      <transition :name="direction" mode="in-out">
    <div v-show="visibleSlide === index" class="carousel-slide absolute top-0 left-0 right-0 bottom-0">
      <slot></slot>
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  props: {
    visibleSlide: {
      type: Number,
      default() {
        return 0;
      },
    },
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
    direction:{
        type:String,
        return: ''
    }
  },
};
</script>

<style>
.left-enter-active{
    animation: leftInAnimation 0.4s ease-in-out;
}
.left-leave-active {
animation: leftOutAnimation 0.4s ease-in-out;

}
@keyframes leftInAnimation {
    from {
        transform: translateX(100%);
        

    }
    to { transform: translateX(0); }
}
@keyframes leftOutAnimation {
     from {
        transform: translateX(0)
        ;
        
    }
    to { transform: translateX(-100%);
    }
}
.right-enter-active{
    animation: rightInAnimation 0.4s ease-in-out;
}
.right-leave-active {
animation: rightOutAnimation 0.4s ease-in-out;
}
@keyframes rightInAnimation {
    from {
        transform: translateX(-100%);

    }
    to { transform: translateX(0);}
}
@keyframes rightOutAnimation {
     from {
        transform: translateX(0);

    }
    to { transform: translateX(100%);}
}
</style>