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
    </v-row>
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <v-row align="center" justify="center">
          <RestaurantCard/>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">

  import {Vue, Component} from 'vue-property-decorator'


  const RestaurantCard = () => import("@/components/RestaurantCard.vue");
  const EaterCard = () => import("@/components/EaterCard.vue");

  @Component({
    components: {
      EaterCard,
      RestaurantCard
    }
  })
  export default class Result extends Vue {
    private bgSrc = require("@/assets/chicken.svg");
  }

</script>
