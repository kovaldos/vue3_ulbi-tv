<template>
  <li class="posts__list-item post">
    <div class="post__content">
      <strong>{{ post.id }}</strong>
      <div class="post__heading">
        <strong>Title: </strong>
        <h3 class="title title--h3 post__title">{{ post.title }}</h3>
      </div>
      <div class="post__body">
        <strong>Description: </strong>
        <span>{{ post.body }}</span>
      </div>
    </div>
    <div class="post__btns">
      <custom-btn
        class="post__btn post__btn--open"
        @click="this.$router.push(`/posts/${post.id}`)"
        >Open</custom-btn
      >
      <custom-btn
        class="post__btn post__btn--del"
        @click="$emit('remove', post)"
        >Delete</custom-btn
      >
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.post {
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid $color-outrageous-orange;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  @include vp-768 {
    flex-direction: row;
  }
  &:not(:last-of-type) {
    margin: 0 0 1rem;
  }
  &__heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1rem;
  }
  &__title {
    color: $color-outrageous-orange;
  }
  &__content {
    flex: 1 1 auto;
    @include vp-768 {
      flex-grow: 10;
      flex-shrink: 10;
    }
  }
  &__btns {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-shrink: 0;
    @include vp-768 {
      width: auto;
    }
  }
}
</style>
