<template>
<div id="app">
    <headers></headers>
    <!-- main view -->
    <Container></Container>
    <foot></foot>
</div>
</template>

<script>
import Vue from 'vue';
import headers from './components/header.vue';
import Container from './components/container.vue';
import foot from './components/footer.vue';

export default {
  components: {
    headers,Container,foot
  },
  mounted(){


  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0
}
body{
  margin: 0 auto;
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
</style>
