<template>
  <div class="menu">
    <v-card style="height: 93vh">  
      <v-system-bar color="pink">תפריט</v-system-bar>
            <v-btn 
                @click="changeTitle('דואר נכנס')"
                :class="{'pressed': clicked === 1, 'notPressed': clicked !== 1}"
                v-on:click ="clicked = 1"
                text width="95%">דואר נכנס
            </v-btn>
            <v-btn 
                @click="changeTitle('דואר יוצא')"
                :class="{'pressed': clicked === 2, 'notPressed': clicked !== 2}"
                v-on:click ="clicked = 2"
                text width="95%">דואר יוצא
            </v-btn>
            <v-btn 
                @click="changeTitle('דואר זבל')"
                :class="{'pressed': clicked === 3, 'notPressed': clicked !== 3}"
                v-on:click ="clicked = 3"
                text width="95%">דואר זבל
            </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: function () {
    return {
      clicked: 0
    }
  },
  methods:{
      changeTitle(title){
          this.$emit('changeTitle', title)
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
