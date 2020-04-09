<template>
  <div id="app">

    <div class="mainRouterView">
      <transition mode="out-in" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
        <router-view/>
      </transition>
    </div>


  </div>
</template>

<style>


  body {
    font-family: Microsoft Yahei,-apple-system,BlinkMacSystemFont,PingFang SC,Helvetica Neue,STHeiti,Tahoma,Simsun,sans-serif;
    -ms-touch-action: none;
    touch-action: none;
  }
  a {
    text-decoration: none;
  }
  body, html {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app, .mainRouterView {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  #app {
    overflow-y: hidden;
    background: #f7f7f7;
  }
  * {
    margin: 0;
    padding: 0;
  }
  /*ol, ul {*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*  list-style: none;*/
  /*}*/
  .mainRouterView {

    overflow: hidden;
  }
  /*.mainRouterView {*/
  /*  transition: all .15s linear;*/
  /*  overflow: hidden;*/
  /*}*/
  /*.van-tabs--line .van-tabs__wrap {*/
  /*  height: 8.8vw!important;*/
  /*}*/
  /*.van-tabs__line {*/

  /*  bottom: 0vw!important;*/

  /*}*/
  /*.van-tab {*/
  /*  position: relative;*/

  /*  line-height: 8.8vw!important;*/

  /*}*/
  .van-tab--active {

     font-weight: 400!important;
  }
</style>
