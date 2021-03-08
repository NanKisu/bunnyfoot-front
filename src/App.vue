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
  background-image: url("/static/images/pattern/leaves.png");
  /* height: 100%; */
  background-position: center;
  background-repeat: repeat;
  /* background-size: cover; */
}
</style>
