<template>
    <div class="mookContainer">
        <!-- 杂志页顶部 -->
        <div class="mookTop"></div>
        <!-- A-Z -->
        <div class="atoz">A-Z</div>
        <!-- 杂志区域 -->
        <div class="mook">
            <!-- 杂志盒子 -->
            <div class="mookBox">
                <!-- 杂志A -->
                <div class="mookImgA"></div>
                <!-- 杂志名字 -->
                <div class="mookName">AGED</div>
            </div>
            <div class="mookBox">
                <!-- 杂志B -->
                <div class="mookImgB"></div>
                <div class="mookName">BEYOND</div>
            </div>
            <div class="mookBox">
                <!-- 杂志C -->
                <div class="mookImgC"></div>
                <div class="mookName">CONSTRUCT</div>
            </div>
            <div class="mookBox">
                <!-- 杂志D -->
                <div class="mookImgD"></div>
                <div class="mookName">DEPARTURE</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  computed:{
    logoShow(){
      return this.$route?.meta?.logoshow;
    }
  }
}
</script>
<style>
.mookContainer{
    width: 100%;
}
/* 杂志页顶部 */
.mookTop{
    width: 100%;
    height: 7.5rem;
    background: transparent url("../../assets/mook.png") center no-repeat;
    background-size: 50%;
    margin-top: 3rem;
}
/* A-Z */
.atoz{
    width: 100%;
    height: 5%;
    color: #fff;
    font-size: 2em;
    text-align: center;
}
/* 杂志区域 */
.mook{
    width: 94%;
    height: fit-content;
    padding: 3%;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
}
/* 杂志盒子 */
.mookBox{
    width: 50%;
    height: 15rem;
}
/* 杂志A */
.mookBox .mookImgA{
    width: 84%;
    height: 11.25rem;
    padding: 8%;
    background: transparent url("../../assets/A.png") center 0/auto 120% no-repeat;
}
/* 杂志B */
.mookBox .mookImgB{
    width: 84%;
    height: 11.25rem;
    padding: 8%;
    background: transparent url("../../assets/B.png") center 0/auto 120% no-repeat;
}
/* 杂志C */
.mookBox .mookImgC{
    width: 84%;
    height: 11.25rem;
    padding: 8%;
    background: transparent url("../../assets/C.png") center 0/auto 120% no-repeat;
}
/* 杂志D */
.mookBox .mookImgD{
    width: 84%;
    height: 11.25rem;
    padding: 8%;
    background: transparent url("../../assets/C.png") center 0/auto 120% no-repeat;
}
/* 杂志名字 */
.mookBox .mookName{
    width: 80%;
    height: fit-content;
    padding: 0% 10%;
    color: #fff;
    text-align: center;
    font-weight: bold;
}
</style>