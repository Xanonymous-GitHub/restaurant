<!--suppress HtmlUnknownTarget -->
<template>
  <div>
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        md="4"
      >
        <v-row align="center" justify="center">
          <EaterCard/>
        </v-row>
      </v-col>
      <v-col
        cols="8"
        md="4"
      >
        <v-img :src="bgSrc"/>
      </v-col>
      <v-col
        cols="8"
        order-md="8"
      >
        <v-row align="center" justify="center">
          <HomePageButton/>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">

  import {Vue, Component} from 'vue-property-decorator'

  const HomePageButton = () => import("@/components/HomePageButton.vue");
  const EaterCard = () => import("@/components/EaterCard.vue");

  @Component({
    components: {
      EaterCard,
      HomePageButton
    }
  })
  export default class HomePage extends Vue {
    private bgSrc = require("@/assets/chicken.svg");
  }

</script>
