import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import PostsPage from "@/pages/PostsPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostPage from "@/pages/PostPage.vue";
import PostsPageWithStore from "@/pages/PostsPageWithStore.vue";
import PostsPageCompositionAPI from "@/pages/PostsPageCompositionAPI.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/posts", component: PostsPage },
  { path: "/about", component: AboutPage },
  { path: "/posts/:id", component: PostPage },
  { path: "/store", component: PostsPageWithStore },
  { path: "/composition", component: PostsPageCompositionAPI },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
