<template>
  <div class="posts__wrapper" v-if="posts.length > 0">
    <h2 class="title title--h2 posts__title">Post list</h2>
    <ul class="posts__list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </ul>
  </div>
  <h2 class="title title--h2 posts__title posts__title--empty" v-else>
    Post list is empty
  </h2>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  emits: ["remove"],
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
.posts {
  &__title {
    margin: 0 0 2rem;
    &--empty {
      color: $color-harley-davidson-orange;
    }
  }
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
