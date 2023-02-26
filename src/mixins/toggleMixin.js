export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeCustomModal() {
      this.$emit("update:show", false);
    },
  },
};
