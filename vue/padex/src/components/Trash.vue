<template>
  <v-list three-line style="max-height: 88vh" class="overflow-y-auto">
    <v-list-item-group color="gray">
      <template v-for="(mail, index) in getTrashMails">
        <MailItem :mail="mail" :key="mail.id" canBeDeleted="true" />
        <v-divider v-if="index + 1 < getTrashMails.length" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import MailItem from "./MailItem";
import { mapState } from 'vuex';

export default {
  name: "Trash",
  components: {
    MailItem
  },
  computed: {
    ...mapState(['favoriteOnly', 'trash']),
    getTrashMails() {
      let trash = this.trash
      if(this.favoriteOnly){
        trash = trash.filter(mail => mail.mailEvent.favorite === true)
      }
      return trash
    }
  }
};
</script>

<style scoped>
</style>
