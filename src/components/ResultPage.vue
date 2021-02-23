<template>
  <div class="container">
    <div id="msg1">
      <h4>내 토끼는</h4>
      <h4>{{ resultTitle[resultId-1] }} 스타일</h4>
      <!-- <div class="typeImage"></div> -->
      <div>
        <img :src="getImgUrl()" style="width: 50vh" />
      </div>
    </div>

    <v-alert
      border="top"
      color="#F1F1F0"
    >
      {{ resultText[resultId-1] }}
    </v-alert>

    <v-btn>카카오톡 공유</v-btn>
    <v-btn>이미지 다운로드</v-btn>
    <v-btn>다시 해보기</v-btn>
  </div>
</template>

<script>
export default {
  name: 'ResultPage',
  data () {
    return {
      resultId: this.$route.params.resultId,
      resultTitle: ['경계심 가득한 도도한', '누가 뭐래도 나는 이구역 인싸!', '애교쟁이', '순딩이'],
      resultText: [
        '타입1에 대한 글\n길게',
        '타입2에 대한 글',
        '타입3에 대한 글',
        '타입4에 대한 글'
      ]
    }
  },
  methods: {
    getImgUrl () {
      return '/static/images/result_type_' + this.resultId + '.png'
    }
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
}

.typeImage {
  /* position: relative; */
  margin-top: 13vh;
  left: 50%;
  margin-left: -50%;
  height: 45vh;
  width: 100%;
  /* background-image: url("/static/images/result_type_3.png"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.msg1 {
}

</style>
