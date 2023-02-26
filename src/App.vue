<template>
  <div class="wrapper">
    <VueHeader />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import VueHeader from "@/components/VueHeader.vue";

export default {
  components: { VueHeader },
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: 90px;
}
</style>
