<template>
  <v-card
    hover
    max-width="600"
    shaped
    width="80%"
    class="my-2"
  >
    <v-img
      class="white--text align-end"
      max-height="150px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="white--text display-1  font-weight-bold" color="white" dark>I am Pasta</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>在I'M PASTA的店門前，樹立了一個招牌「本店榮獲104年度北科大票選冠軍」。
        柚子寶對於校園美食冠軍的頭銜，對我非常有說服力。
        想當年學生吃的東西，必須兼顧飽足感、美味程度、店家親不親切、最重要的就是「CP值」。
        就連柚子寶到現在，有時候還是會跑去一些大學的學生餐廳，享受以上的各種優點，順便體驗學生時代的青春回憶。
      </div>
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

  @Component
  export default class RestaurantCard extends Vue {

  }
</script>
