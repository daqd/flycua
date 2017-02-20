<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <!-- 日历控件主体 -->
    <div class="weeks is-fixed">
      <ul class="is-fixed">
        <li v-for="item in week">
          <div class="week-zh">{{item.en}}</div>
          <div class="week-en">{{item.zh}}</div>
        </li>
      </ul>
    </div>
    <!-- 日历主体部分生成 -->
    <div style="padding-top:50px;"></div>

    <div class="monthItemwrap" v-for="item in monthDetail">
      <div class="monthItemHead">
        {{item.detailTop}}
      </div>
      <div class="monthTable">
        <ul>
            <li v-for="childItem in item.detailStr" :data-dateStr="childItem.dateStr" :data-timeStamp="childItem.timeStamp" >
                <span :class="[todayTimeStamp>childItem.timeStamp ? 'disabled' : 'canBeSelected', 'childItem']">
                    <p v-if="todayTimeStamp==childItem.timeStamp" class="today">
                        <span class="dateItem" @click="setDay(childItem.dateStr)">今</span>
                    </p>
                    <p v-else class="dateItem">
                      <span class="dateItem" @click="setDay(childItem.dateStr)">{{childItem.val}}</span>
                    </p>
                </span>
            </li>
        </ul>
      </div>
    </div>
    <!-- 撑开底部 -->
    <div style="clear:both;width:100%;height:55px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageName:'',
      toPath:'',
      setType:'',
      config:{
          display:12, //显示几个月

      },
      week:[
        {zh:'日',en:'SUN'},
        {zh:'一',en:'MON'},
        {zh:'二',en:'TUE'},
        {zh:'三',en:'WED'},
        {zh:'四',en:'THU'},
        {zh:'五',en:'FRI'},
        {zh:'六',en:'SAT'}
      ],
      monthDetail:'',
      todayTimeStamp:''
    };
  },
  created:function(){
    //获取今天的时间戳
    this.$data.todayTimeStamp = this.getTodayTimeStamp();

    // 初始化日历
    this.init();
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    //初始化
    init(){
        //获取当前日期
        var nowDate = new Date().toLocaleString().substr(0,10),
            //获取当前年
            getNowYear = new Date().getFullYear(),
            //获取当前月
            getNowMonth = new Date().getMonth()+1,
            //获取当前日
            getNowDay = new Date().getDate();
            //生成数组year,month用于判断某月有多少天
            var monthNum = this.$data.config.display;
            var monthStr = [];
            for(let i=0;i<monthNum;i++){
              let obj = {};
              if((getNowMonth+i)>=13){
                obj.year = Math.floor(getNowYear+(getNowMonth+i)/12);
                obj.month = (getNowMonth+i)%12;
              }else{
                obj.year = getNowYear;
                obj.month = getNowMonth+i;
              }
              monthStr.push(obj);
            }
            this.getMonthStr(monthStr);
    },
    //拼接所有月份的字符串
    getMonthStr(monthStr){
        //console.log(monthStr);
        var detailStr = [];
        //循环要显示的几个月的每一个月，默认第一个月是当月
        for(let i=0;i<monthStr.length;i++){
          let obj = {};
          obj.detailTop = monthStr[i].year+"/"+monthStr[i].month+"月";
          obj.detailStr = [];
          //首先判断每个月有多少天，需要传入year,month
          let getMonthNum = this.getMonthDays(monthStr[i].year,monthStr[i].month-1);
          let startDaysNum = this.getWeekForDay(monthStr[i].year+"/"+(monthStr[i].month)+"/"+"1");
          let endDaysNum = Math.ceil((getMonthNum+startDaysNum)/7)*7-(getMonthNum+startDaysNum);
          for(let m=0;m<startDaysNum;m++){
            let childObj = {};
            childObj.val = ' ';
            obj.detailStr.push(childObj);
          };
          for(let n=1;n<=getMonthNum;n++){
            let childObj = {};
            childObj.val = n;
            childObj.timeStamp = Date.parse(new Date(monthStr[i].year+"/"+monthStr[i].month+"/"+n))/1000;
            childObj.dateStr = monthStr[i].year+"/"+monthStr[i].month+"/"+n;
            obj.detailStr.push(childObj);
          };
          for(let q=0;q<endDaysNum;q++){
            let childObj = {};
            childObj.val = ' ';
            obj.detailStr.push(childObj);
          };
          detailStr.push(obj);
        }
        this.$data.monthDetail = detailStr;
        //console.log(this.$data.monthDetail);
    },
    //判断是否为闰年
    isLeap(year) {
       var res;return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
    },

    //获取每月有多少天，并拼接为一个数组
    getMonthDays(year,mon){
      var m_days=new Array(31,28+this.isLeap(year),31,30,31,30,31,31,30,31,30,31);
      return m_days[mon];
    },

    //计算处理月第一天是星期几
    getWeekForDay(day){
      return new Date(day).getDay();
    },

    //获得每个月需要的行数
    getLineNum(){
      return Math.ceil(getMonthDays(year,mon)+getWeekForDay(day))/7;
    },

    //获取今天的时间戳
    getTodayTimeStamp(){
      var getTodayDate = new Date().getFullYear()+'/'+(new Date().getMonth()+1)+"/"+new Date().getDate();
      return Date.parse(new Date(getTodayDate))/1000;
    },

    //设置日期
    setDay(day){
      if(this.$route.query.type=='orgDate'){
          this.$store.dispatch('setOrgDate',day);
      }else if(this.$route.query.type=='dstDate'){
          this.$store.dispatch('setDstDate',day);
      }
      this.$store.dispatch('setPageChangeStatus','back'); //保存页面切换状态至全局
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style lang="css" scoped>
.weeks,.weeks ul{
  width: 100%;
  height:50px;
  background-color: #f63939;
  color: #FFF;
  position: fixed;
}
.weeks ul li{
  list-style-type: none;
  width: 14.2%;
  height: 50px;
  float: left;
}
.week-zh,.week-en{
  width: 100%;
  height: 25px;
  line-height: 25px;
  float: left;
  text-align: center;
}
.monthItemHead{
  clear: both;
  width: 100%;
  height:50px;
  line-height: 50px;
  text-align: center;
  background-color: #e9e9e9;
  color: #505050;
}
.monthTable{
  width: 100%;
  height: auto;
}
.monthTable ul li{
  display: block;
  width: 14.2%;
  height:50px;
  float: left;
  text-align: center;
  line-height: 50px;
}
.canBeSelected{
  color: #ff9703;
}
.disabled{
  color:#c9c9c9;
}
.today{
  display: block;
  width: 40px;
  height:40px;
  background-color: #df3538;
  border-radius: 45px;
  margin: 0 auto;
  margin-top: 5px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
.dateItem{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
