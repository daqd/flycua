<template>
  <div id="container">
      <keep-alive>
        <transition :name="transitionName">
          <router-view></router-view>
        </transition>
      </keep-alive>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        transitionName:''
      }
    },
    // watch $route 决定使用哪种过渡
    watch: {
      '$route' (to, from) {
        //console.log(this.$store.state.base.pageChangeStatus);
        this.$data.transitionName = this.$store.state.base.pageChangeStatus=="go"?'slide-in':'slide-out';
      }
    }
  }
</script>
<style lang="css" scoped>

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-in-enter-active{
  transition: transform .3s ease-in-out;
}
.slide-in-leave-active{
  transition: transform .2s ease-in-out;
}
.slide-in-leave-active {
  opacity: 0.8;
  transform: translateX(-100%);
}
.slide-in-enter{
  opacity: 0.5;
  transform: translateX(100%);
}

.slide-out-enter-active {
  transition: transform .3s ease-in-out;
}
.slide-out-leave-active{
  transition: transform .2s ease-in-out;
}
.slide-out-leave-active {
  transform: translateX(100%);
}
.slide-out-enter{

  transform: translateX(-100%);
}
</style>
