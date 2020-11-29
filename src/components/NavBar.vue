<template>
  <div>
    <!-- <v-toolbar flat class="blue" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span class="black--text">Lat</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar> -->

    <!-- <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list dense rounded>
        <v-list-item v-for="item in links" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

<!-- adding snackbar -->
    <div class="text-center ma-2" >
      <v-snackbar v-model="snackbar" timeout="4000"  top>
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
<!-- snackbar -->

    <v-navigation-drawer
      app
      permanent
      class="light-green accent-2"
      expand-on-hover
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="@/assets/lat2-smaller.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> Ronald Otieno </v-list-item-title>
            <v-list-item-subtitle>ronnlats@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <div class="d-flex justify-left align-center px-2 my-4">
        <Popup @projectSnack="snackbar = true" />
        <v-spacer />

        <v-menu offset-y transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="" dark v-bind="attrs" v-on="on"> Menu </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in links" :key="i" :to="item.route">
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item
          link
          v-for="item in links"
          :key="item.title"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title> {{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Popup from "./Popup";
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      snackbar: false,
      text: `Project added successfully`,

      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>