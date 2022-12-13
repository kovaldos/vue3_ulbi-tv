<template>
  <div class="custom-input" :data-validate-type="dataValidateType">
    <label>
      <input
        :type="type"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateInput"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "custom-input",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    placeholder: {
      type: String,
      required: false,
    },
    dataValidateType: {
      type: String,
      required: false,
    },
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
@import "@/scss/mixins";
@import "@/scss/common/custom-input";
</style>
