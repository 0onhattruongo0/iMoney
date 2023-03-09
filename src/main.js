import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerGloblaComponent } from "@/utils/import";
import { projectAuth } from "./configs/firebase";

let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    registerGloblaComponent(app);
    app.use(router);
    app.mount("#app");
  }
});
