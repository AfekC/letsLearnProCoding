<template>
  <div class="mainDetails">
    <v-card v-bind:class="{'allScreen': !halfScreen, 'halfScreen':halfScreen}">  
      <v-system-bar color="pink">{{title}}</v-system-bar>

    </v-card>
  </div>
</template>

<script>

export default {
  name: 'MainDetails',
  components: {
    //Message
  },
  props: {
    title: String,
    halfScreen: Boolean
  },
}
</script>

<style scoped>
.allScreen{
  height: 93vh;
}

.halfScreen{
  height: 60vh;
}
</style>
