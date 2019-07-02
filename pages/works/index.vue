<template>
     <div class="wrapper">
        <card 
        v-for="post in posts" 
        :key="post.title"
        :title="post.fields.title"
        :date = 'post.sys.createdAt'
        :path = "post.fields.path"
        :videourl = 'post.fields.screen.fields.file.url'
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import card from '@/components/card.vue'
import anime from 'animejs'
import {createClient} from '~/plugins/contentful.js'
const client = createClient()
    export default {
        components: {
            card
        },
        layout:'console',
        computed: {
            ...mapGetters({
                getPage:'page'
            })
        },
         async asyncData ({ env, params }) {
            return await client.getEntries({
            'content_type': env.CTF_PAGE_TYPE_ID,
            }).then(entries => {
            return {
                posts: entries.items
            }
            })
            .catch(console.error)
        },
        methods: {
            isActive(){
                anime({
                    targets:'.card',
                    easing:'easeOutExpo',
                    translateY:[400,0],
                    rotateY:[0,360],
                    opacity:[0,1],
                    delay: function(el, i, l) {
                    return i * 50;
                    },
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin: 40px auto auto auto;
}
</style>