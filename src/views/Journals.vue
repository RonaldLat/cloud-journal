<template>
  <div class="projects">
    <v-col>
      <div class="text-center ma-2">
        <!-- <v-btn
      dark
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn> -->
        <v-snackbar top v-model="snackbar">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-col>

    <h1 class="subheading grey--text">Journals</h1>

    <v-container class="my-5">
      <v-layout wrap class="my-5">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              color="grey"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              color="grey"
              @click="sortBy('date')"
              class="mx-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>calendar_today</v-icon>
              <span class="caption text-lowercase">By date</span>
            </v-btn>
          </template>
          <span>Sort projects due date</span>
        </v-tooltip>
      </v-layout>

      <v-card
        class="my-4"
        elevation="0"
        v-for="(journal, index) in journals"
        :key="journal.id"
      >
        <v-layout row :class="`pa-3 project ${journal.emotion}`">
          <v-flex>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header ripple="true" >
                  <v-layout >
                  <v-flex xs12 md6>
                    <div class="caption grey--text">Title</div>
                    <div >{{ journal.title }}</div>
                  </v-flex>

                  <v-flex sx2 sm4 md2>
                    <div class="right">
                      <v-chip
                        small
                        id="chips"
                        :class="`right white--text  caption my-2 ${journal.emotion}`"
                      >
                        {{ journal.emotion }}
                      </v-chip>
                    </div>
                  </v-flex>

                  <v-flex sx6 sm4 md2>
                    <div class="caption grey--text">Date</div>
                    <div>
                      {{ journal.date.toDate().toString().substr(4, 17) }}
                    </div>
                  </v-flex>
                  </v-layout>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-layout cols="12">
                    <v-spacer></v-spacer>
                    <v-layout cols="12">
                      <v-spacer></v-spacer>
                      <v-btn @click="deleteEntry(index)" icon>
                        <v-icon medium color="red">mdi-minus-circle </v-icon>
                      </v-btn>
                    </v-layout>
                  </v-layout>
                  {{ journal.content }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-flex>
        </v-layout>
        <v-divider inset></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from "@/fb";

export default {
  data() {
    return {
      journals: [],
      snackbar: false,
      text: `Journal deleted successfully`,
    };
  },

  computed: {
    myProjects: function () {
      return this.journals.filter((journal) => {
        // return journal.title === "Ronald Otieno";
        return journal;
      });
    },
  },

  methods: {
    sortBy(prop) {
      this.journals.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },

    deleteEntry: function (index) {
      let id = this.journals[index].id;
      this.$delete(this.journals, index);

      // console.log(id);

      db.firestore().collection("journal").doc(id).delete();

      db.firestore()
        .collection("journal")
        .onSnapshot((res) => {
          const changes = res.docChanges();

          changes.forEach((change) => {
            if (change.type === "removed") {
              this.snackbar=true
            }
          });
        });
    },
  },

  created() {
    db.firestore()
      .collection("journal")
      .onSnapshot((res) => {
        const changes = res.docChanges();

        changes.forEach((change) => {
          if (change.type === "added") {
            this.journals.push({
              ...change.doc.data(),
              id: change.doc.id,
            });
          }
        });
      });
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid lightseagreen;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid crimson;
}

#chips.calm {
  background: lightseagreen;
}
#chips.sad {
  background: blue;
}
#chips.happy {
  background: orange;
}
#chips.angry,
#chips.stressed {
  background: crimson;
}
</style>
