<template>
  <div class="container">
    <input type="file" id="camera" name="camera" capture="camera" accept="image/*" />
  </div>
</template>

<script>
export default {
  name: 'ImageSelectPage',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
body {
  background-color: white !important;
}

</style>
