<template>
  <v-row justify="center"  >

    <v-col>
      <div class="text-center ma-2">
    <!-- <v-btn
      dark
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn> -->
    <v-snackbar
      top
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
    </v-col>
    
    <v-col cols="12" md="10" lg="8" >
      <v-card class="main-container "  shaped elevation="2" >
        <v-card-title > 
          <span class="headline ">Write new journal</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-col cols="12">
                <v-text-field
                  label="Title"
                  outlined
                  clearable
                  v-model="title"
                  prepend-icon="edit"
                  :rules="inputRules"
                  spellcheck="false"
                ></v-text-field>
              </v-col>
              <v-col fluid cols="12">
                <v-textarea
                  clearable
                  outlined
                  auto-grow
                  rows="6"
                  row-height="30"
                  label="Content"
                  v-model="content"
                  prepend-icon="create"
                  :rules="inputRules"
                  spellcheck="false"
                ></v-textarea>
              </v-col>

              <v-col cols="12"> </v-col>



              <v-col cols="12">
                <v-autocomplete
                  :items="emotions"
                  clearable
                  outlined
                  item-value="string"
                  item-text="string"
                  label="Emotion"
                  v-model="emotion"
                  value: string
                  prepend-icon="edit"
                  :rules="inputRules"

                ></v-autocomplete>
              </v-col>

              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  class="teal darken-3"
                  color="white darken-1"
                  text
                  @click="submit()"
                  :loading="loading"
                >
                  Add
                </v-btn>
                <v-btn
                  class="red lighten-1 mx-3"
                  color="white darken-1"
                  text
                  @click="dialog = false"
                >
                  close
                </v-btn>
              </v-col>
            </v-form>
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
      </v-card>
      </v-col>
  </v-row>
</template>

<script>
import moment from "moment";
import db from "../fb";

export default {
  data() {
    return {
      snackbar: false,
      text: `Journal added successfully`,

      dialog: false,
      title: "",
      content: "",
      emotion: "",
      // date : firebase.database.ServerValue.TIMESTAMP,
      // date: new Date().toISOString().substr(0, 10),
      date: "",
      //   date: null,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      emotions: [
        "happy",
        "sad",
        "calm",
        "confused",
        "cheerful",
        "resentful",
        "jealous",
        "stressed",
        "motivated",
        "jovial",
        "grateful",
      ],
    };
  },

  computed: {
    DateFormatted() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    },
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        let newJournal = {
          title: this.title,
          content: this.content,
          // date: moment(this.date).format("Do MM YYYY"),
          date: db.firestore.FieldValue.serverTimestamp(),
          emotion: this.emotion,
        };

        db.firestore()
          .collection("journal")
          .add(newJournal)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            // this.$emit("projectSnack");
            this.snackbar=true;
          this.$refs.form.reset();

          });
      }
    },
  },
};
</script>

<style  scoped>
</style>