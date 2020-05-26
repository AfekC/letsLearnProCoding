<template>
  <v-list three-line>
     <v-list-item-group
        color="gray"
      >
        <template v-for="(mail, index) in mailOut">         
            <MailItem :mail="mail" :key="mail.id"/>
          <v-divider
            v-if="index + 1 < mailOut.length"
            :key="index"
          ></v-divider>
        </template>
    </v-list-item-group>
  </v-list>
</template>

<script>

import MailItem from './MailItem'
import {mailOut} from '../data/mails'

export default {
  name: 'MsgOut',
  components:{
    MailItem
  },
  data(){
    return {
      mailOut
    }
  }
}
</script>

<style scoped>
</style>
