<template>
  <v-app-bar
    app
    color="red"
    dark
  >
    <v-icon left x-large>mdi-food</v-icon>
    <v-toolbar-title><b>我就吃!</b></v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class Bar extends Vue {

  }
</script>

<style scoped>

</style>
