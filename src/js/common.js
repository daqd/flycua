/**
* 获取指定日期的后一天
*
**/
const getNextDay = d =>{
  d = new Date(d);
  d = +d + 1000*60*60*24;
  d = new Date(d);
  var mon,day;
  if((d.getMonth()-0+1)>=10){
    mon = d.getMonth()-0+1;
  }else{
    mon = "0"+(d.getMonth()-0+1);
  };
  if((d.getDate()-0)>=10){
    day = d.getDate();
  }else{
    day = "0"+d.getDate();
  };
  //格式化
  return d.getFullYear()+"/"+mon+"/"+day;
}

/**
* 获取今天的日期
*
**/
const getDay = day =>{
     var today = new Date();
     var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
     today.setTime(targetday_milliseconds);
     var tYear = today.getFullYear();
     var tMonth = today.getMonth();
     var tDate = today.getDate();
     tMonth = doHandleMonth(tMonth + 1);
     tDate = doHandleMonth(tDate);
     return tYear+"/"+tMonth+"/"+tDate;
}

const doHandleMonth = month =>{
     var m = month;
     if(month.toString().length == 1){
        m = "0" + month;
     }
     return m;
}

//获取当前浏览器窗口大小
const getWindowWith = function(){
  let windowSize = {};
  windowSize.windowWidth =  document.documentElement.clientWidth;
  windowSize.windowHeight =  document.documentElement.clientHeight;
  return windowSize;
}
export {getNextDay,getDay,getWindowWith}
