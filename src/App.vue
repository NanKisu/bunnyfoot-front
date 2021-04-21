<template>
  <div id="app">
    <div id="app2">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import '../static/css/style.css';

  html {
    height: 100%;
  }

  body{
    height: 100%;
  }

  #app {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  @media screen and (max-width: 550px) {
    body {
      background-image: url("/static/images/pattern/leaves.png");
      background-position: center;
      background-repeat: repeat;
    }
  }

  @media screen and (min-width: 551px) {
    body {
      background-color: #ccc;
    }
    #app {
      max-width: 550px !important;
      margin: 0 auto !important;
      background-image: url("/static/images/pattern/leaves.png");
      background-position: center;
      background-repeat: repeat;
    }
  }

  @media screen and (max-height: 700px) {
    #app2 {
      height: 100% !important;
      min-height: 700px !important;
    }
  }

  @media screen and (min-height: 701px) {
    #app2 {
      position: relative;
      top: 50% !important;
      margin-top: -350px !important;
      height: 700px !important;
    }
  }
</style>
