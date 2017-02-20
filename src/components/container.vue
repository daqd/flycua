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
import {getDay,getNextDay} from '../js/common';
  export default {
    data(){
      return{
        transitionName:''
      }
    },
    created(){
      //初始化出发日期为今天的日期
      this.$store.dispatch('setOrgDate',getDay(0));
      //初始化到达日期为明天的日期
      this.$store.dispatch('setDstDate',getDay(1));
    },
    // watch $route 决定使用哪种过渡
    watch: {
      '$route' (to, from) {
        //console.log(this.$store.state.base.pageChangeStatus);
        this.$data.transitionName = this.$store.state.base.pageChangeStatus=="go"?'vux-pop-in':'vux-pop-out';
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
  transform: translate3d(50%, 0, 0);
}
.slide-in-enter{
  transform: translate3d(80%, 0, 0);
}
.slide-in-enter{
  transition: .25s all ease;
  transform: translate3d(100%, 0, 0);
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
  transform: translateX(-50%);
}
.slide-out-enter{
  transform: translateX(-80%);
}
.slide-out-enter{
  transition: .25s all ease;
  transform: translate3d(-100%, 0, 0);
}



/** 平滑过渡V2 **/
/**
* vue-router transition
*/
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
  top: 0;
  position: absolute;
}

.vux-pop-out-enter,
.vux-pop-out-leave,
.vux-pop-in-enter,
.vux-pop-in-leave {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}

.vux-pop-out-enter-active {
  animation-name: popInLeft;
}

.vux-pop-out-leave-active {
  animation-name: popOutRight;
}

.vux-pop-in-enter-active {
  perspective: 1000;
  animation-name: popInRight;
}

.vux-pop-in-leave-active {
  animation-name: popOutLeft;
}

@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes popOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes popInRight {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes popOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
