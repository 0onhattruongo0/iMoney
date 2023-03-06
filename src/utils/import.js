import { defineAsyncComponent } from "vue";
export function registerGloblaComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth.vue"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default"))
  );
}
