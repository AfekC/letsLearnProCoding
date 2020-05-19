<template>
  <BasicCard style="height: 93vh" title="תפריט">  
    <MenuButton v-for="(button, index) in buttons" :key="index" :clicked="clicked" :button="button"/>
  </BasicCard>
</template>

<script>

import MenuButton from './MenuButton.vue'
import BasicCard from './BasicCard.vue'
import EventBus from '@/event-bus'

export default {
  name: 'Menu',
  components: {
    MenuButton,
    BasicCard
  },
  data: function () {
    return {
      clicked: 0,
      buttons: [{id:"1", title:"דואר נכנס"}, {id:"2", title:"דואר יוצא"}, {id:"3", title:"דואר זבל"}]
    }
  },
  mounted () {
    EventBus.$on('MENU_BUTTON_CLICKED', ({id}) => {
      this.clicked=parseInt(id)
    });
  }
}
</script>

