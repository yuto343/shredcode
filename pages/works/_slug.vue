<template>
    <div>
         <nuxt-link to="/works"><div class="sp_backbtn">
                 <div class="wrapper_sp">
                        <span v-for="i in 9" :key="i"></span>
                </div>
                </div>
        </nuxt-link>
        <div class="content_header">
            <div class="desc">
                <nuxt-link to="/works">
                <div class="back_btn" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
                    <div class="wrapper">
                        <span v-for="i in 9" :key="i"></span>
                    </div>
                </div>
            </nuxt-link>
                <p class="date">{{post.fields.date}}</p>
                <p class="title">{{post.fields.title}}</p>
            </div>
        </div>
        <div class="screen">
            <video autoplay muted loop v-bind:src="'https:'+ post.fields.screen.fields.file.url"></video>
        </div>
        <div class="disc japanese">
            {{post.fields.discription}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {createClient} from '~/plugins/contentful.js'
import anime from 'animejs'
const client = createClient()
    export default {
        async asyncData ({ env, params }) {
            return await client.getEntries({
                'content_type': "page",
                'fields.path': params.slug,
                order: '-sys.createdAt'
            }).then(entries => {
                return {
                post: entries.items[0],
                }
            })
            .catch(console.error)
        },
        methods: {
            mouseEnter(){
                anime({
                    targets:".wrapper span",
                    background: '#FFF',
                    delay: function(el, i, l) {
                    return i * 50;
                    },
                })
            },
            mouseLeave(){
                  anime({
                    targets:".wrapper span",
                    background: '#202020',
                    delay: function(el, i, l) {
                    return i * 50;
                    },
                })
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
.sp_backbtn{
        cursor: pointer;
        margin: 15px 30px;
        width: 50px;
        height: 30px;
        border-radius: 180px;
        background-color: #3D3D3D;
        transition: .2s;
        display: none;
        @include sp{
            display: block;
        }
        &:hover{
            transform: scale(1.2)
        }
        .wrapper,.wrapper_sp{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 4px;
            width: 20px;
            top: 4px;
            left: 15px;
            position: relative;
            span{
            width: 4px;
            height: 4px;
            background-color: #202020;
            border-radius: 50%;
            display: inline-block;
            }
        }
    }
.content_header{
    margin: 30px auto;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 30px;
    border-radius: 180px;
    position: relative;
    .back_btn{
        cursor: pointer;
        position: absolute;
        margin: 0px 30px;
        width: 50px;
        left: -100px;
        height: 30px;
        border-radius: 180px;
        background-color: #3D3D3D;
        transition: .2s;
        @include sp{
            display: none;
        }
        &:hover{
            transform: scale(1.2)
        }
        .wrapper{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 4px;
            width: 20px;
            margin: 5px auto;
            span{
            width: 4px;
            height: 4px;
            background-color: #202020;
            border-radius: 50%;
            display: inline-block;
            }
        }
    }
    .desc{
        position: relative;
        display:flex;
        min-width: 600px;
        height: 30px;
        border-radius: 180px;
        background-color: #3D3D3D;
        @include sp{
            min-width: 0px;
            padding: 0px 20px;
        }
        .title{
            position: relative;
            top: 1px;
            color: #B5B5B5;
            font-family: 'Kosugi Maru', sans-serif;
            font-size: 14px;
            line-height: 30px;
            letter-spacing: 2px;
            width: 100%;
            text-align: center;
        }
        .date{
            position: absolute;
            top: 1px;
            left: 12px;
            color: #202020;
            line-height: 30px;
            letter-spacing: 1px;
            font-size: 17px;
            @include sp{
                display: none;
            }
        }
    }
}
.screen{
    background-color: #3d3d3d;
    border: solid 3px #3d3d3d;
    border-radius: 20px;
    min-width:600px;
    width: 50%;
    margin: auto;
    // height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @include sp{
        width: 100%;
        box-sizing: border-box;
        min-width:0px;
    }
    video{
        width: 100%;
    }
}
.disc{
    color: #B5B5B5;
    width: 60%;
    max-width: 700px;
    text-align: center;
    margin: 40px auto auto auto;
    @include sp{
        width: 90%;
    }
}

</style>