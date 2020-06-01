<template>
  <div>
    <BasicCard :title="title" :style="mainDetailsHeight" :haveFavoriteOption="currOption.haveFavoriteOption">
      <router-view></router-view>
    </BasicCard>
    <BasicCard v-show="currOption.isExtraDetails" title="מידע נוסף" class="extraDetails">
      <div v-show="mailToShow.id > 0">
        <h3>נושא: {{mailToShow.title}}</h3>
        <v-divider ma-2 />
        <h5>נשלח על ידי: {{mailToShow.from}}</h5>
        <p>תוכן: {{mailToShow.content}}</p>
      </div>
    </BasicCard>
  </div>
</template>

<script>
import BasicCard from "./BasicCard";
import { mapState, mapActions } from "vuex";

export default {
  name: "MainDetails",
  data() {
    return {
      currMail: false
    };
  },
  components: {
    BasicCard
  },
  computed: {
    ...mapState(["currOption", "mailToShow"]),

    mainDetailsHeight() {
      if (this.currOption == undefined) return "";
      if (this.currOption.isExtraDetails === true) {
        return "height: 60vh;";
      } else {
        return "height: 93vh;";
      }
    },
    title() {
      if (!this.currOption) return "";
      return this.currOption.title;
    }
  },
  watch: {
    currOption() {
      this.currMail = false;
      this.setMailToShow({});
    }
  },
  methods: {
    ...mapActions(["setMailToShow"])
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
