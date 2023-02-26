<template>
  <section class="section posts">
    <div class="container">
      <h1 class="title title--h1 section__title">Posts</h1>
      <custom-input
        :model-valuel="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Search by title..."
      ></custom-input>
      <div class="posts__row">
        <custom-btn class="posts__create-btn" @click="showModal"
          >Create post</custom-btn
        >
        <custom-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
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
      <div v-intersection="loadMorePosts" class="observer"></div>
    </div>
  </section>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: { PostForm, PostList },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      loadMorePosts: "post/loadMorePosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
      // initFormValidate();
    },
    changeCurrentPage(pageNumber) {
      this.page = pageNumber;
    },
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      pageLimit: (state) => state.post.pageLimit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchPosts: "post/sortedAndSearchPosts",
    }),
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss">
@import "@/scss/style.scss";
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
