<template>
  <div class="articleContainer">
    <!-- 文章页顶部 -->
    <div class="articleTop"></div>
    <!-- 文章盒子 -->
    <router-link
      tag="div"
      v-for="list in item"
      :key="list._id"
      class="box"
      :to="`articlesIn/${list._id}`"
    >
    <!-- 文章图片 -->
      <div class="boxImg">
        <img :src="list.image" />
      </div>
      <!-- 文章图片右侧内容-->
      <div class="boxCon">
        <!-- 文章标题 -->
        <div class="boxTitle">{{ list.title }}</div>
        <!-- 文章作者 -->
        <div class="boxAuthor">— {{ list.author }}</div>
      </div>
    </router-link>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      //格式化日期
      return dayjs(val).format("YYYY/MM/DD");
    },
  },
  data() {
    return {
      item: [],
      query: {
        //查询多少条
        limit: 50,
        //排序
        sort: { _id: -1 },
        //上线
        where: { release: { $gte: 1 } },
      },
    };
  },
  methods: {
    //获取文章
    async fetch() {
      const article = await this.$http.get("articles", {
        params: {
          query: this.query,
        },
      });
      this.item = article.data;
    },
  },
  created() {
    this.fetch();
  },
  computed: {
    //获取对应页面logoshow属性的bool值
    logoShow() {
      return this.$route?.meta?.logoshow;
    },
  },
};
</script>
<style>
.articleContainer {
  width: 100%;
}
/* 文章页顶部 */
.articleTop {
  width: 100%;
  height: 7.5rem;
  background: transparent url("../../assets/article.png") center no-repeat;
  background-size: 50%;
  margin-top: 3rem;
}
/* 文章盒子 */
.box {
  width: 90%;
  height: 7.5rem;
  background: #0e315e;
  margin: 5%;
  display: flex;
}
/* 文章图片 */
.boxImg {
  width: 50%;
  height: inherit;
  background: #ccc;
}
.boxImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 文章图片右侧内容 */
.boxCon {
  width: 50%;
  height: auto;
  padding: 3%;
  color: #fff;
  font-weight: bold;
}
/* 文章标题 */
.boxCon .boxTitle {
  width: 100%;
  height: 80%;
  text-align: left;
  font-size: 0.6em;
}
/* 文章作者 */
.boxCon .boxAuthor {
  width: 100%;
  height: 20%;
  text-align: right;
  font-style: italic;
  font-size: 1em;
}
</style>