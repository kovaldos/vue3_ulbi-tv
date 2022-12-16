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
        class="post__btn post__btn--del"
        @click="$emit('remove', post)"
        >delete</custom-btn
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
@import "@/scss/variables";
.post {
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid $color-outrageous-orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
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
  }
  &__btn {
    flex-shrink: 0;
  }
}
</style>
