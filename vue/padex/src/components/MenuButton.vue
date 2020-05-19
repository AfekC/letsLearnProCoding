<template>
    <v-btn 
        @click="buttonClicked()"
        :class="buttonClass"
        text width="95%">{{button.title}}
    </v-btn>
</template>

<script>

import EventBus from '@/event-bus';

export default {
  name: 'MenuButton',
  props: {
    clicked: Number,
    button:Object
  },
  methods:{
      buttonClicked(){
          this.clicked = this.button.id
          EventBus.$emit('MENU_BUTTON_CLICKED', {id: this.button.id, title: this.button.title});
      }
  },
  computed:{
    buttonClass(){
      if(this.button.id == this.clicked){
        return 'pressed'
      } else {
        return 'notPressed'
      }
    }
  }
}
</script>

<style scoped>
v-btn {
  padding: 0;
}

.pressed{
    color: blue !important;
    background-color:rgb(192,192,192);
}

.notPressed{
    color:black !important;
    background-color:white;
}
</style>
