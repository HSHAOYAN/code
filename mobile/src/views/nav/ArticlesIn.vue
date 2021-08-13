<template>
    <div class="articlesInCon">
        <router-link to="/articles">
            <!-- 返回按钮 -->
            <div class="returnArt"></div>
        </router-link>
        <!-- 顶部头图 -->
        <div class="topPic">
            <img :src="model.image" />
        </div>
        <!-- 文章标题 -->
        <div class="title">{{model.title}}</div>
        <hr />
        <!-- 文章信息 -->
        <div class="info">
            <!-- 文章分类 -->
            <div class="category">Category</div>
            <!-- 文章日期 -->
            <div class="data">{{model.publishtime | date}}</div>
            <!-- 文章作者 -->
            <div class="author">{{model.author}}</div>
        </div>
        <!-- 文章正文 -->
        <div class="content">
            <div v-html="model.body"></div>
        </div>
        
        <hr />
        <!-- 更多推荐 -->
        <div class="more">更多推荐</div>
        <div class="morebox">
            <div class="moreboxImg">
                <img src="../../assets/111.jpg" alt="">
            </div>
            <div class="moreboxCon">
                <div class="moreboxData">DATA: 2021/7/22</div>
                <div class="moreboxCate">Category: article</div>
            </div>
        </div>
    </div>
</template>
<script>
import dayjs from "dayjs";
export default {
    props: {
        _id:{required:true}
    },
    filters: {
        date(val) {
            //格式化日期
            return dayjs(val).format("YYYY/MM/DD");
        }
    },
    data(){
        return{
            item: [],
            model:{}
        }
    },
    methods: {
        //获取文章
        async fetch(){
            const res = await this.$http.get(`articles/${this._id}`);
            this.model = res;
        }
    },
    created(){
        this.fetch();
    },
    computed:{
        //获取对应页面logoshow属性的bool值
        logoShow(){
            return this.$route?.meta?.logoshow;
        }
    }
}
</script>
<style>
.articlesInCon{
    width: 100%;
    background: #eee;
}
/* 顶部头图 */
.topPic{
    width: 92%;
    height: 11.25rem;
    padding: 10% 4%;
}
.topPic img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
/* 返回按钮 */
.returnArt{
    width: 3.125rem;
    height: 3.125rem;
    background: #3359ff url("../../assets/return.png") 1.2rem 1.2rem no-repeat;
    background-size: 40%;
    position: fixed;
    bottom: 0;
    right: 0;
    border-top-left-radius: 3.125rem;
}
/* 文章标题 */
.title{
    width: 92%;
    height: 10%;
    color: #000;
    font-size: 1.3em;
    font-weight: bold;
    margin: 0% 4%;
}
hr{
    width: 92%;
    margin: 2% 4% 1% 4%;
}
/* 文章信息 */
.info{
    width: 92%;
    height: 5%;
    padding: 0.5% 4%;
    color: #666;
    font-size: 0.5em;
    display: flex;
}
/* 分类 */
.info .category{
    flex-grow: 6;
}
/* 日期 */
.info .data{
    flex-grow: 2;
    text-align: center;
}
/* 作者 */
.info .author{
    flex-grow: 2;
    text-align: right;
}
/* 文章正文 */
.content{
    width: 92%;
    height: auto;
    padding: 15% 4%;
    font-size: 0.8em;
}
.content img{
    max-width: 100%;
}
.content p{
    margin: 0;
}
/* 更多推荐 */
.more{
    width: 92%;
    height: auto;
    padding: 15% 4% 8% 4%;
    font-size: 1.8em;
    font-weight: bold;
    color: #3359ff;
}
.morebox{
    width: 90%;
    height: 7rem;
    padding: 5%;
    display: flex;
}
.moreboxImg{
    width: 50%;
    height: inherit;
    background: #ccc;
}
.moreboxImg img{
    width: 100%;
    height: 100%;
}
.moreboxCon{
    width: 50%;
    height: auto;
    padding: 3%;
    background: #0e315e;

}
.moreboxCon .moreboxData,.moreboxCate{
    width: 100%;
    height: 20%;
    color: #fff;
    font-size: 0.6em;
    text-align: center;
}
</style>