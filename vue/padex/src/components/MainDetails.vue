<template>
  <div>
    <BasicCard :title="title" :style="mainDetailsHeight">
      <component v-bind:is="component" />
    </BasicCard>
    <BasicCard v-show="isExtraDetails" title="מידע נוסף" style="height: 32vh; margin-top: 6px;">
    </BasicCard>
  </div>
</template>

<script>

import BasicCard from './BasicCard'
import MsgIn from './MsgIn'
import MsgOut from './MsgOut'
import Trash from './Trash'

export default {
  name: 'MainDetails',
  data(){
    return{
      component:undefined
    }
  },
  components: {
    BasicCard,
    MsgIn,
    MsgOut,
    Trash
  },
  props: {
    title: String,
    isExtraDetails: Boolean
  },
  computed:{
    mainDetailsHeight(){
      if(this.isExtraDetails === true){
        return "height: 60vh;"
      } else{
        return "height: 93vh;"
      }
    }
  }
}
</script>

<style scoped>
.allScreen{
  height: 93vh;
}

.halfScreen{
  height: 60vh;
}
</style>
