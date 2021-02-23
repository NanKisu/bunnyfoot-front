<template>
  <div class="container">
    <!-- <input type="text" placeholder="토끼의 이름은?"/> -->
    <span id="msg1">내 토끼의 발바닥 사진을 업로드하시면<br>테스트가 시작됩니다.</span>
    <div class="sample_image"></div>

    <div>
      <v-btn depressed rounded x-large color="#C4E3FF" class="btnMain btnPink">업로드</v-btn>
      <!-- <label id="uploadBtnLabel" class="button" for="camera">
        업로드
      </label> -->
      <input type="file" id="uploadBtn" name="camera" capture="camera" accept="image/*" @change="uploadImage"/>

      <v-btn depressed rounded x-large color="#C4E3FF" class="btnMain btnBlue" @click="clickSkip(event)">그냥 할래요</v-btn>
      <input type="button" id="skipBtn">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'guidePage',
  data () {
    return {
    }
  },
  methods: {
    uploadImage (e) {
      let img = e.target.files[0]
      let fd = new FormData()
      fd.append('image', img)
      axios.post('http://localhost:8080/imageUpload', fd)
        .then(resp => {
          this.imagePath = resp.data.path
        })
      this.$router.push('/question')
    },

    clickSkip (e) {
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
  visibility: hidden;
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
