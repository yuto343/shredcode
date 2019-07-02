<template>
    <transition v-on:before-enter="enter">
        <div class="container">
            <p class="english">Yuto Nakano</p>
            <p class="english">I'm a web designer / front end engineer</p>
            <p class="english left">This web site is used for my study and practice 
            about javascript and css expressions. 
            </p>
            <p class="japanese left">
                このウェブサイトは僕のjsとcss表現の練習を置いておく場所として使われています。
            </p>
        </div>
    </transition>
</template>

<script>
import anime from 'animejs'
    export default {
        layout:'console',
        methods: {
            enter(el) {
                anime({
                    targets:el,
                    opacity:[0,1],
                    rotate:360
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.container{
    background-color: #3D3D3D;
    color: #B9B9B9;
    width: 700px;
    border-radius: 20px;
    text-align: center;
    padding: 20px 30px;
    margin: auto;
    p{
        margin: 30px;
    }
    .left{
        line-height: 1.5;
        text-align: left;
    }
}

</style>