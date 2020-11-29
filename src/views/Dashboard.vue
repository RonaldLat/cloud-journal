<template>
  <div class="home">
    <h1 class="subheading grey--text">Dashboard Page</h1>
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
              @click="sortBy('person')"
              class="ma-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person's name</span>
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

      <v-card class=" my-4 " elevation="0" v-for="journal in journals" :key="journal.title">
        <v-layout row :class="`pa-3 project ${journal.emotion}`">
          <v-flex >
            <v-expansion-panels   focusable>
              <v-expansion-panel >
                <v-expansion-panel-header ripple="true" >
                  <!-- {{journal.title}} -->
                  <v-flex xs12 md6>
                    <div class="caption grey--text">Title</div>
                    <div>{{ journal.title }}</div>
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
                    <div>{{ journal.date }}</div>
                  </v-flex>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
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
import db from "../fb";

export default {
  data() {
    return {
      journals: [
        // {
        //   title: "Zoom meeting",
        //   person: "Mike Oliver",
        //   due: "20th jan 2019",
        //   status: "complete",
        //   content: "lorem ipsum do ir  itj i jhiojhu  hiui 9jh"
        // },
        // {
        //   title: "Generate leads",
        //   person: "Mike Oliver",
        //   due: "1st jan 2020",
        //   status: "complete",
        //   content: "lorem ipsum do ir  itj i jhiojhu  hiui 9jh"
        // },
        // {
        //   title: "Contact the prospects",
        //   person: "Ronald Otieno",
        //   due: "12th jan 2019",
        //   status: "ongoing",
        //   content: "lorem isum do ir  itjh i jhiojhu  hiui 9jh"
        // },
        // {
        //   title: "Schedule a meeting",
        //   person: "Joe Biden",
        //   due: "6th jan 2019",
        //   status: "ongoing",
        //   content: "lorem psum do ir  ith i jhiojhu  hiui 9jh"
        // },
        // {
        //   title: "Propose value",
        //   person: "Donald Trump",
        //   due: "20th jan 2019",
        //   status: "overdue",
        //   content: "lorm ipsu do ir  itjh i jhiojhu  hiui 9jh"
        // },
        // {
        //   title: "Close the sale",
        //   person: "Chris Rock",
        //   due: "20th jan 2022",
        //   status: "complete",
        //   content: "lorm ipsum do ir  itjh i jhiojhu  hiui 9jh"
        // }
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.journals.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },

  created() {
    db.collection("journal").onSnapshot((res) => {
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
#chips.ongoing {
  background: orange;
}
#chips.angry {
  background: crimson;
}
</style>
