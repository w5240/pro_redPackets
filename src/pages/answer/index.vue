<template>
  <div class="answer">
    <div class="quesNow ques" v-for="(q,i) in quesAll" @touchstart="start($event)" @touchend="end($event,i)" :style="{left:i*100+5+'%'}">
      <div class="title">单选题</div>
      <div class="ti">
        <h2>{{q.ques}}</h2>
        <ul>
          <li v-for="e in q.answer" :class="whichChoose===e.option?(e.option===rightAnswer?'right':'wrong'):''" @click="whichChoose=e.option;choose()">{{e.content}}</li>
        </ul>
      </div>
      <p class="tip">可左右滑动切换题目</p>
      <button class="next" @click="next(i)">{{(i===quesAll.length-1)?'已是最后一题':'下一题'}}</button>
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
        quesAll:[{ques:'1.某省地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评教育、诫勉谈话，但是板子高高举起，每每轻轻放下。许某的行为触犯了《中国共产党纪律处分条例》中的（  ）规定。',
          answer:[{content:'A.党员领导干部对违反政治纪律和政治规矩等错误思想和行为放任不管，搞无原则一团和气',option:'A'},
            {content:'B.在党内搞团团伙伙、结党营私、拉帮结派、培植私人势力',option:'B'},
            {content:'C.故意作出与党和国家的方针政策以及决策部署相违背的决定',option:'C'}],
          rightAnswer:'A',
        },{ques:'2.某省诫勉放，每次也批评',
          answer:[{content:'A.党员领导干规和气地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',option:'A'},
            {content:'B.在党私人势力地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',option:'B'},
            {content:'C.故意及的决定地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',option:'C'}],
          rightAnswer:'B',
        },{ques:'3.次也批评某的地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',
          answer:[{content:'A.想气地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',option:'A'},
            {content:'B.在党内搞势力地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',option:'B'},
            {content:'C.故意作决定地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',option:'C'}],
          rightAnswer:'C',
        },{ques:'4.次也批评某的地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',
          answer:[{content:'A.想气地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',option:'A'},
            {content:'B.在党内搞势力地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',option:'B'},
            {content:'C.故意作决定地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评',option:'C'}],
          rightAnswer:'A',
        },],

        rightAnswer:'',
        quesIndex:0,

        wrongAnswer:[{ques:'1.某省地税局原党组书记、局长许某，对于系统内的一些问题，每次也批评教育、诫勉谈话，但是板子高高举起，每每轻轻放下。许某的行为触犯了《中国共产党纪律处分条例》中的（  ）规定。',content:'真确答案是：B.在党内搞团团伙伙、结党营私、拉帮结派、培植私人势力'},],

        whichChoose:'',
        allRight:false,
        over:false,

        move:''
      }
    },
    watch:{
      quesIndex(n,o){
        this.rightAnswer = this.quesAll[n].rightAnswer;
      }
    },
    mounted(){
      this.rightAnswer = this.quesAll[0].rightAnswer;

    },
    methods:{
      choose(){
        if(this.whichChoose===this.rightAnswer){
          setTimeout(()=>{this.allRight = true;},1000)
        }else{
          this.over = true
        }
      },
      last(index){
        if(index!==0) {
          this.quesIndex--;
          document.querySelectorAll('.ques').forEach((e, i) => {
            e.style.left = (-this.quesIndex + i) * 100 + 5 + "%"
          })
        }
      },
      next(index){
        if(index!==this.quesAll.length-1) {
          this.quesIndex++;
          document.querySelectorAll('.ques').forEach((e, i) => {
            e.style.left = (-this.quesIndex + i) * 100 + 5 + "%"
          })
        }
      },
      start(e){
        this.move = e.changedTouches[0].clientX;

      },
      end(e,i){
        if(e.changedTouches[0].clientX - this.move <-20){
            this.next(i)
        }else if(e.changedTouches[0].clientX - this.move >20){
          this.last(i)
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "../../components/style/index.scss";

  .answer{
    position: relative;
    width:100%;
    min-height:100vh;
    background-image: url(./imgs/answerbg.png);
    background-color: #de22e0;
    /*box-sizing: border-box;*/
    -webkit-background-size: 100% 100%;
    background-size:100% 100%;
    padding-top:20%;
    overflow-x: hidden;

    .ques{
      position: absolute;
      width:90%;
      left:5%;
      margin:0 auto;
      background-image: url(./imgs/tibg.png);
      -webkit-background-size:100% 100%;
      background-size:100% 100%;
      color:white;
      padding-top:v(20px);
      padding-bottom:v(80px);
      transition: all .4s;
      &:after{
        content: '';
        display: block;
        clear:both;
        visibility: hidden;
        height:0;
      }
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
        margin-top:v(100px);
        h2{
          color:#cc3422;
          font-size:v(28px);
          letter-spacing:v(8px);
          line-height:v(30px);
          margin-bottom:v(30px);
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
      .tip{
        color:#ef8317;
        text-align: center;
      }
      .next{
        background-color: #ea160a;
        height:v(80px);
        width:v(300px);
        display: block;
        margin:v(20px) auto 0;
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
