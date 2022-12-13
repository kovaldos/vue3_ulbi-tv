<template>
  <div class="wrapper">
    <main>
      <section class="section posts">
        <div class="container">
          <h1 class="title title--h1 section__title">Posts</h1>
          <div class="posts__row">
            <custom-btn class="posts__create-btn" @click="showModal"
              >Create post</custom-btn
            >
            <custom-select
              v-model="selectedSort"
              :options="sortOptions"
            ></custom-select>
          </div>
          <custom-modal v-model:show="modalVisible">
            <post-form @create="createPost" />
          </custom-modal>
          <post-list
            :posts="sortedPosts"
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
      selectedSort: "",
      sortOptions: [
        {
          value: "title",
          name: "By title",
        },
        {
          value: "body",
          name: "By text",
        },
      ],
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
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (e) {
        alert("Something is wrong. Please reload this page");
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
  },
  watch: {},
};
</script>

<style lang="scss">
@import "./scss/style";
.posts {
  &__row {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
