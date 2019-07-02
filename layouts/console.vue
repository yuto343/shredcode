<template>
  <div>
    <Thenavigation/>  
    <div class="flex">
       <transition v-on:before-enter="enter" v-on:before-leave="leave">
        <nuxt/>
       </transition>
    </div>
  </div>
</template>
<script>
import Thenavigation from '~/components/Thenavigation.vue'
import anime from 'animejs'
export default {
    components: {
        Thenavigation,
    },
   methods: {
    enter(el) {
        anime({
            targets:el,
            easing:'easeOutExpo',
            opacity:[0,1],
            translateY:[100,0]
        })
    },
    leave(el){
      anime({
        targets:el,
        easing:'easeOutExpo',
        opacity:[1,0],
        translateY:[0,-100],
      })
    }
  },
}
</script>
<style lang="scss">
  html{
      background-color:  #151515;
      font-family:'Fredoka One','Kosugi Maru', cursive;
  }
  .flex{
    display: flex;
    width: 100vw;
    align-items: center;
    height: calc(100vh - 100px);
  }
</style>
