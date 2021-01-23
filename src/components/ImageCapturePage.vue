<template>
  <div class="container">
    <div id="div1">
        <video autoplay="autoplay"></video>
        <button>캡쳐 &amp; 디스플레이</button>
        <canvas></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCapturePage',
  data () {
    return {
      video: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let canvas = window.canvas = document.querySelector('canvas')
      canvas.width = 480
      canvas.height = 360
      let button = document.querySelector('button')
      button.onclick = function () {
        canvas.getContext('2d').drawImage(this.video, 0, 0, canvas.width, canvas.height)
      }
      this.video = document.querySelector('video')
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
      let div1 = {
        audio: false,
        video: true
      }
      navigator.getUserMedia(div1, this.success, this.fail)
    },
    success (stream) {
      this.video.src = window.URL.createObjectURL(stream)
    },
    fail (error) {
      alert('no camera! check errorcode :' + error)
    }
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
}

</style>
