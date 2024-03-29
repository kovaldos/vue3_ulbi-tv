import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import components from "@/components/UI";
import directives from "@/directives";
import store from "@/store";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

// createApp(App).use(store).use(router).mount("#app");
app.use(router).use(store).mount("#app");
