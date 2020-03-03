<template>
  <v-card
    class="mx-auto my-2"
    hover
    max-width="800" shaped
    width="80%"
  >
    <v-img
      class="white--text align-end"
      max-height="150px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="display-1 font-weight-bold">{{restaurant.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{restaurant.subName}}
      <Rating :user-rate="restaurant.rating"/>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{restaurant.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'
  import {AppState} from "@/store/types/app";
  import Rating from "@/components/Rating.vue"
  import {
    Getter,
  } from 'vuex-class'

  @Component({
    components: {
      Rating
    }
  })
  export default class RestaurantCard extends Vue {
    @Getter('restaurant', {namespace: 'app'})
    public restaurant!: AppState['restaurant'];
  }
</script>
