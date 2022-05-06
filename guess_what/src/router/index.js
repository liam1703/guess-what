import { createRouter, createWebHistory } from "vue-router";
// import Login from "../views/Login.vue";
import Game from "../views/Game.vue";

const routes = [
  {
    path: "/",
    name: "Game",
    component: Game,
    // need to create this view
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
