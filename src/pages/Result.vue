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
      <RestaurantCard/>
      <template #placeholder>
        <v-row
          align="center"
          class="fill-height ma-0"
          justify="center"
        >
          <v-progress-circular color="grey lighten-5" indeterminate></v-progress-circular>
        </v-row>
      </template>
    </v-row>
  </div>
</template>

<script lang="ts">

  import {Vue, Component} from 'vue-property-decorator'

  const EaterCard = () => import("@/components/EaterCard.vue");
  const RestaurantCard = () => import("@/components/RestaurantCard.vue");

  @Component({
    components: {
      RestaurantCard,
      EaterCard
    }
  })
  export default class Result extends Vue {

  }

</script>
