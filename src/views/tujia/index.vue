<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <!-- 搜索框 -->
    <mt-search
      :value.sync="value"
      cancel-text="取消"
      placeholder="请选择目的地">
    </mt-search>
    <component-tujia-LazyLoadItem></component-tujia-LazyLoadItem>
  </div>
</template>

<script>
import tujiaLazyLoad from "../../components/tujiaLazyLoadItem"
export default {
  data(){
    return{

    }
  },
  components:{
    'component-tujia-LazyLoadItem':tujiaLazyLoad
  }
}
</script>

<style lang="less" scoped>
.mint-search{
  height: 100%;
}
</style>
