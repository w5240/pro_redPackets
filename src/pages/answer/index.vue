<template>
  <div class="answer">
    <div class="ques">
      <div class="title">单选题</div>
      <div class="ti">
        <h2>1.某省地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评教育、诫勉谈话，但是板子高高举起，每每轻轻放下。许某的行为触犯了《中国共产党纪律处分条例》中的（  ）规定。</h2>
        <ul>
          <li v-for="e in answer" :class="whichChoose===e.option?(e.option===rightAnswer?'right':'wrong'):''" @click="whichChoose=e.option;choose()">{{e.content}}</li>
        </ul>
      </div>
      <button class="next">下一题</button>
    </div>
    <div class="allRight" v-if="allRight">
      <div class="bg">
        <h1>恭喜您全部回答正确</h1>
        <button @click="$router.push({name:'redbeg'})">去抢红包</button>
      </div>
    </div>
    <div class="over" v-if="over">
      <div class="bg">
        <h1>您一共答对2题</h1>
        <h2>以下问题回答错误</h2>
        <ul>
          <li v-for="e in wrongAnswer">
            <h3>{{e.ques}}</h3>
            <p>{{e.content}}</p>
          </li>
        </ul>
        <button @click="over=false">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            answer:[{content:'A.党员领导干部对违反政治纪律和政治规矩等错误思想和行为放任不管，搞无原则一团和气',option:'A'},
            {content:'B.在党内搞团团伙伙、结党营私、拉帮结派、培植私人势力',option:'B'},
            {content:'C.故意作出与党和国家的方针政策以及决策部署相违背的决定',option:'C'}],
            wrongAnswer:[{ques:'1.某省地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评教育、诫勉谈话，但是板子高高举起，每每轻轻放下。许某的行为触犯了《中国共产党纪律处分条例》中的（  ）规定。',content:'真确答案是：B.在党内搞团团伙伙、结党营私、拉帮结派、培植私人势力'},],
            rightAnswer:'B',
            whichChoose:'',

            allRight:false,
            over:false,
          }
      },
    methods:{
          choose(){
              if(this.whichChoose===this.rightAnswer){
                  setTimeout(()=>{this.allRight = true;},1000)
              }else{
                  this.over = true
              }
          }
    }
  }

</script>
<style lang="scss" scoped>
  @import "../../components/style/index.scss";
  .answer{
    height:100vh;
    width:100%;
    background-image: url(./imgs/answerbg.png);
    box-sizing: border-box;
    -webkit-background-size: 100% 100%;
    background-size:100% 100%;
    padding-top:20%;
    .ques{
      width:90%;
      height:90%;
      margin:0 auto;
      background-image: url(./imgs/tibg.png);
      -webkit-background-size:100% 100%;
      background-size:100% 100%;
      color:white;
      padding-top:v(20px);
      .title{
        background-image: url(./imgs/title.png);
        margin:0 auto;
        height:v(100px);
        -webkit-background-size:100% 100%;
        background-size:100% 100%;
        width:90%;
        font-size:v(40px);
        letter-spacing: v(10px);
        text-align: center;
        line-height:v(85px);
      }
      .ti{
        width:80%;
        height:70%;
        margin-left:10%;
        margin-top:v(40px);
        overflow-y: auto;
        h2{
          color:#cc3422;
          font-size:v(28px);
          letter-spacing:v(8px);
          line-height:v(30px);
          margin-bottom:v(30px)
        }
        ul{
          li{
            width:100%;
            -webkit-background-size:100% 100%;
            box-sizing: border-box;
            padding:v(30px);
            background-size:100% 100%;
            font-size:v(28px);
            background-image: url(./imgs/answering.png);
            margin-bottom:v(30px);
            letter-spacing:v(2px);
            text-align: center;
            &.wrong{
              background-image: url(./imgs/wrong.png);
            }
            &.right{
              background-image: url(./imgs/right.png);
            }
          }
        }
      }
      .next{
        background-color: #ea160a;
        height:v(80px);
        width:v(300px);
        display: block;
        margin:0 auto;
        border-radius:v(80px);
        box-shadow:inset -2px -2px 2px #9b181a;
        color:#f9c452;
        font-size:v(35px)
      }
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
        background-image: url("./imgs/allRight.png");
        -webkit-background-size:100%;
        background-size:100%;
        height:100%;
        margin-left:7.5%;
        padding-top:v(320px);
        h1{
          font-size:v(40px);
          margin-bottom:v(50px);
          color:#da170d;
        }
        button{
          height:v(75px);
          width:v(400px);
          font-size:v(30px);
          border-radius:v(32.5px);
          background-color: #ea160a;
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
        background-image: url("./imgs/over.png");
        -webkit-background-size:100%;
        background-size:100%;
        height:100%;
        margin-left:7.5%;
        padding-top:v(120px);
        h1{
          font-size:v(42px);
          margin-bottom:v(30px);
          color:#f7d902;
        }
        h2{
          font-size:v(35px);
          margin-bottom:v(30px);
          color:white;
        }
        ul{
          height:v(450px);
          overflow: auto;
          padding:0 v(30px);
          li{
            text-align: left;
            h3,p{
              font-size:v(35px);
              margin-bottom:v(30px);
              color:white;
              letter-spacing: v(3px);
              line-height:v(37px);
              opacity: .8;
            }
            p{
              color:#fded01;
            }
          }
        }
        button{
          height:v(80px);
          width:v(300px);
          font-size:v(40px);
          border-radius:v(15px);
          background-color: #fded01;
          box-shadow:0 5px 2px #9b181a;
          color:#92560c;
          font-weight: bold;
        }
      }
    }
  }

</style>
