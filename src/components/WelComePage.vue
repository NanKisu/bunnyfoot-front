<template>
  <div id="app">
    <div id="app2">
      <div class="container">

        <div class="topBbti">
          <h1 class="fontYeoljeongdo font3em msgMt3vh">B<span id="bunny">unny</span>BTI</h1>
        </div>

        <div class="mainBbti">
          <div class="imgSection"></div>
        </div>

        <div class="bottomBbti">
          <div class="btnWrapper fontNexonBold" @click="clickMainStart()">
            <v-btn depressed rounded x-large color="#FEDEDF" class="btnMain">시작</v-btn>
          </div>
          <div v-if="pageViewVisible" class="fontCookierun msgMt8vh">
              지금까지 {{ participant }} 마리가 참여해토
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {send} from '@/components/SlackBot.js'
import axios from 'axios'

export default {
  name: 'WelComePage',
  data () {
    return {
      participant: 0,
      pageViewVisible: false
    }
  },
  methods: {
    getPageView () {
      let url = this.$store.state.apiUrl + 'pageView'

      axios.get(url)
        .then(rest => {
          this.participant = rest.data
          this.pageViewVisible = true
        })
        .catch(() => {
        })
    },

    clickMainStart () {
      this.$router.push('/guide')
    }
  },

  mounted () {
    this.getPageView()
  }
}
</script>

<style scoped>
  #app {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  @media screen and (max-width: 550px) {
    #app {
      background-image: url("/static/images/pattern/leaves.png");
      background-position: center;
      background-repeat: repeat;
    }
  }

  @media screen and (min-width: 551px) {
    #app {
      max-width: 550px !important;
      margin: 0 auto !important;
      background-image: url("/static/images/pattern/leaves.png");
      background-position: center;
      background-repeat: repeat;
    }
  }

  @media screen and (max-height: 600px) {
    #app2 {
      height: 100%;
      min-height: 600px;
    }
  }

  @media screen and (min-height: 601px) {
    #app2 {
      position: relative;
      top: 50%;
      margin-top: -300px;
      height: 600px !important;
    }
  }

  #bunny {
    font-size: 0.3em;
  }

  .imgSection {
    background-image: url("/static/images/welcome-rabbit.png");
  }

  .btnMain {
    margin-top: 8vh;
  }

</style>
