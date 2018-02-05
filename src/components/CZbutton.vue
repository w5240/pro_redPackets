<template>
  <div class="czbutton">
    <button>{{content}}</button>
  </div>
</template>
<script>
  export default{
      data(){
          return {

          }
      },
    props:{
      content:{
          type:String,
          required:true,
      },
      icon:'',
    }
  }
</script>
<style lang="scss">
  @import "./style/index.scss";
  .czbutton{
    button{
      height: v(70px);
      width:v(250px);
      background-color: rgba(0,0,0,0);
      border:1px solid white;
      outline: none;
      color:white;
      font-size:v(30px);
    }
  }
</style>
