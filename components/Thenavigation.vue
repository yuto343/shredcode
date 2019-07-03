<template>
  <transition appear v-on:before-enter="enter">
    <div class="navigation">
      <nuxt-link to="/">
      <img src="@/static/img/logo.png" alt="site logo">
      </nuxt-link>
      <div class="header">
          <nuxt-link to="/about"><div class="btn" v-bind:class="{ active: about }">ABOUT</div></nuxt-link>
          <nuxt-link to="/works"><div class="btn" v-bind:class="{ active: works }">WORKS</div></nuxt-link>
          <nuxt-link to="/contact"><div class="btn" v-bind:class="{ active: contact }">CONTACT</div></nuxt-link>
      </div>
    </div>
  </transition>
</template>
<script>
  import anime from 'animejs'
import { mapGetters ,mapMutations } from 'vuex';
    export default {
        // data: function(){
        //   return{
        //     about:false,
        //     works:false,
        //     contact:false
        //   }
        // },
        methods: {
          enter(el){
            anime({
              targets:el,
              translateY:[-200,0]
            })
          },
          ...mapMutations({
            setPage:"setPage"
          })
        },
        created:function(){
          this.setPage()
        },
        computed: {
          ...mapGetters({
            getPage:'page',
            about:'about',
            works:'works',
            contact:'contact'
          })
        },
        watch: {
          getPage(el){
            this.setPage(el);
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
img{
  margin: 20px auto 10px auto;
  display: block;
  width: 5%;
  max-width: 150px;
  min-width: 50px;
}
.header{
    a{
        color:#202020;
        text-decoration:none;
    }
    margin:20px auto auto auto;
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
      width: 97%;
    }
  .btn{
      cursor: pointer;
    position: relative;
    padding: 0px 15px;
    border-radius:180px;
    z-index: 3;
    background: linear-gradient(90deg, #23074D -39.37%, #B20A2C 137.5%);
    &.active{
      &:before{
       transform:scaleX(0)
      }
    }
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
</style>