<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <div class="">
      <mt-cell v-for="item in onlineServerArr" title="常见问题项" is-link></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      onlineServerArr:[1,2,3,4,5,6,7,8,9,10],
    }
  }
}
</script>

<style lang="css">
</style>
