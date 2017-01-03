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
@import "./css/base.less";
</style>
