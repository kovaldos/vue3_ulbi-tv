<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "custom-btn",
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/mixins";
@import "@/scss/common/btn";
.posts__create-btn {
  margin: 2rem 0;
}
</style>
