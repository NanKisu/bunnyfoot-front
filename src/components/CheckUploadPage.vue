<template>
  <v-card id="cardCheck">
    <v-card-title class="headline grey lighten-2">
        사진을 확인해주세요
    </v-card-title>

    <slot></slot>

    <v-divider></v-divider>

    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
        color="primary"
        text
        @click="dialog = false"
        >
        시작
        </v-btn>
    </v-card-actions>
    </v-card>
</template>

<style scoped>

</style>

<script>
export default {
}
</script>
