import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) next({ name: "login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      text: "Home",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "auth",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      text: "Profile",
      leading: false,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/report",
    name: "report",
    meta: {
      text: "report",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/report.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/budget",
    name: "budget",
    meta: {
      text: "budget",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/budget.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/transaction",
    name: "transaction",
    meta: {
      text: "transaction",
      leading: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "../views/new-transaction.vue"
      ),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
