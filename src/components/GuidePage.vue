<template>
  <div id="app">
    <div id="app2">
      <div class="container">
        <!-- <input type="text" placeholder="토끼의 이름은?"/> -->
        <div class="topBbti">
          <div class="msg">
            <span class="fontNexonRegular">
              내 토끼의 발바닥 사진을 올려주시면<br>결과에 반영할게요!<br><br>
              아래 분홍색 상자처럼<br><b>발바닥만</b> 잘라서 보내주세요!
            </span>
          </div>
        </div>

        <div class="mainBbti">
          <div class="imgSection"></div>
        </div>

        <div class="bottomBbti">
          <div class="btnWrapper fontNexonBold">
            <v-btn depressed rounded x-large color="#cee6b4" class="btnMain"
                  @click="btnUploadImage">
                  업로드
            </v-btn>
            <!-- <input type="file" id="uploadBtn" name="camera" capture="camera" accept="file_extension|image/*" @change="uploadImage"/> -->
            <input type="file" id="uploadBtn" name="camera" @change="uploadImage"/>

            <v-btn depressed rounded x-large color="#cee6b4" class="btnMain" @click="goQuestion">그냥 할래요</v-btn>
            <input type="button" id="skipBtn">
          </div>
        </div>

        <!-- 사진 확인 -->
        <vue-modaltor  :visible="showCheck" @hide="hideModal">
          <img :src=url id="check_img" />
          <div class="btnWrapper">
            <v-btn color="primary" text @click="btnUploadImage">다시 선택</v-btn>
            <v-btn color="primary" text @click="sendUploadImage">시작</v-btn>
          </div>
        </vue-modaltor>

      </div>
    </div>
  </div>
</template>

<script>
import CheckUploadPage from '@/components/CheckUploadPage.vue'
import {send} from '@/components/SlackBot.js'

export default {
  components: {
    CheckUploadPage
  },
  name: 'guidePage',
  data () {
    return {
      showCheck: false,
      url: null,
      img: null
    }
  },
  methods: {
    // '업로드' 버튼 클릭
    btnUploadImage () {
      this.image = null
      document.getElementById('uploadBtn').click()
    },

    // 사진 데이터 선택
    uploadImage (e) {
      try {
        this.img = e.target.files[0]

        // 사진 확인용
        this.url = URL.createObjectURL(this.img)
        this.showCheck = true

        console.log(this.url)
      } catch (e) {
        alert(e)
        send('error', 'uploadImage error')
      }
    },

    // 사진 데이터 확인 후 전송
    sendUploadImage () {
      // this.showCheck = false

      const reader = new FileReader()
      reader.readAsDataURL(this.img)
      // console.log('before: ')
      // reader.readasdataurl
      reader.onload = (e) => {
        alert(e.target.result)
        localStorage.removeItem('uploadImage')
        localStorage.setItem('uploadImage', e.target.result)
        alert('1')
        this.goQuestion()
      }
    },

    hideModal () {
      this.showCheck = false
    },

    // 질문 페이지로 이동
    goQuestion (e) {
      alert('2')
      this.$router.push('/question')
    }
  }
}
</script>

<style scoped>
h4 {
  margin-top: 5vh;
  text-align: center;
}

input[type="file"] {
  display: none;
}

.imgSection {
  background-image: url("/static/images/guide_sample.png");
}

#check_img {
  position: relative;
  max-width: 96%;
}

.button {
  display: block;
  position: relative;
  margin: 2vh 2vw;
  padding: 10px 25px;
  background-color:#FF6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
}

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

</style>
