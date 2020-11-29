<template>
  <div class="team">
    <h1 class="subheading grey--text">Team Page</h1>

    <v-container my-5 class="">
      
      <v-layout wrap row>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card  class="text-sm-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar  size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="">
              </v-avatar>
            </v-responsive>

            <v-card-text>
              <div class="subheading"> {{person.name}} </div>
              <div class="grey--text"> {{person.role}} </div>
            </v-card-text>

            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
              </v-btn>
              <span class="ml-2">Message</span>
            </v-card-actions>
            
            </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return {
      team: [
        {name: 'The Beasts', role: 'Web designer', avatar: '/avatar1.png'},
        {name: 'Mad Max', role: 'Database Admin',avatar: '/avatar2.png'},
        {name: 'Ron Oti', role: 'Master planner',avatar: '/avatar3.png'},
        {name: 'Rotie', role: 'Web designer',avatar: '/avatar4.png'},
        {name: 'Black Rose', role: 'Web designer',avatar: '/avatar5.png'},
      ]
    }
  }
};
</script>
