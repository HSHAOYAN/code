<template>
  <div class="container">
    <div class="menu">
      <!-- 左侧菜单按钮 -->
      <button class="menuBtn" @click="showDrawer" v-if="menushow">
      </button>
      <router-link to="/">
      <!-- 左侧底部logo按钮 -->
        <div class="logoBtn" v-if="logoShow"></div>
      </router-link>
    </div>
    <!-- 展开菜单 -->
    <div class="tabMenu" v-if="tabmenushow">
      <!-- 展开菜单顶部按钮-->
      <button class="selectMenu" @click="closeDrawer"></button>
      <router-link to="/articles">
        <div class="articleBtn" @click="closeDrawer"></div>
      </router-link>
      <router-link to="/mook">
        <div class="mookBtn" @click="closeDrawer"></div>
      </router-link>
      <router-link to="/activity">
        <div class="activityBtn" @click="closeDrawer"></div>
      </router-link>
      <router-link to="/others">
        <div class="othersBtn" @click="closeDrawer"></div>
      </router-link>
      <router-link to="/contact">
        <div class="contactBtn" @click="closeDrawer"></div>
      </router-link>

      <!-- 实时时间 -->
      <div class="localTime">{{ localTime }}</div>
    </div>
    <!-- 展开菜单后右侧蒙版 -->
    <div class="mask" v-if="tabmenushow" @click="closeDrawer"></div>
    <!--按钮右侧页面内容-->
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //是否显示首页左侧按钮
      menushow: true,
      //是否显示菜单
      tabmenushow: false,
      //实时时间
      localTime: "",
      test:[]
    };
  },
  mounted() {
    this.nowTimes();
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    //显示菜单抽屉
    showDrawer() {
      this.menushow = false;
      this.tabmenushow = true;
    },
    //关闭菜单抽屉
    closeDrawer() {
      this.menushow = true;
      this.tabmenushow = false;
    },
    //获取时间并格式化
    timeFormate(timeStamp) {
      let hours = new Date(timeStamp).getHours()< 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let minutes = new Date(timeStamp).getMinutes()< 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let seconds = new Date(timeStamp).getSeconds()< 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      this.localTime = hours + ":" + minutes + ":" + seconds;
    },
    //创建定时器
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    //销毁定时器
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    },
  },
  computed:{
    //获取对应页面logoshow属性的bool值
    logoShow(){
      return this.$route?.meta?.logoshow;
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #13417d;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
/* 右侧页面 */
.container .page{
  width: 20.3125rem;
  height: 100vh;
  margin-left: 3.125rem;
  background: #13417d;
  overflow-x: hidden;
}
/* 菜单盒子 */
.menu{
  width: 3.125rem;
  height: 100vh;
  position: fixed;
  background: #3359ff;
}
/* 左侧菜单按钮 */
.menuBtn {
  width: 3.125rem;
  height: 100vh;
  background: transparent url("../assets/menu.png") no-repeat;
  background-position-x: center;
  background-position-y: 1rem;
  background-size: 40%;
  border: none;
}
/* 左侧底部菜单按钮 */
.logoBtn{
  width: 3.125rem;
  height: 6.25rem;
  background: transparent url("../assets/menulogo.png") center no-repeat;
  background-size: 80%;
  bottom: 1rem;
  position: absolute;
}
/* 展开菜单 */
.tabMenu {
  width: 11.75rem;
  height: 100vh;
  background: #3359ff;
  position: fixed;
}
/* 展开菜单顶部按钮 */
.selectMenu {
  width: 3.125rem;
  height: 3.125rem;
  background: transparent url("../assets/menu.png") no-repeat;
  background-position-x: center;
  background-position-y: 1rem;
  background-size: 40%;
  border: none;
  position: fixed;
}
/* 五个菜单选项 */
.articleBtn,.mookBtn,.activityBtn,.othersBtn,.contactBtn{
  width: 9.375rem;
  height: 6.25rem;
  margin-left: 1.1875rem;
  margin-bottom: 0.3125rem;
}
/* 文章 */
.articleBtn {
  background: transparent url("../assets/article.png") center no-repeat;
  background-size: 100%;
  margin-top: 5rem;
}
/* 杂志 */
.mookBtn {
  background: transparent url("../assets/mook.png") center no-repeat;
  background-size: 100%;
}
/* 活动 */
.activityBtn {
  background: transparent url("../assets/activity.png") center no-repeat;
  background-size: 100%;
}
/* 其他 */
.othersBtn {
  background: transparent url("../assets/others.png") center no-repeat;
  background-size: 100%;
}
/* 联系 */
.contactBtn {
  background: transparent url("../assets/others.png") center no-repeat;
  background-size: 100%;
}
/* 实时时间 */
.localTime {
  width: 11.75rem;
  height: 1.875rem;
  color: white;
  font-size: 1.3em;
  text-align: center;
  position: absolute;
  bottom: 0.5rem;
}
/* 展开菜单后右侧蒙版 */
.mask{
  width: 11.6875rem;
  height: 100vh;
  background: rgba(255, 255, 255, 0.2);
  position: fixed;
  margin-left: 11.75rem;
}

</style>