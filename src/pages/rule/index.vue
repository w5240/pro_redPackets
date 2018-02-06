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
          <div class="bottom">&nbsp<br>分<br>时<br>段<br>情<br>况</div>
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
    .rule1{
      width: 75%;
      margin:0 auto;
      h1{
        font-size:v(35px);
        color:#f7ac1a;
        margin-top:v(50px);
        position: relative;
        margin-left:v(70px);

        &:before{
          position: absolute;
          left:v(-70px);
          top:v(-15px);
          content:'1';
          height:v(60px);
          width:v(60px);
          color:white;
          border-radius:50%;
          background-color: #f7ac1a;
          line-height:v(60px);
          text-align: center;
        }
      }
      p{
        color:white;
        font-size:v(27px);
        opacity: .8;
        letter-spacing:v(6px);
        line-height:v(35px);
        margin-top:v(40px);
      }
    }
    .rule2{
      width: 75%;
      margin:0 auto;
      h1{
        font-size:v(35px);
        color:#f7ac1a;
        margin-top:v(50px);
        position: relative;
        margin-left:v(70px);

        &:before{
          position: absolute;
          left:v(-70px);
          top:v(-15px);
          content:'2';
          height:v(60px);
          width:v(60px);
          color:white;
          border-radius:50%;
          background-color: #f7ac1a;
          line-height:v(60px);
          text-align: center;
        }
      }
      ul{
        font-size:v(27px);
        opacity: .8;
        width:100%;
        margin-top:v(40px);
        li{
          float: left;
          height:v(500px);
          width:20%;
          color:white;
          box-sizing: border-box;
          border:1px solid white;
          border-right:0;
          &:last-child{
            border-right:1px solid white;
          }
          p{
            height:v(65px);
            text-align: center;
            line-height:v(65px);
            border-bottom:1px solid white;
          }
          .bottom{
            text-align: center;
            line-height:v(40px);
            padding-top:v(20px);
            h5{
              line-height:v(60px);
            }
          }
        }
      }
    }
  }

</style>
