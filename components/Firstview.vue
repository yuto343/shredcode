<template>
  <transition appear v-on:before-appear="enter"> 
    <div class="first_view" @click='click' v-if="firstview">
        <img src="@/static/img/logo.png" alt="site logo">
        <h1>SHRED CODE</h1>
        <p id="span">
          <span>c</span>
          <span>l</span>
          <span>i</span>
          <span>c</span>
          <span>k</span>
          <span>&</span>
          <span>s</span>
          <span>t</span>
          <span>a</span>
          <span>r</span>
          <span>t</span>
          </p>
    </div>
  </transition>
</template>
<script>
import anime from 'animejs'
import {mapMutations, mapGetters} from 'vuex';
export default {
  data: function(){
    return{
      isOpening: false,
      wating:false,
      firstview:true,
    }
  },
  methods: {
    click(){
      this.isOpening = true
    },
    enter(){
      anime.timeline({
        easing:'easeOutExpo',
      })
      .add({
          targets:'img',
          opacity:[0,1],
          translateY:[-100,0],
      })
      .add({
          targets:'h1',
           opacity:[0,1],
          rotateX:360,
      },'-=1000')
      .add({
        targets:'p span',
        opacity:[0,1],
        // translateY:[100,0],
        rotateX:720,
        delay: function(el, i, l) {
          return i * 50;
        },
      },'-=400')
      this.wating = true
    },
    clickStart(){
      anime.timeline({
        easing:'easeOutExpo',
      })
      .add({
          targets:'img',
          opacity:[1,0],
          translateY:[0,-100],
      })
      .add({
          targets:'h1',
          opacity:[1,0],
          rotateX:360,
      },'-=1000')
      .add({
        targets:'#span span',
        opacity:[1,0],
        rotateX:720,
        translateY:[0,-100],
        delay: function(el, i, l) {
          return i * 50;
        },
      },'-=800')
    },
    watingAnim(){
      anime.timeline({
        targets:'#span span',
        easing:'easeOutExpo',
        loop: true,
      })
      .add({
        rotateX:360,
        // opacity:[0,1],
        delay: function(el, i, l) {
          return i * 50;
        },
      })
    },
    ...mapMutations({
      index:'index',
      // firstview: 'firstview'
    })
  },
  watch: {
    async isOpening (val){
      this.clickStart()
      await this.$delay(1000)
      this.firstview = false
      this.index()
    },
    wating(val){
      this.watingAnim()
    },
    firstview(val){
      this.firstview = false
    }
  }
}
</script>
<style scoped lang="scss">
.first_view{
  display: flex;
  flex-direction:column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
  letter-spacing: 0.2em;
  font-size: 20px;
  img{
    margin: 10px auto;
    display: block;
    min-width: 150px;
    max-width: 200px;
    align-items: center;
    width: 10%;
  }
  h1{
    // margin: 10px;
  }
  p{
    span{
      display: inline-block;
    }
    display:inline-block;
    margin-top: 100px;
    &::after{
    content:'';
    margin-top: 10px;
    display: block;
    margin: auto;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: .5s;
    transform-origin: center;
    border-radius: 10px;
    background-color: white;
    }
    &.active{
    &::after{
    transform: scaleX(1);
    }
    }
  }
}
.fade-enter{
    p::after{
        transform: scaleX(1)
    }
}
.fade-enter-active{
    opacity: 0;
}
</style>
