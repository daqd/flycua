<template>
  <div id="container">
    <transition name="">
      <keep-alive>
        <router-view keep-alive></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

</style>
