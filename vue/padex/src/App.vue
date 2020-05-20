<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="2">
            <Menu/>
          </v-col>
          <v-col>
            <MainDetails :title="title" :isExtraDetails="isExtraDetails"/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainDetails from './components/MainDetails.vue'
import Menu from './components/Menu.vue'
import EventBus from './event-bus';
import MenuOptions from './menuOption.js'


export default {
  name: 'App',
  components: {
    MainDetails,
    Menu,
  },
  data: function () {
    return {
      title: "",
      isExtraDetails: true
    }
  },
  mounted () {
    EventBus.$on('MENU_BUTTON_CLICKED', ({title, id}) => {
      this.title = title;
      this.isExtraDetails = MenuOptions.filter(option => option.id === id)[0].isExtraDetails
    });
  },
  
}
</script>
