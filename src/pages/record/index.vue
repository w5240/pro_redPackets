<template>
  <div class="record">
    <div class="header">
      <span>日期</span>
      <span>红包金额</span>
    </div>
    <ul class="detail">
      <li v-for="i in 10">
        <span>2018-01-02 12:15:12</span>
        <span>0.2元</span>
      </li>
    </ul>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  @import "../../components/style/index.scss";
  .record{
    height: 100vh;
    width:100%;
    background-image: url(./imgs/recordbg.png);
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    padding-top:v(80px);
    box-sizing: border-box;

    .header{
      width:90%;
      margin-left:5%;
      height:v(100px);
      background-color: #ffeabb;
      line-height:v(100px);

      span{
        color:#fe955e;
        width:65%;
        float: left;
        text-align: center;
        font-size:v(30px);
      }
      span:last-child{
        width:35%;
      }
    }
    .detail{
      width:90%;
      max-height:80vh;
      margin-left:5%;
      box-sizing: border-box;
      overflow: auto;
      li{
        height:v(100px);
        line-height:v(100px);
        border-top:v(1px) solid #dfdfdf;
        background-color: white;
        span{
          width:65%;
          float: left;
          text-align: center;
          font-size:v(30px);
          opacity: .8;
        }
        span:last-child{
          width:35%;
        }
      }
    }

  }

</style>
