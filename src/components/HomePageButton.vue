<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-btn dark block color="deep-purple accent-4">
          <v-icon class="mx-2">mdi-lightbulb-on</v-icon>
          Get An Eat Place!
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class HomePageButton extends Vue {

  }
</script>

<style scoped>

</style>
