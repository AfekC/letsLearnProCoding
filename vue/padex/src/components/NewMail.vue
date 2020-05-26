<template>
  <v-form ref="form" class="mailCard">
    <v-text-field
      class="area"
      v-model="name"
      :rules="nameRules(name)"
      label="Full Name"
      maxlength="20"
      outlined
      required
    ></v-text-field>

    <v-divider></v-divider>

    <v-text-field
      class="area"
      v-model="title"
      :rules="[() => !!title || 'This field is required']"
      label="Title"
      maxlength="40"
      outlined
      required
    ></v-text-field>

    <v-divider></v-divider>

    <v-textarea
      class="area"
      v-model="content"
      :rules="[() => !!content || 'This field is required']"
      label="Message"
      maxlength="200"
      counter
      outlined
      required
    ></v-textarea>

    <v-card-actions>
      <v-btn v-if="allLigal" color="primary" text @click="submit">Submit</v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
import { mailOut, nextId } from "../data/mails";

export default {
  name: "NewMail",
  data() {
    return {
      mailOut,
      name: "",
      title: "",
      content: "",
      nextId
    };
  },
  computed: {
    allLigal() {
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

      if (!this.name.match(/[A-Za-z]+/)) return false;
      return true;
    }
  },
  methods: {
    nameRules(str) {
      if (str === undefined) return [];
      if (str.match(/[A-Za-z]+/)) return [];
      return ["Must have a letter"];
    },
    submit() {
      this.mailOut.push({
        id: this.nextId.id,
        title: this.title,
        sent: new Date(),
        from: "Me",
        content: this.content,
        favorite: false
      });
      this.nextId.id++;
      alert("The mail has sent");
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.mailCard {
  margin: 10vh;
  padding: 2vh;
}
.area {
  padding-top: 3vh;
}
</style>
