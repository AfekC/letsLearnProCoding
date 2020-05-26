<template>
  <v-card>  
    <v-card-text class="card-top">{{title}}</v-card-text>
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
.card-top{
  background-color: #e91e63;
  padding:2px;
  margin-bottom:1vh;
  height:4vh;
}
</style>
