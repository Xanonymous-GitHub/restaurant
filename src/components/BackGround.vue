<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
                :src="require('../assets/logo.svg')"
                class="my-3"
                contain
                height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
                  href="https://community.vuetifyjs.com"
                  target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
              class="mb-5"
              cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
                  :href="next.href"
                  :key="i"
                  class="subheading mx-3"
                  target="_blank"
                  v-for="(next, i) in whatsNext"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
              class="mb-5"
              cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
                  :href="link.href"
                  :key="i"
                  class="subheading mx-3"
                  target="_blank"
                  v-for="(link, i) in importantLinks"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
              class="mb-5"
              cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
                  :href="eco.href"
                  :key="i"
                  class="subheading mx-3"
                  target="_blank"
                  v-for="(eco, i) in ecosystem"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">

  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class BackGround extends Vue {
    next = "";
  }

</script>
