<template>
  <div class="posts__form" data-validate>
    <form class="posts__form-form" action="#" @submit.prevent>
      <fieldset class="posts__form-fieldset">
        <legend class="posts__form-title">Create post</legend>
        <custom-input
          data-validate-type="text"
          id="id-post-title"
          type="text"
          name="post-title"
          placeholder="Enter post title..."
          v-model="post.title"
        />
        <custom-input
          data-validate-type="text"
          id="id-post-body"
          type="text"
          name="post-body"
          placeholder="Enter post text..."
          v-model="post.body"
        />
        <custom-btn class="posts__btn" type="submit" @click="createPost"
          >Create post</custom-btn
        >
      </fieldset>
    </form>
  </div>
</template>

<script>
import CustomInput from "./UI/CustomInput.vue";
export default {
  components: { CustomInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Math.floor(Math.random() * new Date());
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.posts {
  &__form {
    margin: 0 0 3rem;
    &-fieldset {
      padding: 1rem 0;
      border-radius: 0.5rem;
      border: 0;
    }
  }
}
.custom-input {
  padding: 0;
  margin: 0 0 1rem;
}
</style>
