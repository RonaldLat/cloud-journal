<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class=" pl-6">
        <v-col cols="12" class="text-center">
                  <strong class="subheading text-center"
          >Get connected with us on social networks!</strong
        >
        </v-col>

        <!-- <v-spacer></v-spacer> -->

        <v-col cols="12" class="text-center">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 " color="grey" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Journal</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  // components: {Footer},

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>