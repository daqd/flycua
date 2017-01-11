<template lang="html">
<div>
  <div class="onePxLineWrap paddingTopBottom">
    <div class="onePxLine">
      <div class="userCenterItemWrap">
        <div class="itemIcon">
          <slot name="userCenterImg">userCenterImg放置图片</slot>
        </div>
        <div class="itemContent">
          <div class="itemTitle">
            <slot name="userCenterName">名称</slot>
          </div>
          <div class="itemTip" v-if="isRedPaper">
            <div class="canBeUsed">可用红包总数<span class="setMainColor"> {{redPaperCount || 0}} </span>个</div>
            <div class="canNotBeUsed">可用红包总额<span class="setMainColor"> {{redPaperRMB || 0}} </span>元</div>
          </div>
          <div class="itemButton">
            <slot name="userCenterBtn"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:['isRedPaper','redPaperCount','redPaperRMB']
}
</script>

<style lang="less" scoped>
@import "../css/base.less";
@import "../css/common.less";
  .paddingTopBottom{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .userCenterItemWrap{
    clear: both;
    display: flex;
    width: 90%;
    min-height: 80px;
    max-height:120px;
    margin: 0 auto;

    .itemIcon{
      width: 40px;
      min-height: 80px;
      max-height: 120px;
      display: flex;
      justify-content:flex-start;
      align-items:flex-start;
    }
    .itemIcon img{
      width: 23px;
      height: 23px;
    }
    .itemContent{
      width: 100%;
      min-height: 80px;
      max-height: 120px;
      .itemTitle{
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
      }
      .itemTip{
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
      }
      .itemButton{
        width: 100%;
        height: 50px;
        line-height: 50px;
        .mint-button{
            padding-left: 5px;
            padding-right: 5px;
            height: 33px;
            font-size: 16px;
        }
      }
    }
  }
</style>
