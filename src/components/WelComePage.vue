<template>
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
      // console.log(url)

      axios.get(url)
        .then(rest => {
          this.participant = rest.data
          this.pageViewVisible = true
        })
        .catch(() => {
        })
    },

    clickMainStart () {
      send('welcome', '새로운 유저가 테스트를 시작했어요!')
      this.$router.push('/guide')
    }
  },

  mounted () {
    this.getPageView()
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
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
