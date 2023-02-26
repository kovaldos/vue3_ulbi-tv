<template>
  <header class="header">
    <div class="container">
      <div class="header__logo" v-if="$route.path === '/'">
        <span>
          <img src="@/assets/img/logo.svg" alt="App logo" />
        </span>
      </div>
      <div class="header__logo" v-else>
        <router-link to="/">
          <img src="@/assets/img/logo.svg" alt="App logo" />
        </router-link>
      </div>
      <MainNav />
    </div>
  </header>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "VueHeader",
  components: { MainNav },
};
</script>

<style scoped lang="scss">
@import "@/scss/variables.scss";
.header {
  z-index: 5;
  position: fixed;
  width: 100%;
  min-height: 90px;
  padding: 1rem;
  background-color: $color-dark-orange;
  & .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    flex-shrink: 0;
    width: 35px;
    height: 35px;
  }
}
</style>
