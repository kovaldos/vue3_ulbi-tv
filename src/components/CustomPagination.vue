<template>
  <div class="pagination">
    <div class="container">
      <ul class="pagination__list">
        <li
          class="pagination__list-item"
          v-for="pageNumber in totalPages"
          :key="pageNumber"
        >
          <custom-btn
            class="pagination__btn"
            :class="{
              'pagination__btn--current': currentPage === pageNumber,
            }"
            @click="changePageAndPageNumber(pageNumber)"
            >{{ pageNumber }}</custom-btn
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePageAndPageNumber(pageNumber) {
      this.currentPage = pageNumber;
      this.$emit("changePage", pageNumber);
    },
  },
};
</script>

<style lang="scss" scoped></style>
