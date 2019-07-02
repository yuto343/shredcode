<template>
    <nuxt-link :to= "'works/'+ path">
        <div class="card">
            <div class="bg">
                <video :src="'https:'+videourl" loop muted autoplay></video>
            </div>
            <div class="filter">
                 <p>{{title}}</p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        props: ['title','date','path','videourl']
        
    }
</script>

<style lang="scss" scoped>
.card{
    width: 250px;
    height: 250px;
    background-color: #3d3d3d;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
     &:hover{
         .filter{
             transform:scale(1);
         }
    }
}
video{
    width: 100%;
    transform: scale(1.2);
    transform-origin: 50% 50%;
}
.filter{
    transform-origin: bottom;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 45%;
    border-radius: 0px 0px 20px 20px;
    background-color: #3D3D3D;
    transform:scaleY(0);
    transition: .3s;
    p{
        color: #B5B5B5;
        width: 100%;
        margin: 10px auto auto auto;
        text-align: center;
    }
}

</style>