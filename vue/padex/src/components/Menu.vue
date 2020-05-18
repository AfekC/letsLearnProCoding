<template>
  <div class="menu">
    <v-card style="height: 93vh">  
      <v-system-bar color="pink">תפריט</v-system-bar>
            <MenuButton :clicked="clicked" id="1" title="דואר נכנס" @buttonClicked="buttonClicked"/>
            <MenuButton :clicked="clicked" id="2" title="דואר יוצא" @buttonClicked="buttonClicked"/>
            <MenuButton :clicked="clicked" id="3" title="דואר זבל" @buttonClicked="buttonClicked"/>
    </v-card>
  </div>
</template>

<script>

import MenuButton from './MenuButton.vue'
export default {
  name: 'Menu',
  components: {
    MenuButton
  },
  data: function () {
    return {
      clicked: 0
    }
  },
  methods:{
      buttonClicked(id, title){
          this.clicked=parseInt(id)
          this.$emit('changeTitle', title)
      }
  }
}
</script>

