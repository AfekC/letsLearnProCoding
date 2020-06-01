<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="2">
            <Menu />
          </v-col>
          <v-col>
            <Content :isExtraDetails="isExtraDetails" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Content from "./components/Content.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Content,
    Menu
  },
  data: function() {
    return {
      title: "",
      isExtraDetails: true
    };
  }
};
</script>
