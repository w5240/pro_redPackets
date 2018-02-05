<template>
  <div class="index">
    weqeqweqw

  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        img:true
      };
    },
    mounted(){
//      this.getTime();
//      let script = document.createElement("script");
//      script.src = "http://api.map.baidu.com/api?v=2.0&ak=AZiG31TUUZsQK33GeX40rp6ddCNLNRzE&callback=initialize";
//      document.body.appendChild(script);

//      this.interval = setInterval(()=>{
//        try {
//          if (new BMap.Map("container")) {
//            let map = new BMap.Map("container");
//            let point = new BMap.Point(116.409443,39.937953);
//            map.centerAndZoom(point, 15);
//            map.enableScrollWheelZoom(true);
//            clearInterval(this.interval);
//            let a = setInterval(()=>{
//              if(document.querySelectorAll('#container>div img:last-child')[1]) {
//                document.querySelectorAll('#container>div img:last-child')[1].style.display = 'none';
//                document.querySelector('#container>div:last-child').style.display = 'none';
//                clearInterval(a)
//              }
//            },100)
//
//          }
//        }catch(e){
//          console.log("正在加载地图信息，请稍后...")
//        }
//      },100)

    },
    methods:{

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
    background-color: gray;

  }
</style>
