<template>
  <div id="app" @touchstart.stop="touchStop" @touchmove.stop="touchStop" @touchend.stop="touchStop">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name:"App",
    created() {
      document.body.addEventListener("touchmove",function (e) {
        e.preventDefault();
      },{passive: false})
      document.documentElement.addEventListener("touchmove",function (e) {
        e.preventDefault();
      },{passive: false})
    },
    methods:{
      touchStop(){}
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #F6F6F6;
}
.van-checkbox__icon .van-icon{
  background: #f6f6f6;
  border: 0!important;
}
/*#nav {*/
/*  padding: 30px;*/

/*  a {*/
/*    font-weight: bold;*/
/*    color: #2c3e50;*/

/*    &.router-link-exact-active {*/
/*      color: #42b983;*/
/*    }*/
/*  }*/
/*}*/
</style>
