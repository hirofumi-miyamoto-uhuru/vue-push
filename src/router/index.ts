import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: { msg: "push noti in Vite + Vue" }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: { msg: "login" }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
