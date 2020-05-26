<template>
  <div>
    <BasicCard :title="title" :style="mainDetailsHeight">
      <component v-bind:is="component" />
    </BasicCard>
    <BasicCard v-show="isExtraDetails" title="מידע נוסף" class="extraDetails">
      <div v-show="currMail">
        <h3>נושא: {{currMail.title}}</h3>
        <v-divider ma-2 />
        <h5>נשלח על ידי: {{currMail.from}}</h5>
        <p>תוכן: {{currMail.content}}</p>
      </div>
    </BasicCard>
  </div>
</template>

<script>
import BasicCard from "./BasicCard";
import MsgIn from "./MsgIn";
import MsgOut from "./MsgOut";
import Trash from "./Trash";
import EventBus from "@/event-bus";
import MenuOptions from "@/menuOption.js";

export default {
  name: "MainDetails",
  data() {
    return {
      component: undefined,
      currMail: false
    };
  },
  components: {
    BasicCard,
    MsgIn,
    MsgOut,
    Trash
  },
  props: {
    title: String,
    isExtraDetails: Boolean
  },
  mounted() {
    EventBus.$on("MENU_BUTTON_CLICKED", ({ id }) => {
      this.component = MenuOptions.filter(
        option => option.id === id
      )[0].component;
      this.currMail = false;
    });
    EventBus.$on("SHOW_MAIL", mail => {
      this.currMail = mail;
    });
  },
  computed: {
    mainDetailsHeight() {
      if (this.isExtraDetails === true) {
        return "height: 60vh;";
      } else {
        return "height: 93vh;";
      }
    }
  }
};
</script>

<style scoped>
.allScreen {
  height: 93vh;
}

.halfScreen {
  height: 60vh;
}

.extraDetails {
  height: 32vh;
  margin-top: 6px;
}
</style>
