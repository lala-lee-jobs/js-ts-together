import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/counter-js",
    name: "counter-js",
    component: () =>
      import(/* webpackChunkName: "counter-js" */ "../views/CounterJS.vue")
  },
  {
    path: "/counter-ts",
    name: "counter-ts",
    component: () =>
      import(/* webpackChunkName: "counter-ts" */ "../views/CounterTS.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
