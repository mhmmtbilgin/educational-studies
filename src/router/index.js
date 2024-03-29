import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../views/Homepage.vue";

Vue.use(VueRouter);

const routes = [{ path: "/", component: Homepage }];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
