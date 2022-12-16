<template>
  <div class="wrapper">
    <main>
      <section class="section posts">
        <div class="container">
          <h1 class="title title--h1 section__title">Posts</h1>
          <custom-input
            v-model="searchQuery"
            placeholder="Search by title..."
          ></custom-input>
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
            :posts="sortedAndSearchPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
          />
          <page-loader v-else></page-loader>
        </div>
      </section>
      <div class="pagination">
        <div class="container">
          <ul class="pagination__list">
            <li
              class="pagination__list-item"
              v-for="pageNum in totalPages"
              :key="pageNum"
            >
              <custom-btn
                class="pagination__btn"
                :class="{
                  'pagination__btn--current': page === pageNum,
                }"
                @click="changePage(pageNum)"
                >{{ pageNum }}</custom-btn
              >
            </li>
          </ul>
        </div>
      </div>
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
      searchQuery: "",
      page: 1,
      pageLimit: 10,
      totalPages: 0,
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
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.pageLimit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.pageLimit
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
    sortedAndSearchPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    page() {
      this.fetchPosts();
    },
  },
};
</script>

<style lang="scss">
// @import "@/scss/variables";
@import "./scss/style";
.posts {
  &__row {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
  }
}
.posts__create-btn {
  margin: 2rem 0;
}
.pagination {
  &__list {
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    &-item {
      margin-right: 10px;
    }
  }
  &__btn {
    &.btn {
      width: 2rem;
      height: 2rem;
      padding: 5px;
      font-size: 1rem;
      line-height: 1.2;
      background-color: $color-hawkes-blue;
    }
    &--current {
      &.btn {
        background-color: $color-outrageous-orange;
      }
    }
  }
}
</style>
