<template>
  <v-form ref="form" class="mailCard">
    <v-card-actions>
      <v-checkbox v-model="toMySelf" label="שליחה לעצמי"></v-checkbox>
    </v-card-actions>

    <v-text-field
      :disabled="toMySelf"
      class="area"
      v-model="name"
      :rules="nameRules"
      label="אל"
      maxlength="20"
      outlined
      required
    ></v-text-field>

    <v-divider></v-divider>

    <v-text-field
      class="area"
      v-model="title"
      :rules="titleRules"
      label="כותרת"
      maxlength="40"
      outlined
      required
    ></v-text-field>

    <v-divider></v-divider>

    <v-textarea
      class="area"
      v-model="content"
      :rules="massageRules"
      label="הודעה"
      maxlength="200"
      counter
      outlined
      required
    ></v-textarea>

    <v-card-actions>
      <v-btn :disabled="!allLegal" color="primary" text @click="submit">שליחה</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NewMail",
  data() {
    return {
      toMySelf: false,
      name: "",
      title: "",
      content: "",
      massageRules: [() => !!this.content || "שדה חובה"],
      titleRules: [() => !!this.title || "שדה חובה"],
      nameRules: [
        () => {
          if (this.name && this.name.match(/[A-Za-zא-ת]+/)) return true;
          return "חייב להכיל לפחות תו אחד";
        }
      ]
    };
  },
  watch: {
    toMySelf() {
      if (this.toMySelf) {
        this.name = "Me";
      } else {
        this.name = "";
      }
    }
  },
  computed: {
    ...mapState(["nextMailId"]),
    allLegal() {
      if (
        this.name === undefined ||
        this.title === undefined ||
        this.content === undefined
      )
        return false;
      if (
        this.name.length === 0 ||
        this.title.length === 0 ||
        this.content.length === 0
      )
        return false;

      if (!this.name.match(/[A-Za-zא-ת]+/)) return false;
      return true;
    }
  },
  methods: {
    ...mapActions(["newMail", "newMailToMySelf"]),
    submit() {
      const mail = {
        id: this.nextMailId,
        title: this.title,
        sent: new Date(),
        from: "Me",
        content: this.content,
        mailEvent: { favorite: false, replied: false }
      };
      if (this.toMySelf) {
        this.newMailToMySelf(mail);
      } else {
        this.newMail(mail);
      }
      alert("ההודעה נשלחה");
      this.$refs.form.reset();
    },
    toMySelfClicked() {
      this.name = "Me";
      this.toMySelf = true;
    },
    cancleMySelfClicked() {
      this.name = "";
      this.toMySelf = false;
    }
  }
};
</script>

<style scoped>
.mailCard {
  padding: 5vh;
  padding-top: 0vh;
}
.area {
  padding-top: 2vh;
}
</style>
