import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login3",
    component: () => import("../views/Login/Login3.vue")
  },
  {
    path: "/login3",
    name: "login3",
    component: () => import("../views/Login/Login3.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
