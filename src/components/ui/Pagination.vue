<template>
  <div class="pagination">
    <div class="page">
      <slot></slot>
    </div>

    <div class="page-controls">
      <div @click="prevPage" class="left-control control__item">
        <svg style="transform: rotate(180deg)" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      <div
        class="control__item"
        v-for="val in paginationOptions"
        :key="val"
        @click="setPage(val)"
        :class="{'control__item--active': val === currentPage}"
      >
        <b>{{ val }}</b>
      </div>

      <div @click="nextPage" class="right-control control__item">
        <svg viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'currentPage',
    event: 'update',
  },
  props: {
    pages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.pages) this.currentPage++;
      this.$emit('update', this.currentPage);
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
      this.$emit('update', this.currentPage);
    },
    setPage(page) {
      this.currentPage = page;
      this.$emit('update', this.currentPage);
    },
  },
  computed: {
    paginationOptions() {
      let uniques;
      if (this.currentPage === 1 || this.currentPage === this.pages) {
        uniques = new Set([1, this.pages]);
      }
      else {
        uniques = new Set([1, this.currentPage, this.currentPage + 1, this.pages]);
      }
      return [...uniques];
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../stylesheets/global.sass'

.pagination
  position: relative

.page-controls
  +flex(1, 1)
  margin: 50px 0

  .control__item
    +flex(1, 1)
    +squared(45px)
    margin: 0 2px
    cursor: pointer
    border-bottom: 1px solid rgba(black, .25)

    &:hover
      border-bottom: 1px solid black

    svg
      +squared(15px)
      fill: black

  .control__item--active
    border-bottom: 1px solid black
</style>
