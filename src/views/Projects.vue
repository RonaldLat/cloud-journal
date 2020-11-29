<template>
  <div class="projects ">
    <h1 class="subheading grey--text">Projects Page</h1>

    <v-container my-5 class=" xs-12 sm-12 ">
      <!-- accordion or popup -->
      <v-expansion-panels accordion class="sm-12 ">
        <v-expansion-panel
          v-for="(project, i) in myProjects"
          :key="i"
          hide-actions
          class="my-2 "
        >
          <v-expansion-panel-header>
            <v-row class="spacer " no-gutters>
              <v-col class="text-wrap " align="left" cols="12">
                <strong v-html="project.title"></strong>
                <v-spacer />
                <!-- <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 ml-0 black--text"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip> -->
              </v-col>

              <v-col v-if="project.excerpt" class="grey--text  ">
                {{ project.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text> {{ project.content }} </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'

export default {
  data (){
    return {
      journals: []
    }
  },

  computed : {
    myProjects: function() {
      return this.journals.filter(journal => {
        // return journal.title === "Ronald Otieno";
        return journal
      })
      
    }
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
