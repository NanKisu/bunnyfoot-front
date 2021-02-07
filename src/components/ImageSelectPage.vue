<template>
  <div class="container">
    <input type="text" placeholder="토끼의 이름은?"/>
    <h4>이쁜 토끼 발바닥 사진을 찍어주세요</h4>
    <div class="sample_image"></div>
    <label id="button" for="camera">
      사진 가져오기
    </label>
    <input type="file" id="camera" name="camera" capture="camera" accept="image/*" @change="uploadImage"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ImageSelectPage',
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
      this.$router.push('/qestion')
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

input {
  visibility: hidden;
}

.sample_image {
  position: relative;
  margin-top: 5vh;
  left: 50%;
  margin-left: -48%;
  height: 60vh;
  width: 96%;
  background-image: url("/static/image_sample_cartoon.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#button {
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
