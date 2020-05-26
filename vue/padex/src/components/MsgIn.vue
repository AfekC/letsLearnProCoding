<template>
  <v-list three-line>
     <v-list-item-group
        color="gray"
      >
        <template v-for="(mail, index) in mailIn">         
            <MailItem :mail="mail" :key="mail.id"/>
            <v-divider
              v-if="index + 1 < mailIn.length"
              :key="index"
            ></v-divider>
        </template>
    </v-list-item-group>
  </v-list>
</template>

<script>

import MailItem from './MailItem'
import {mailIn} from '../data/mails'

export default {
  name: 'MsgIn',
  components:{
    MailItem
  },
  data(){
    return {
      mailIn
    }
  }

}
</script>

<style scoped>
</style>
