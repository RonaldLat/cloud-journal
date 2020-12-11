<template>
  <div>
    <!-- <v-navigation-drawer app permanent class="grey" expand-on-hover>
      <v-list>


        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title text-center">
              Cloud Journal
            </v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <div class="d-flex justify-left align-center px-2 my-4">
        <v-spacer />

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
    </v-navigation-drawer> -->

    <v-app-bar color="deep-grey accent-4" dark prominent app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-toolbar-title id="tb" class="my-auto  text-left h1  font-weight-light"
        >Cloud Journal</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-text</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>


    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="grey darken-4" dark>
      <v-list-item>
        <!-- <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title>Lat Journal</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          link
          v-for="item in links"
          :key="item.title"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import Popup from "./Popup";
export default {
  // components: { Popup },
  data() {
    return {
      drawer: null,
      snackbar: false,
      text: `Project added successfully`,

      links: [
        { icon: "dashboard", text: "Add new ", route: "/" },
        { icon: "folder", text: "Journals", route: "/journals" },
        // { icon: "person", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>

<style  scoped>
#tb {
  width: 100%;
  /* font-size: 2.5rem; */
}
</style>