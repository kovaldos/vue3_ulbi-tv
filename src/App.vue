<template>
  <div class="wrapper">
    <main>
      <section class="section posts">
        <div class="container">
          <h1 class="title title--h1 section__title">Posts</h1>
          <custom-btn class="posts__create-btn" @click="showModal"
            >Create post</custom-btn
          >
          <custom-modal v-model:show="modalVisible">
            <post-form @create="createPost" />
          </custom-modal>
          <post-list
            :posts="posts"
            @remove="removePost"
            v-if="!isPostsLoading"
          />
          <page-loader v-else></page-loader>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";
import PageLoader from "./components/UI/PageLoader.vue";
export default {
  components: { PostForm, PostList, PageLoader },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostsLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.posts = response.data;
          this.isPostsLoading = false;
        }, 1000);
      } catch (e) {
        alert("Something is wrong. Please reload this page");
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss">
@import "./scss/style";
</style>
