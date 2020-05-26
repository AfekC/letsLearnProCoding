<template>
  <v-list-item @click="buttonClicked()">
    <v-list-item-content>
      <v-list-item-title v-text="button.title"></v-list-item-title>
    </v-list-item-content>
        <v-list-item-icon>
      <v-icon v-text="button.icon"></v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "MenuButton",
  props: {
    button: Object
  },
  methods: {
    buttonClicked() {
      this.clicked = this.button.id;
      EventBus.$emit("MENU_BUTTON_CLICKED", {
        id: this.button.id,
        title: this.button.title
      });
    }
  },
};
</script>

<style scoped>
</style>
