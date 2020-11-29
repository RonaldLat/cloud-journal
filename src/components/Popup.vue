<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey darken-3" dark v-bind="attrs" v-on="on">
          Add new
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-col cols="12">
                <v-text-field
                  label="Title*"
                  v-model="title"
                  prepend-icon="folder"
                  required
                  :rules="inputRules"
                  spellcheck="false"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="content"
                  v-model="content"
                  prepend-icon="create"
                  :rules="inputRules"
                  spellcheck="false"
                ></v-text-field>
              </v-col>

              <v-col cols="12"> </v-col>



              <!-- <div class="text-center">
                <v-menu offset-y top transition="slide-x-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                      Emotions
                    </v-btn>
                  </template>
                  <v-radio-group v-model="emotion">
                    <v-radio
                      v-for="emotion in emotions"
                      :key="emotion"
                      :label="emotion"
                      :value="emotion"
                    ></v-radio>
                  </v-radio-group>
                </v-menu>
              </div> -->

              <v-col cols="12">
                <v-autocomplete
                  :items="emotions"
                  item-value="string"
                  item-text="string"
                  label="Emotion"
                  v-model="emotion"
                  value: string
                  prepend-icon="emoticon"
                ></v-autocomplete>
              </v-col>

              <!-- date picker column -->

              <!-- <v-col cols="12">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="DateFormatted"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col> -->

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
                  class="pink lighten-2 mx-3"
                  color="white darken-1"
                  text
                  @click="dialog = false"
                >
                  close
                </v-btn>
              </v-col>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import moment from "moment";
import db from "../fb";

export default {
  data() {
    return {
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

        const newJournal = {
          title: this.title,
          content: this.content,
          // date: moment(this.date).format("Do MM YYYY"),
          date:  db.FieldValue.serverTimestamp(),
          emotion: this.emotion,
        };

        db.collection("journal")
          .add(newJournal)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectSnack");
          });
      }
    },

   
  },
};
</script>