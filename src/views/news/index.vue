<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <mt-cell v-for="item in newsArr" title="新闻标题" is-link></mt-cell>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newsArr:[1,2,3,4,5,6,7,8,9,10]
    }
  }
}
</script>

<style lang="css">
</style>
