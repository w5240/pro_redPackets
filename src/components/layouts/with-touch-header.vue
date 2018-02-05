<template>
  <div class="layout">
    <touch-header theme="grey"></touch-header>
    <div class="layout-main-box">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import touchHeader from "../touchHeader/index";
export default {
  components: {
    touchHeader
  }
};
</script>
<style lang="scss" scoped>
@import "../style/index.scss";
.layout {
  width: v(1024px);
  height: 100vh;
  /*display: flex;*/
  /*justify-content: center;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  margin: 0 auto;
}
.layout-main-box {
  width: v(1024px);
  height: v(614px);
  margin: 0 auto;
}
@media screen and (orientation: portrait) {
  .flex-box {
    width: v(1024px);
    height: v(768px);
  }
}
</style>
