<template>
  <div class="container">
    <!-- <input type="text" placeholder="토끼의 이름은?"/> -->
    <span id="msg1">내 토끼의 발바닥 사진을 업로드하시면<br>테스트가 시작됩니다.</span>
    <div class="sample_image"></div>

    <div>
      <v-btn depressed rounded x-large color="#C4E3FF" class="btnMain btnPink"
            @click="btnUploadImage">
            업로드
      </v-btn>
      <input type="file" id="uploadBtn" name="camera" capture="camera" accept="image/*" @change="uploadImage"/>

      <v-btn depressed rounded x-large color="#C4E3FF" class="btnMain btnBlue" @click="goQuestion">그냥 할래요</v-btn>
      <input type="button" id="skipBtn">
    </div>

    <!-- 사진 확인 -->
    <vue-modaltor  :visible="showCheck" @hide="hideModal">
      <img :src=url id="check_img" />
      <v-btn color="primary" text @click="btnUploadImage">다시 선택</v-btn>
      <v-btn color="primary" text @click="sendUploadImage">시작</v-btn>
    </vue-modaltor>

  </div>
</template>

<script>
import axios from 'axios'
import CheckUploadPage from '@/components/CheckUploadPage.vue'

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
      this.img = e.target.files[0]

      // 사진 확인용
      this.url = URL.createObjectURL(this.img)
      this.showCheck = true
    },

    // 사진 데이터 확인 후 전송
    sendUploadImage () {
      // this.showCheck = false

      // 이미지 s3 업로드
      let fd = new FormData()
      fd.append('image', this.img)
      axios.post('http://localhost:8080/imageUpload', fd)
        .then(resp => {
          // this.imagePath = resp.data.path
        })
        
      this.goQuestion()
    },

    hideModal () {
      this.showCheck = false
    },

    // 질문 페이지로 이동
    goQuestion (e) {
      this.$router.push('/question')
    }
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
}

h4 {
  margin-top: 5vh;
  text-align: center;
}

#msg1 {
  margin-top: 2vh;
  text-align: center;
}

input[type="file"] {
  display: none;
}

.sample_image {
  position: relative;
  margin-top: 5vh;
  left: 50%;
  margin-left: -48%;
  height: 50vh;
  width: 96%;
  background-image: url("/static/image_sample_cartoon.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
</style>
