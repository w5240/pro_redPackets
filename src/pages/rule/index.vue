<template>
  <div class="rule">
    <img class="activityRule" src="./imgs/rule.png" alt="">
    <div class="rule1">
      <h1>活动规则</h1>
      <p>出三道题，全对可以抽红包，每个号每个时段只能抽一次。每个用户给3次答题机会，抽奖和中奖都只有一次。每个时段红包数量有限，抢完为止。</p>
    </div>
    <div class="rule2">
      <h1>活动时间分段</h1>
      <ul>
        <li>
          <p class="top">时间</p>
          <div class="bottom">分时段情况</div>
        </li>
        <li v-for='e in time'>
          <p class="top">{{e.day }}</p>
          <div class="bottom">
            <h5 v-for="i in e.hours">{{i}}</h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
        return{
            time:[{day:'三十',hours:['20:00','21:00','22:00','23:00','24:00','01:00',]},
              {day:'初一',hours:['20:00','21:00','22:00','23:00']},
              {day:'初五',hours:['20:00','21:00','22:00','23:00']},
              {day:'十五',hours:['20:00','21:00','22:00']},
            ]
        }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../components/style/index.scss";
  .rule{
    height: 100vh;
    width:100%;
    background-image: url(./imgs/rulebg.png);
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    padding-top:v(60px);
    box-sizing: border-box;

    .activityRule{
      width:60%;
      margin:0 auto;
      display: block;
    }
  }

</style>
