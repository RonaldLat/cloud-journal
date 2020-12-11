import Vue from "vue";
import VueRouter from "vue-router";
import Addjournal from "../views/Addjournal.vue";
import Journals from "../views/Journals.vue";
import Team from "../views/Team.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "addjournal",
    component: Addjournal
  },
  {
    path: "/journals",
    name: "Journals",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Journals
  },

  {
    path: "/team",
    name: "team",
    component: Team
  }
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
