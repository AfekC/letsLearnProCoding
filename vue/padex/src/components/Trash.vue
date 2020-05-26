<template>
  <v-list three-line>
     <v-list-item-group
        color="gray"
      >
        <template v-for="(mail, index) in trash">         
            <MailItem :mail="mail" :key="mail.id"/>
          <v-divider
            v-if="index + 1 < trash.length"
            :key="index"
          ></v-divider>
        </template>
    </v-list-item-group>
  </v-list>
</template>

<script>

import MailItem from './MailItem'
import {trash} from '../data/mails'

export default {
  name: 'Trash',
  components:{
    MailItem
  },
  data(){
    return {
      trash
    }
  }
}
</script>

<style scoped>
</style>
