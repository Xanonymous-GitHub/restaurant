<template>
  <v-app id="inspire">
    <Bar/>
    <router-view/>
    <BackGround/>
  </v-app>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  const Bar = () => import("@/components/Bar.vue");
  const BackGround = () => import("@/components/BackGround.vue");

  @Component({
    components: {
      Bar,
      BackGround
    }
  })
  export default class Main extends Vue {

  }
</script>
