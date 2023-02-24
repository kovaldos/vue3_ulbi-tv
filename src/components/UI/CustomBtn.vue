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

<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
@import "@/scss/common/btn.scss";
</style>
