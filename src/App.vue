<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import '../static/css/style.css';
body {
  background-color: #ccc;
}

@media screen and (min-width: 600px) {
  #app {
    position: relative;
    top: 50vh;
    margin-top: -450px;
    min-height: 900px !important;
    max-width: 600px !important;
    margin: 0 auto;
  }
}
#app {
  max-width: 600px;
  background-image: url("/static/images/pattern/leaves.png");
  /* height: 100%; */
  background-position: center;
  background-repeat: repeat;
  /* background-size: cover; */
}
</style>
