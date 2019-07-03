<template>
    <div class="wrapper">
        <P class="japanese disc" >なんでコンタクトがいるんだと思った人。netlifyで簡単に作れると聞いて試してみたかっただけです。でもつこうてくれたら嬉しいです。</P>
        <form name="contact" netlify>
            <div class="section">
                <P>お名前など</P>
                <input class="text" type="text" name="name">
            </div>
             <div class="section">
                <P>メール</P>
                <input class="email" type="text" name="email">
            </div>
            <div class="content_sec">
                 <P>内容</P>
                 <textarea name="content" rows="6" cols="240"></textarea>
            </div>
            <div class="section">
                <button class="submit" type="submit">送信</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        layout:'console'
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
 .wrapper{
        margin: auto;
        .disc{
            margin: auto;
            line-height: 2;
            max-width: 700px;
            color: #B5B5B5;
            @include sp{
                 margin: 10px auto;
                 line-height: 1.4;
            }
        }
        @include sp{
            width: 95%;
        }
    }
form{
    .section{
        margin: 40px;
        display: flex;
        justify-content: center;
        @include sp{
            display: block;
            margin: 20px auto;
            text-align: center;
        }
        p{
            font-size: 15px;
            padding: 10px 0px;
            text-align: center;
            width: 115px;
            border-radius: 100px;
            color: #202020;
            background-color: #3d3d3d;
            margin-right: 40px;
            @include sp{
                margin-bottom: 10px;
            }
        }
        .text{
            background-color: #3d3d3d;
            border-radius: 100px;
            border:none;
            width: 300px;
            color: #B5B5B5;
            font-size: 15px;
            padding: 0px 20px;
            &:focus{
                outline: none;
                border: 2px solid #B5B5B5;
            }
            @include sp{
                padding:10px 20px;
            }
        }
        .submit{
            background-color: #3d3d3d;
            border-radius: 100px;
            width: 115px;
            border:none;
            color: #B5B5B5;
            font-size: 15px;
            padding: 10px 20px;
            &:focus{
                outline: none;
                border: 2px solid #B5B5B5;
            }
        }
    }
    .content_sec{
         width: 495px;
         margin: auto;
        text-align: center;
        @include sp{
            width: 100%;
        }
        p{
            border-radius: 100px;
            font-size: 15px;
            padding: 10px 0px;
            text-align: center;
            width: 115px;
            color: #202020;
            background-color: #3d3d3d;
            margin-bottom: 30px;
        }
        textarea{
            width: 100%;
            background-color: #3d3d3d;
            color: #B5B5B5;
            border:none;
            border-radius: 10px;
            padding: 10px;
            box-sizing: border-box;
            font-size: 15px;
             &:focus{
                outline: none;
                border: 2px solid #B5B5B5;
            }
        }
    }
}

</style>