<template>
  <v-list three-line style="max-height: 55vh" class="overflow-y-auto">
    <v-list-item-group color="gray">
      <template v-for="(mail, index) in getOutMails">
        <MailItem :mail="mail" :key="mail.id" canBeDeleted="false" />
        <v-divider v-if="index + 1 < getOutMails.length" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import MailItem from "./MailItem";
import { mapState } from 'vuex';

export default {
  name: "MailOut",
  components: {
    MailItem
  },
  computed: {
    ...mapState(['favoriteOnly', 'mailsOut']),
    getOutMails() {
      let mailsOut = this.mailsOut
      if(this.favoriteOnly){
        mailsOut = mailsOut.filter(mail => mail.mailEvent.favorite === true)
      }
      return mailsOut
    }
  }
};
</script>

<style scoped>
</style>
