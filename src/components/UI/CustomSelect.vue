<template>
  <select class="select" @change="changeOption">
    <option disabled selected value="">Sort by...</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "custom-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
.select {
  width: 100%;
  max-width: 200px;
  padding: 0.5rem;
  border-radius: 5px;
  border-color: $color-outrageous-orange;
  font-size: 1rem;
}
</style>
