<template>
  <v-list-item>
    <v-list-item-content @click="showMail">
      <v-list-item-title v-text="mail.from"></v-list-item-title>
      <v-list-item-subtitle class="text--primary" v-text="mail.title"></v-list-item-subtitle>
      <v-list-item-subtitle v-text="mail.content"></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action @click.stop @submit.stop>
      <p>{{fixedTime}}</p>
        <v-icon v-if="!mail.favorite" color="grey lighten-1" @click="starClicked">star_border</v-icon>
        <v-icon v-else color="yellow" @click="starClicked">star</v-icon>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "Menu",
  props: {
    mail: Object
  },
  methods: {
    starClicked() {
      this.mail.favorite = !this.mail.favorite;
    },
    showMail() {
      EventBus.$emit("SHOW_MAIL", this.mail);
    }
  },
  computed: {
    fixedTime() {
      let diffMins = Math.round((new Date() - this.mail.sent) / 60000);
      let sent = "";
      if (diffMins < 60) {
        sent = diffMins + " דקות";
      } else if (diffMins < 60 * 2) {
        sent = "שעה";
      } else if (diffMins < 60 * 3) {
        sent = "שעתיים";
      } else if (diffMins < 60 * 24) {
        sent = Math.round(diffMins / 60) + " שעות";
      } else if (diffMins < 60 * 24 * 2) {
        sent = "אתמול";
      } else if (diffMins < 60 * 24 * 3) {
        sent = "יומיים";
      } else if (diffMins < 60 * 24 * 7) {
        sent = diffMins / Math.round(60 * 24) + "ימים";
      } else {
        sent = "מעל 7 ימים";
      }
      return sent;
    }
  }
};
</script>

