<template>
  <div class="modal" :class="{ 'is-active': show }" v-if="show">
    <div class="modal__wrapper">
      <div class="modal__overlay" @click="closeCustomModal"></div>
      <div class="modal__content">
        <slot></slot>
        <custom-btn class="modal__close-btn" @click="closeCustomModal"
          >X</custom-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import CustomBtn from "./CustomBtn.vue";
import toggleMixin from "@/mixins/toggleMixin";
export default {
  components: { CustomBtn },
  name: "custom-modal",
  mixins: [toggleMixin],
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
@import "@/scss/common/modal.scss";
</style>
