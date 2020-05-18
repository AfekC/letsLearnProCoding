<template>
  <div class="menuButton">
    <v-btn 
        @click="buttonClicked()"
        :class="{'pressed': clicked == id, 'notPressed': clicked != id}"
        text width="95%">{{title}}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    clicked: Number,
    id: String,
    title: String
  },
  methods:{
      buttonClicked(){
          this.clicked = this.id
          this.$emit('buttonClicked', this.id, this.title)
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
