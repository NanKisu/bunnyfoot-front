<template>
  <router-view/>
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

  body {
    height: 100%;
  }

  @media screen and (min-width: 551px) {
    body {
      background-color: #ccc !important;
    }
  }

</style>
