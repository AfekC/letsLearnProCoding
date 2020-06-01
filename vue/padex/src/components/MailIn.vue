<template>
  <v-list three-line style="max-height: 55vh" class="overflow-y-auto">
    <v-list-item-group color="gray">
      <template v-for="(mail, index) in getInMails">
        <MailItem :mail="mail" :key="mail.id" />
        <v-divider v-if="index + 1 < getInMails.length" :key="index+'_div'"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import MailItem from "./MailItem";
import { mapState } from 'vuex';

export default {
  name: "MailIn",
  components: {
    MailItem
  },
  computed: {
    ...mapState(['favoriteOnly', 'mailsIn']),
    getInMails() {
      let mailIn = this.mailsIn
      if(this.favoriteOnly){
        mailIn = mailIn.filter(mail => mail.mailEvent.favorite === true)
      }
      return mailIn
    }
  }
};
</script>

<style scoped>
</style>
