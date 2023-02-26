<template>
  <nav class="main-nav greetings__nav">
    <ul class="main-nav__list greetings__nav-list">
      <li class="main-nav__list-item">
        <router-link to="/posts" class="link main-nav__link">Posts</router-link>
      </li>
      <li class="main-nav__list-item">
        <router-link to="/store" class="link main-nav__link">Store</router-link>
      </li>
      <li class="main-nav__list-item">
        <router-link to="/composition" class="link main-nav__link"
          >Composition API</router-link
        >
      </li>
      <li class="main-nav__list-item">
        <router-link to="/about" class="link main-nav__link">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
};
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";
@import "@/scss/common/link.scss";
.main-nav {
  &__list {
    list-style: none;
    display: flex;
    &-item {
      &:not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  }
  &.router-link-active.router-link-exact-active {
    @include hover-focus {
      &::after {
        transform: scale(1);
      }
    }
  }
}
</style>
