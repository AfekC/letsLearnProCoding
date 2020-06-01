<template>
  <v-card>
    <v-app-bar color="#e91e63" height="30%" style="h">
      <v-row space-between align="center"
      justify="center">
        <v-col md="10">
          <h3>{{title}}</h3>
        </v-col>
        <v-col style="padding:0; marggin:0; height:3vh">
          <v-checkbox v-model="favoriteOption" v-if="haveFavoriteOption" label="הראה מועדפים בלבד"></v-checkbox>
        </v-col>
      </v-row>
    </v-app-bar>
    <slot></slot>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BasicCard",
  props: {
    title: String,
    cardtyle: String,
    haveFavoriteOption: Boolean
  },
  data() {
    return {
      favoriteOption: false
    };
  },
  watch: {
    favoriteOption() {
      this.setFavoriteOnly(this.favoriteOption);
    }
  },
  methods: {
    ...mapActions(["setFavoriteOnly"])
  }
};
</script>

<style scoped>
</style>
