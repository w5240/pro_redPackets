<template>
  <div class="index">
    <img class="font" src="./imgs/guonian.png" alt="">
    <div class="option">
      <button @click="begin">开始答题</button>
      <button @click="$router.push({name:'rule'})">活动规则</button>
    </div>
    <p class="beijing">北京纯泽科技有限公司 版权所有</p>

    <div class="record" @click="$router.push({name:'record'})">中奖纪录</div>
    <div class="alert" v-if="time">
      <div class="bg">
        <h1>敬请期待</h1>
        <h3>活动还没有开始哟！</h3>
        <p>开始时间：2月15日20:00</p>
        <p>结束时间：2月16日02:00</p>
        <button @click="time=false">确定</button>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        img:true,
        time:true,
      };
    },
    mounted(){

    },
    methods:{
      begin(){
//          if(){}
        this.$router.push({name:'answer'})
      }
    },
  };
</script>
<style lang="scss" scoped>
  @import "../../components/style/index.scss";

  .anchorBL {
    display: none;
  }  .anchorBL {
       display: none;
     }

  .index {
    width:100%;
    background-image: url(./imgs/bg.png);
    background-size:100% 100%;
    height:100vh;

    .font{
      width:94%;
      margin:40% 2% 0;
    }
    .option{
      width:100%;
      position: absolute;
      bottom:v(180px);
      text-align: center;

      button{
        height:v(80px);
        width:v(320px);
        border-radius:v(80px);
        font-size:v(32px);
        font-weight: bold;
        background:linear-gradient(to right bottom,#ffdca1,#ffbf6a);
        color:#cc0017;
        margin-right:v(20px);
        margin-left:v(20px);
      }
      button:last-child{
        background:linear-gradient(to left top,#ffdca1,#ffbf6a);
      }
    }
    .beijing{
      position: absolute;
      width:100%;
      text-align: center;
      bottom:v(60px);
      color:white;
      font-size:v(28px);
      opacity:.6;
    }
    .record{
      position: absolute;
      color:white;
      font-size:v(35px);
      right:0;
      top:50%;
      width:v(65px);
      text-align: center;
      padding-top:v(25px);
      border-top-left-radius: v(25px);
      border-bottom-left-radius: v(25px);
      height:v(230px);
      background-color: #f38b2e;
    }
    .alert{
      color:white;
      position: fixed;
      top:0;
      left: 0;
      width:100%;
      height:100vh;
      background-color:rgba(0,0,0,0.6);
      text-align: center;
      padding-top:35%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .bg{
        width:85%;
        background-image: url("./imgs/nottime.png");
        -webkit-background-size:100%;
        background-size:100%;
        background-repeat:no-repeat;
        height:100%;
        margin-left:7.5%;

        h1{
          padding-top:v(200px);
          font-size:v(48px);
          margin-bottom:v(50px);
        }
        h3{
          font-size:v(35px);
          margin-bottom:v(50px);
          opacity: 0.9;
        }
        p{
          font-size:v(30px);
          opacity: .7;
          margin-bottom:v(20px);
        }
        button{
          margin-top:v(65px);
          height:v(65px);
          width:v(300px);
          font-size:v(30px);
          border-radius:v(32.5px);
          background-color: white;
          color:#f79084;
        }
      }
    }
  }
</style>
