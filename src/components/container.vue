<template>
  <div id="container">
      <keep-alive>
        <router-view transition="cover" keep-alive></router-view>
      </keep-alive>
  </div>
</template>
<style>
/*
    router-view -> transition="cover"
    cover开头的 是router-view过渡切换是公用的样式
    _cover-* 是会被cover 影响的元素
*/

.cover-transition {
    opacity: 1;
    transition: .35s opacity ease;
}

.cover-enter,
.cover-leave {
    opacity: .98;
}
/*initial route transition 1*/

._cover-top {
    position: relative;
    z-index: 2;
    overflow: hidden;
    height: 45px;
    padding: 0 15px 0 10px;
    line-height: 45px;
    background: linear-gradient(to bottom, #303036, #3c3b40);
    opacity: 1;
    color: #ffffff;
    user-select: none;
    -webkit-user-select: none;
    transition: .22s all ease;
}


/*initial route transition 2*/

._cover-top .top-title {
    transition: .2s all ease;
}


/*initial route transition 3*/

._cover-content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    transition: .2s all ease-in-out;
    opacity: 1;
    transform: translate3d(0%, 0, 0);
    height: calc(100% - 45px);
    background-color: #efeff4;
    box-shadow: 0px 0 41px rgba(0, 0, 0, .1);
}


/*enter ,leaver*/


/*route transition 1*/

.cover-enter ._cover-top,
.cover-leave ._cover-top {
    opacity: 0;
}


/*route transition 2*/

.cover-enter ._cover-top .top-title,
.cover-leave ._cover-top .top-title {
    opacity: 0;
    transform: translate3d(50%, 0, 0);
}


/*route transition 3*/

.cover-enter ._cover-content {
    transform: translate3d(80%, 0, 0);
}

.cover-leave ._cover-content {
    transition: .25s all ease;
    transform: translate3d(100%, 0, 0);
}

</style>
