<template>
  <v-app id="inspire">
    <Bar/>
    <v-content>
      <router-view class="transition-group"/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  const Bar = () => import("@/components/Bar.vue");
  const HomePage = () => import("@/pages/HomePage.vue");

  @Component({
    components: {
      Bar,
      HomePage
    }
  })
  export default class Main extends Vue {

  }
</script>
