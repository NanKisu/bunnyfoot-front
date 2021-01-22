<template>
  <div class="container">
    <div class="title"></div>
    <div class="main"></div>
    <div class="start"></div>
  </div>
</template>

<script>
export default {
  name: 'WelComePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
}

.title {
  position: relative;
  margin-top: 5vh;
  left: 50%;
  margin-left: -50%;
  height: 15vh;
  width: 100%;
  background-image: url("/static/welcome_title.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.main {
  position: relative;
  margin-top: 13vh;
  left: 50%;
  margin-left: -50%;
  height: 45vh;
  width: 100%;
  background-image: url("/static/welcome_main_image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.start {
  position: relative;
  margin-top: 0vh;
  left: 50%;
  margin-left: -50%;
  height: 15vh;
  width: 100%;
  background-image: url("/static/welcome_start_image.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
