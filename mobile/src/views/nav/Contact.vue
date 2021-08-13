<template>
    <div class="contactContainer">
        <!-- 关于我们 -->
        <div class="aboutUs">
            <!-- 关于我们大标题 -->
            <div class="title">ABOUT US</div>
            <!-- 次标题1 -->
            <div class="step">/STEP BY STEP</div>
            <!-- 内容1 -->
            <div class="stepcon">Steppy is a creative media company founded in China in 2013. 
                The core concept is to use creativity to change the lifestyle of young Chinese 
                and enhance the lifestyle of young Chinese. Our business area covers all aspects 
                of life. In the past seven years, we have established diversified partnerships 
                with many quality brands around the world and have gained a good reputation in 
                the Chinese market.</div>
            <!-- 次标题2 -->
            <div class="steppyplus">/STEPPYPLUS</div>
            <!-- 内容2 -->
            <div class="steppypluscon">Steppyplus is a trend culture production unit that 
                continuously designs and develops high-quality trend lifestyle products based 
                on the trend lifestyle knowledge learning advocated by steppy trend weekly and 
                the current situation of the fans of steppy trend weekly.</div>
            <!--内容3 -->
            <div class="steppypluscon2">Steppyplus starts from the concept of "connectivity" to 
                transform the seemingly ordinary items in life into a trend, arousing the uncertainty 
                and possibility of all simple things, and endowing them with stronger trend attributes 
                and styles.</div>
        </div>
        <!-- 联系我们 -->
        <div class="contactUs">
            <!-- 联系我们大标题 -->
            <div class="title">CONTACT US</div>
            <!-- 邮箱 -->
            <div class="email">Email：steppywechat@sina.com</div>
        </div>
    </div>
</template>
<script>
export default {
  computed:{
    //获取对应页面logoshow属性的bool值
    logoShow(){
        return this.$route?.meta?.logoshow;
    }
  }
}
</script>
<style>
.contactContainer{
    width: 100%;
    font-family: "helveticaneueltpro-blk";
}
/*引用字体*/
@font-face {
  font-family: "helveticaneueltpro-blk";
  src: url("../../assets/helveticaneueltpro-blk.ttf");
}
/* 关于我们 */
.contactContainer .aboutUs{
    width: 90%;
    height: auto;
    background: #fff;
    margin: 5%;
    border: 0.3125rem #000 solid;
    border-radius: .625rem;
    box-sizing: border-box;
}
/* 大标题、次标题的共同样式 */
.contactContainer .aboutUs .title,.step,.steppyplus{
    width: 100%;
    font-weight: bold;
    font-style: italic;
    color: black;
}
/* 关于我们大标题 */
.contactContainer .aboutUs .title{
    height: auto;
    font-size: 2em;
    text-align: center;
    margin: 1.25rem auto;
}
/* 次标题 */
.contactContainer .aboutUs .step,.steppyplus{
    font-size: 1.2em;
    margin-left: 0.625rem;
}
/* 内容 */
.contactContainer .aboutUs .stepcon,.steppypluscon,.steppypluscon2{
    width: 94%;
    font-size: 0.9em;
    font-weight: bold;
    white-space: pre-wrap;
    text-indent: 2em;
    padding: 0.5rem;
    word-break: break-all;
    color: #666;
}
/* 联系我们 */
.contactContainer .contactUs{
    width: 90%;
    height: auto;
    background: #fff;
    margin: 0 5% 5% 5%;
    border: 0.3125rem #000 solid;
    border-radius: .625rem;
    box-sizing: border-box;
}
/* 联系我们大标题 */
.contactContainer .contactUs .title{
    height: auto;
    font-size: 2em;
    text-align: center;
    margin: 1.25rem auto;
    font-style: italic;
}
/* 邮箱 */
.contactContainer .contactUs .email{
    width: 95%;
    font-size: 1em;
    white-space: pre-wrap;
    padding: 0 0.5rem;
    word-break: break-all;
    color: #666;
}
</style>