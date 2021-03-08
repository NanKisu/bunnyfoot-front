<template>
  <div class="container">

    <h1 id="title" class="fontYeoljeongdo">B<span id="bunny">unny</span>BTI</h1>
    <div class="main"></div>

    <div class="btnWrapper" @click="clickMainStart()">
      <v-btn depressed rounded x-large color="#FEDEDF" class="btnMain">시작</v-btn>
    </div>

    <div id="msg1" class="fontCookierun">
        지금까지 {{ participant }} 마리가 참여해토
    </div>

  </div>
</template>

<script>
export default {
  name: 'WelComePage',
  data () {
    return {
      participant: 0
    }
  },
  methods: {
    clickMainStart () {
      this.$router.push('/guide')
    }
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
}

#title {
  margin-top: 3vh;
  text-align: center;
  font-size: 3em;
}

#bunny {
  font-size: 0.3em;
}

#msg1 {
  text-align: center;
  margin-top: 5vh;
}

.main {
  position: relative;
  margin-top: 13vh;
  left: 50%;
  margin-left: -50%;
  height: 45vh;
  width: 100%;
  /* background-image: url("/static/welcome_main_image.png"); */
  background-image: url("/static/images/welcome-rabbit.png");
  border-radius: 30%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

</style>
