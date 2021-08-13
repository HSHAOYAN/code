<template>
    <div>
        <div class="othersTop"></div>
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
.othersTop{
    width: 100%;
    height: 7.5rem;
    background: transparent url("../../assets/others.png") center no-repeat;
    background-size: 50%;
    margin-top: 3rem;
}
</style>