<template>
  <section class="section">
    <div class="container">
      <h1 class="title title--h1">
        This page is post with ID = {{ $route.params.id }}
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "PostPage",
};
</script>

<style scoped lang="scss"></style>
