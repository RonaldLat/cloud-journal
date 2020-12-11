<template>

  <v-app >
    
    <NavBar />

    <v-main>
      <v-content class="mx-4 mb-4">
        <router-view></router-view>
      </v-content>
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
// import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { NavBar },

  data: () => ({
    //
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
