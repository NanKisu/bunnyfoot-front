<template>
  <div class="container">
    <div @click="clickImageCapture">
      <h2>이미지 캡쳐</h2>
    </div>
    <div @click="clickImageUpload">
      <h2>이미지 업로드</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeleceMethodPage',
  data () {
    return {
    }
  },
  methods: {
    clickImageUpload () {
      this.$router.push('/imageSelect')
    },
    clickImageCapture () {
      this.$router.push('/imageCapture')
    }
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
}

</style>
