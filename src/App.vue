<template>
<div id="app">
  <!-- main view -->
    <Container></Container>
    <foot></foot>
</div>
</template>

<script>
import Vue from 'vue';
import Header from 'mint-ui/lib/Header';
import Container from './components/container.vue';
import foot from './components/footer.vue';
Vue.component(Header.name, Header);

export default {
  components: {
    Container,foot
  },
  mounted(){
  //  console.log(this.$route.name);
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0
}
body{
  margin: 0 auto;;;
  padding: 0;
  max-width: 640px;
  font-size: 16px;
}
a{
  color:#505050;
}
ul li{
  list-style-type: none;
}
#app{
  margin: 0 auto;
}
.mint-tabbar.is-fixed,.mint-header,.is-fixed,.mint-popup{
    max-width: 640px;
    margin: 0 auto;
}
.mint-tabbar{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.mint-header{
  z-index: 9999 !important;
  background-color: #f63939;
}
</style>
