<!--suppress HtmlUnknownTarget -->
<template>
  <v-card class="my-1 noOutLine" max-height="220" max-width="600" width="80%">
    <v-img :src="user.avatarUrl" class="mx-3 my-3 float-right " max-height="50" max-width="50" right></v-img>
    <template #placeholder>
      <v-row
        align="center"
        class="fill-height ma-0"
        justify="center"
      >
        <v-progress-circular color="grey lighten-5" indeterminate></v-progress-circular>
      </v-row>
    </template>
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
  import {AppState} from "@/store/types/app";
  import {
    Getter,
  } from 'vuex-class'

  @Component
  export default class EaterCard extends Vue {
    @Getter('user', {namespace: 'app'})
    public user!: AppState['user'];
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
