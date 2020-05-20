<template>
  <BasicCard style="height: 93vh" title="תפריט">  
    <MenuButton v-for="(button, index) in MenuOptions" :key="index" :clicked="clicked" :button="button"/>
  </BasicCard>
</template>

<script>

import MenuButton from './MenuButton.vue'
import BasicCard from './BasicCard.vue'
import EventBus from '@/event-bus'
import MenuOptions from '@/menuOption.js'

export default {
  name: 'Menu',
  components: {
    MenuButton,
    BasicCard
  },
  data: function () {
    return {
      clicked: 0,
      MenuOptions
    }
  },
  mounted () {
    EventBus.$on('MENU_BUTTON_CLICKED', ({id}) => {
      this.clicked=parseInt(id)
    });
  }
}
</script>

