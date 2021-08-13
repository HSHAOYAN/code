<template>
    <div class="container">
        <!-- 右上角logo -->
        <div class="logo"></div>
    </div>
</template>
<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.container{
    width: 100%;
    height: 100vh;
    background: transparent url("../assets/cover.png") center/cover no-repeat;
}
/* 右上角logo */
.container .logo {
  width: 6.25rem;
  height: 3.125rem;
  background: transparent url("../assets/logo.png") center no-repeat;
  background-size: 80%;
  position: fixed;
  margin-left: 14.0625rem;
}
</style>