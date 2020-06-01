<template>
  <router-link :to="'/' + button.component">
    <v-list-item @click="setCurrOption(button)">
      <v-list-item-content>
        <v-list-item-title v-text="button.title"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon v-text="button.icon"></v-icon>
      </v-list-item-icon>
    </v-list-item>
  </router-link>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MenuButton",
  props: {
    button: Object
  },
  methods: {
    ...mapActions(["setCurrOption"])
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
