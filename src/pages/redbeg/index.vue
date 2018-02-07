<template>
  <div class="redbeg">
    <div class="time">{{time}}</div>
    <img class="red" @click="choose(index)" src="./imgs/redbeg.png" alt="" v-for="(e,index) in begs" :style="{top:e[0]+'%',left:e[1]+'%'}">
    <div class="allRight" v-if="allRight">
      <div class="bg">
        <h1>恭喜您获得</h1>
        <h2>2元现金红包</h2>
        <button @click="$router.push({name:'index'})">下个时段准时来啊</button>
      </div>
    </div>
    <div class="over" v-if="over">
      <div class="bg">
        <h1>老铁不要灰心</h1>
        <h2>下一个中奖的就是您</h2>
        <button @click="$router.push({name:'index'})">下个时段准时来啊</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        time:30,
        begs:[[4,5],[7,45],[22,20],[23,62],[37,46],[41,8],[41,8],[50,70],
          [55,30],[66,60],[67,7],[80,35],[88,7],[85,70],],
        begsWithMoney:[],

        interval:'',
        allRight:false,
        over:false,

      }
    },
    mounted(){
      for(let i=0;i<180;i++) {
        if(i%2===0)
          this.begsWithMoney.push(i)
      }

      for(let i=0;i<150;i++) {
        this.begs.push([-15, 15 + Math.random() * 5], [0 + Math.random() * 5, 100]);
        this.begs.push([-15, 35 + Math.random() * 5], [20 + Math.random() * 5, 100]);
        this.begs.push([-15, 65 + Math.random() * 5], [55 + Math.random() * 5, 100]);
        this.begs.push([-15, 80 + Math.random() * 5], [75 + Math.random() * 5, 100]);
      }

      setTimeout(()=>{
        let t=0;
        this.interval = setInterval(()=>{
          t++;
          if(t%5 === 0){this.time--;}
          let count = 0;
          this.begs.filter((e)=>{
            if(e[1]<(-10)||e[0]>(100)){
              count++
            }
          });
          if(this.time>29) {
            this.begs.forEach((e, index) => {
              if (index < (count + 12)) {
                e[0] += 20;
                e[1] -= 20;
              }
            });
          }else{
            this.begs.forEach((e, index) => {
              if (index < (count + 6)) {
                e[0] += 20;
                e[1] -= 20;
              }
            });
          }
          this.$set(this.begs,this.begs);
          if(this.time === 0){
            clearInterval(this.interval)
            this.over = true;
          }
        },200)
      },500)
    },
    methods:{
      choose(i){
        if(this.begsWithMoney.includes(i)){
          clearInterval(this.interval);
          this.allRight=true;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../components/style/index.scss";
  .redbeg{
    position: relative;
    height: 100vh;
    width:100%;
    background-image: url(./imgs/begbg.png);
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    overflow: hidden;

    .time{
      position: absolute;
      z-index: 1000;
      top:v(40px);
      right:v(40px);
      height:v(110px);
      width:v(110px);
      background-color: rgba(0,0,0,.6);
      border-radius: 100%;
      color:white;
      font-size:v(43px);
      text-align: center;
      line-height: v(110px);
    }

    .red{
      width:v(210px);
      position: absolute;
      transition: all 1s;
      transition-timing-function: linear;
    }
    .allRight{
      color:white;
      position: fixed;
      top:0;
      left: 0;
      width:100%;
      height:100vh;
      background-color:rgba(0,0,0,0.7);
      text-align: center;
      padding-top:35%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .bg{
        width:85%;
        background-repeat:no-repeat;
        background-image: url("./imgs/money.png");
        -webkit-background-size:100%;
        background-size:100%;
        height:100%;
        margin-left:7.5%;
        padding-top:v(150px);
        h1{
          font-size:v(36px);
          margin-bottom:v(30px);
          color:#da170d;
        }
        h2{
          font-size:v(45px);
          margin-bottom:v(130px);
          color:#da170d;
        }
        button{
          height:v(85px);
          width:v(400px);
          font-size:v(30px);
          border-radius:v(32.5px);
          background-color: #ffb206;
          box-shadow:inset -2px -2px 2px #9b181a;
          color:white;
        }
      }
    }
    .over{
      color:white;
      position: fixed;
      top:0;
      left: 0;
      width:100%;
      height:100vh;
      background-color:rgba(0,0,0,0.7);
      text-align: center;
      padding-top:25%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .bg{
        width:85%;
        background-repeat:no-repeat;
        background-image: url("./imgs/notmoney.png");
        -webkit-background-size:100%;
        background-size:100%;
        height:100%;
        margin-left:7.5%;
        padding-top:v(120px);
        h1{
          font-size:v(40px);
          margin-bottom:v(30px);
          color:#f7d902;
        }
        h2{
          font-size:v(45px);
          margin-bottom:v(30px);
          color:#f7d902;
        }
        button{
          height:v(80px);
          width:v(400px);
          font-size:v(30px);
          border-radius:v(80px);
          margin-top:v(110px);
          background-color: #ffb005;
          box-shadow:0 5px 2px #9b181a;
          color:white;
          font-weight: bold;
        }
      }
    }
  }
</style>
