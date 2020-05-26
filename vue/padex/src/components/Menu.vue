<template>
  <BasicCard style="height: 93vh" title="תפריט">
    <v-list>
      <v-list-item-group background-color="gray" color="primary">
      <MenuButton
        v-for="button in menuOptions"
        :key="button.id"
        :button="button"
      />
      </v-list-item-group>
    </v-list>
  </BasicCard>
</template>

<script>
import MenuButton from "./MenuButton.vue";
import BasicCard from "./BasicCard.vue";
import EventBus from "@/event-bus";
import menuOptions from "@/menuOption.js";

export default {
  name: "Menu",
  components: {
    MenuButton,
    BasicCard
  },
  data: function() {
    return {
      menuOptions
    };
  }
};
</script>

