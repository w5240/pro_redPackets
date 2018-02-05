<template>
  <div class="touch-header">
    <div @click="goHome" class="big-button">
      <img class="icon" :src="home" alt="" srcset="">
      <i :class="{'grey':isGrey}">首页</i>
    </div>
    <div @click="goBack" class="big-button">
      <img class="icon" :src="back" alt="" srcset="">
      <i :class="{'grey':isGrey}">返回上一级</i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let back, home;
    if (this.theme === "grey") {
      back = require("../../assets/icon/icon-back-g.png");
      home = require("../../assets/icon/icon-home-g.png");
    } else {
      back = require("../../assets/icon/icon-back.png");
      home = require("../../assets/icon/icon-home.png");
    }
    return { back, home };
  },
  computed: {
    isGrey() {
      return this.theme === "grey";
    }
  },
  props: ["theme"],
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../components/style/index.scss";
.touch-header {
  padding: 0 v(55px);
  box-sizing: border-box;
  height: v(154px);
  width: v(1024px);
  flex-shrink: 0;
  color: $white;
  font-size: v(18px);
  display: flex;
  justify-content: space-between;
}
.big-button {
  cursor: pointer;
  text-align: center;
  line-height: v(36px);
  .icon {
    display: block;
    width: 26px;
    margin: 0 auto;
    margin-top: v(40px);
  }
  min-width: v(90px);
}
.grey {
  color: #4b4b4b;
}
</style>
