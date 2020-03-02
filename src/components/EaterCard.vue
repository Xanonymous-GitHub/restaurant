<!--suppress HtmlUnknownTarget -->
<template>
  <v-card class="my-1 noOutLine" max-height="220" max-width="600" width="80%">
    <v-img :src="user.avatar" class="mx-3 my-3 float-right" max-height="50" max-width="50" right></v-img>
    <v-card-text>
      <p class="display-1 text--primary font-weight-bold">
        {{user.name}}
      </p>
      <p>{{"@"+user.id}}
        <v-icon class="mx-1" color="primary" small v-if="user.verified">mdi-check-decagram</v-icon>
      </p>
      <div class="text--primary">
        {{user.description}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="deep-purple accent-4"
        text
      >
        登出
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class EaterCard extends Vue {
    private user = {
      id: "Xanonymous",
      name: "TeU Lin",
      level: "Alpha",
      avatar: require("@/assets/Xanonymousico512fixed.png"),
      description: "Eat more slow can let u eat more, Majaja.",
      verified: true
    };
  }
</script>
<style lang="scss" scoped>
  $no: none;
  .noOutLine {
    outline: {
      color: transparent;
      offset: $no;
      style: $no;
      width: $no;
    };
  }
</style>
