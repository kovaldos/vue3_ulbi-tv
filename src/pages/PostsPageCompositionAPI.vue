<template>
  <section class="section posts">
    <div class="container">
      <h1 class="title title--h1 section__title">
        This page was made using the Composition&nbsp;API
      </h1>
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
      <!--      <div v-intersection="loadMorePosts" class="observer"></div>-->
    </div>
  </section>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
// import axios from "axios";
// import { ref } from "vue";
import usePosts from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchPosts from "@/hooks/useSortedAndSearchPosts";

export default {
  components: { PostForm, PostList },
  data() {
    return {
      modalVisible: false,
      sortOptions: [
        {
          value: "id",
          name: "By ID",
        },
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
  setup(props) {
    console.log(props);
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchPosts } =
      useSortedAndSearchPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchPosts,
    };
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
