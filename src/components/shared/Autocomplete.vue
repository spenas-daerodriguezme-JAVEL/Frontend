<template>
  <div>
    <!-- <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
    /> -->
    <div style="position: relative;" v-bind:class="{ open: openSuggestion }">
      <input
        class="form-control"
        type="text"
        v-model="selection"
        @keydown.enter="enter"
        @keydown.down="down"
        @keydown.up="up"
        @input="change"
      />
      <ul class="dropdown-menu">
        <li
          v-for="(suggestion, index) in matches"
          v-bind:class="{ active: isActive(index) }"
          @click="suggestionClick(index)"
          :key="`index-${index}`"
        >
          <a href="#">{{ suggestion }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      current: 0,
      selection: '',
    };
  },

  props: {
    suggestions: {
      type: Array,
      required: true,
    },
    currentSelected: {
      type: String,
      required: true,
    },
  },

  computed: {
    // Filtering the suggestion based on the input
    matches() {
      return this.suggestions.filter((str) => {
        const lowerStr = str.toLowerCase();
        const lowerSelection = this.selection.toLowerCase();
        return lowerStr.indexOf(lowerSelection) >= 0;
      });
    },

    // The flag
    openSuggestion() {
      return this.selection !== '' && this.matches.length !== 0 && this.open === true;
    },
  },
  watch: {
    selection(val) {
      this.$emit('selectedValue', val);
    },

    currentSelected(val) {
      this.selection = val;
    },
  },
  methods: {
    // When enter pressed on the input
    enter() {
      this.selection = this.matches[this.current];
      this.open = false;
    },

    // When up pressed while suggestions are open
    up() {
      if (this.current > 0) this.current--;
    },

    // When up pressed while suggestions are open
    down() {
      if (this.current < this.suggestions.length - 1) this.current++;
    },

    // For highlighting element
    isActive(index) {
      return index === this.current;
    },

    // When the user changes input
    change() {
      if (this.open === false) {
        this.open = true;
        this.current = 0;
      }
    },

    // When one of the suggestion is clicked
    suggestionClick(index) {
      this.selection = this.matches[index];
      this.open = false;
    },
  },
};
</script>

<style scoped>

</style>
