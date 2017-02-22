<template lang="html">
  <div class="MARGIN-TOP-40-PX" style="padding-top:10px">
    <!-- 乘机人 -->
    <div class="psg-name">
      米梦宇（成人）
    </div>
    <!-- <div class="flight-wrap">
      <div class="flightDate">
        2017-02-22
      </div>
      <div class="flightWeek">
        星期三
      </div>
      <div class="flightOrgCity">
        北京南苑
      </div>
      <div class="flightIcon">

      </div>
      <div class="flightDstCity">
        广州佛山
      </div>
      <div class="flightNextIcon">

      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="less" scoped>
.psg-name{
  width: 90%;
  height: 45px;
  background-color: #EEE;
  line-height:45px;
  margin: 0 auto;
  padding-left: 5px;
  border-radius: 8px;
  color: #505050;
}
.flight-wrap{
    width: 90%;
    height: 45px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    .flightWeek,.flightIcon,.flightNextIcon,.flightDate,.flightOrgCity,.flightDstCity{
      display: flex;
      flex: 1;
      height: 45px;
      justify-content: center;
      align-items: center;
    }
    .flightDate{
      width: 120px;
    }
}
</style>
