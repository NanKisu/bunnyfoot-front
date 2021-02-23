<template>
  <div class="container">
    <!-- <div class="title"></div> -->
    <h1 id="title">BBTI</h1>
    <div @click="clickMainStart(event)">
      <div class="main"></div>
      <!-- <div class="start"></div> -->
      <v-btn depressed rounded x-large color="#FEDEDF" class="btnMain">시작</v-btn>
      <div id="msg1">
        지금까지 {{ participant }} 마리가 참여해토
      </div>
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
    clickMainStart (event) {
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
  background-image: url("/static/welcome_main_image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

</style>
