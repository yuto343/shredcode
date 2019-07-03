<template>
  <transition  v-on:before-enter="enter" v-on:leave="leave"> 
     <div v-if='index'>
      <div class="header">
         <div class="btn" @click="goAbout">ABOUT</div>
         <div class="btn" @click="goWorks">WORKS</div>
         <div class="btn" @click="goContact">CONTACT</div>
      </div>
       <p class="english">
           <span v-for="letter in 'Pick!'" :key="letter">{{letter}}</span>
        </p>
       <p class="japanese">
            <span v-for="letter in '項目を選んでください！'" :key="letter">{{letter}}</span>
       </p>
    </div>
  </transition>
</template>
<script>
import anime from 'animejs'
import {mapMutations, mapGetters} from 'vuex';
import { async } from 'q';
export default {
  data:function(){
      return{
          isActive:'works',
          wating: false,
      }
  } ,   
  computed: {
      ...mapGetters({
          index: 'index'
      })
  },
  methods: {
      enter(el){
          anime.timeline({
              easing:'easeOutExpo',
               targets:el,
          })
          .add({
              opacity:[0,1],
              translateY:[-400,0],
          })
          this.wating = true
      },
      letterAnim(){
          anime.timeline({
              targets:'p span',
              loop:true,
          })
          .add({
            //   rotateY:360,
              translateY:[0,10],
              delay: function(el, i, l) {
                return i * 50;
              },
          })
          .add({
               translateY:[10,0],
              delay: function(el, i, l) {
                return i * 50;
              },
          },'-=500')
      },
      leave(el,done){
          anime.timeline({
              targets:el,
              easing:'easeOutExpo',
          })
          .add({
              opacity:[1,0]
          })
      },
      ...mapMutations({
          changeIndex:'index',
          setPage:'setPage'
      }),
       async goAbout(){
          this.changeIndex()
          await this.$delay(700)
          this.$router.push('about')
      },
      async goWorks(){
          this.changeIndex()
          await this.$delay(700)
          this.$router.push('works')
      },
      async goContact(){
          this.changeIndex()
          await this.$delay(700)
          this.$router.push('contact')
      }
  },
  watch: {
      wating(val){
         this.letterAnim()
      }
  }
}
</script>
<style lang="scss" scoped>
$breakpoint_tab:768px;
$breakpoint_sp:414px;
@mixin tab{
  @media(max-width:$breakpoint_tab){
      @content;
  }
}
@mixin sp{
  @media(max-width:$breakpoint_sp){
      @content;
  }
}
.header{
    a{
        color:#202020;
        text-decoration:none;
    }
  overflow: hidden;
  width: 700px;
  height: 30px;
  background-color: #3D3D3D;
  border-radius: 180px;
  color: #202020;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  font-size: 15px;
  letter-spacing: 0.1em;
  @include sp{
      width: 100%;
  }
  .btn{
      cursor: pointer;
    position: relative;
    padding: 0px 15px;
    border-radius:180px;
    z-index: 3;
    background: linear-gradient(90deg, #23074D -39.37%, #B20A2C 137.5%);
    &:before{
        transition: .2s;
        border-radius:180px;
        position: absolute;
        content:'';
        top:0;
        bottom:0;
        right: 0;
        left: 0;
        background-color:#3D3D3D;
        z-index: -1;
        transform-origin: right;
    }
    &:hover{
        &:before{
            transform:scalex(0);
        }
    }
    &:nth-child(1){
      padding-left: 15px;
    }
    &:nth-child(3){
      padding-right: 15px;
    }
  }
}
p{
    margin: 30px;
    color: #B5B5B5;
}
span{
    display: inline-block;
}
</style>
