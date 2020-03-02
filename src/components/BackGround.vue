<!--suppress HtmlUnknownTarget -->
<template>
  <v-row align="center" justify="center">
    <v-col
      class="pa-2"
      cols="8"
      md="4"
    >
      <v-img :src="bgSrc"/>
    </v-col>
  </v-row>
</template>

<script lang="ts">

  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class BackGround extends Vue {
    private bgSrc = require("@/assets/chicken.svg");
  }

</script>
