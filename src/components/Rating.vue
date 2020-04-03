<template>
  <v-rating
    :background-color="bgColor"
    :color="color"
    :dense="dense"
    :empty-icon="emptyIcon"
    :full-icon="fullIcon"
    :half-icon="halfIcon"
    :half-increments="halfIncrements"
    :hover="hover"
    :length="length"
    :readonly="readonly"
    :size="size"
    v-model="userRate"
  ></v-rating>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator'
  import 'reflect-metadata'

  @Component
  export default class Rating extends Vue {
    emptyIcon = 'mdi-heart-outline';
    fullIcon = 'mdi-heart';
    halfIcon = 'mdi-heart-half-full';
    halfIncrements = false;
    hover = true;
    length = 5;
    readonly = false;
    size = 20;
    dense = false;
    color = 'red';
    bgColor = 'grey';
    @Prop() private userRate!: number;
  }
</script>
