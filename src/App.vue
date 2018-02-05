<template>
  <div id="app">

    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  // 禁止拖拽,以便在触摸屏幕上获得更好的表现,如果需要请取消注释
  // document.ondragstart = function(event) {
  // return false;
  // };

  export default {
    name: "app",

    data() {
      return {
        transitionName: "slide-right",
      };
    },
    watch: {
      $route(to, from) {
        if (to.path == "/") {
          this.transitionName = "slide-right";
        } else {
          this.transitionName = "slide-left";
        }
      },
    },
    methods:{
      open(e){
        this.zhankai = e;
      }
    }
  };
</script>
<style lang="scss">
  @import "./components/style/index.scss";
  #app {
    user-select: none;
    -webkit-user-drag: none;
    -webkit-text-size-adjust: none;
    position: relative;

    /*overflow: auto;*/


  }
  .child-view {
    width: 100%;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: scale(2);
    transform: scale(2);
  }
</style>
