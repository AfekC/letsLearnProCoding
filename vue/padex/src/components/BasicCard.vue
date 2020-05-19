<template>
  <v-card>  
    <v-card-text style="background-color: #e91e63; padding:2px; height:4vh;">{{title}}</v-card-text>
    <slot ></slot>
  </v-card>
</template>

<script>
export default {
  name: 'BasicCard',
  props:{
    title:String,
    cardtyle: String
  }
}
</script>

<style scoped>
</style>
