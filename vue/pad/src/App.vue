<template>
  <div id="app">
    <v-container fluid fill-height>
      <v-row>
        <v-col cols="2">
          <Menu @changeTitle="changeTitle"/>
        </v-col>
        <v-col cols="10">
            <MainDetails class="pb-2" :title="title" :halfScreen="isExtraDetails"/>
            <ExtraDetails v-show="isExtraDetails"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MainDetails from './components/MainDetails.vue'
import Menu from './components/Menu.vue'
import ExtraDetails from './components/ExtraDetails.vue'

export default {
  name: 'App',
  components: {
    MainDetails,
    Menu,
    ExtraDetails
  },
  data: function () {
    return {
      title: "",
      isExtraDetails: true
    }
  },
  methods:{
    changeTitle (title) {
     this.title = title;
     if(title === "דואר זבל"){
       this.isExtraDetails = false;
     } else {
       this.isExtraDetails = true;
     }
   }
  },
}
</script>

<style>

</style>
