<template>
  <v-list-item :class="mailClass">
    <v-list-item-content @click="setMailToShow(mail)">
      <v-list-item-title v-text="mail.from"></v-list-item-title>
      <v-list-item-subtitle class="text--primary" v-text="mail.title"></v-list-item-subtitle>
      <v-list-item-subtitle v-text="mail.content"></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action @click.stop @submit.stop>
      <p>{{fixedTime}}</p>
      <v-row>
        <v-icon v-if="!mail.mailEvent.favorite" color="grey lighten-1" @click="starClicked">star_border</v-icon>
        <v-icon v-else color="yellow" @click="starClicked">star</v-icon>
        <v-icon v-if="$route.name==='MailIn'" @click="throwToTrash">delete</v-icon>
        <v-icon v-if="$route.name==='Trash'" @click="returnFromTrash">undo</v-icon>
        <v-icon v-if="$route.name==='MailIn'" @click="replyClicked">reply</v-icon>
      </v-row>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Menu",
  props: {
    mail: Object,
    mailClass: String
  },
   mounted() {
    if (this.mail.mailEvent.replied) {
      this.mailClass = "reply";
    }
  },
  methods: {
    ...mapActions(["setMailToShow", "changeFavoriteOption", "throwMailToTrash", "reply", "returnMailFromTrash"]),
    starClicked() {
      this.changeFavoriteOption({mail:this.mail, mailType:this.$route.name})
    },
    throwToTrash() {
      if (confirm("האם אתה בטוח שאתה רוצה למחוק את ההודעה?")) {
        this.throwMailToTrash(this.mail)
        alert("ההודעה הועברה לזבל");
      }
    },
    returnFromTrash() {
      this.returnMailFromTrash(this.mail)
      alert("ההודעה שוחזרה!");
    },
    replyClicked() {
      console.log(this.mail)
      this.reply(this.mail)
      this.mailClass = "reply";
      alert("ההודעה הושבה!");
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
        sent = Math.round(diffMins / (60 * 24)) + " ימים";
      } else {
        sent = "מעל 7 ימים";
      }
      return sent;
    }
  }
};
</script>

<style scoped>
.reply {
  background-color: rgb(208, 245, 252);
}
</style>