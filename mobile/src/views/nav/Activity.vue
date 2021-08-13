<template>
    <div>
        <div class="activityTop"></div>
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
.activityTop{
    width: 100%;
    height: 7.5rem;
    background: transparent url("../../assets/activity.png") center no-repeat;
    background-size: 50%;
    margin-top: 3rem;
}
</style>