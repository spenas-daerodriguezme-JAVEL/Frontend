<template>
  <div class="search">
    <div class="search__wrapper">
      <div
        @click="triggerSearch"
        class="search__trigger">Buscar</div>
      <transition name="trfade">
        <div
          v-show="showPlaceholder"
          @click="removePlaceholder"
          class="search__placeholder">
          <transition-group name="trfade" tag="div" class="search__placeholder-letter">
            <span
              v-for="(letter, idx) in message"
              :key="letter + idx"
            >{{ letter }}</span>
          </transition-group>
        </div>
      </transition>
      <input
        class="search__input"
        ref="search"
        type="text"
        v-model="search"
        @keypress.enter="triggerSearch"
      >
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap/all';
import UTIL from '../util/index';

export default {
  data() {
    return {
      search: '',
      showPlaceholder: true,
      message: [],
      typerTimers: [],
      caretTimer: null,
    };
  },
  mounted() {
    const effectTime = 130;
    const caretMultiplier = 4;
    const message = 'Busca lo que quieras ';
    const caretFn = () => {
      this.caretTimer = setInterval(() => {
        this.message.push('|');
        setTimeout(() => {
          this.message.pop();
        }, effectTime * caretMultiplier);
      }, effectTime * caretMultiplier * 2);
    };

    message.split('')
      .forEach((letter, idx) => {
        const timer = setTimeout(() => {
          this.message.push(letter);
        }, effectTime * idx);

        this.typerTimers.push(timer);
      });

    this.typerTimers.push(
      setTimeout(() => {
        caretFn();
      }, message.length * effectTime),
    );
  },
  methods: {
    removePlaceholder() {
      this.typerTimers.forEach((timer) => clearTimeout(timer));
      clearInterval(this.caretTimer);
      this.showPlaceholder = false;
      this.$refs.search.focus();
    },
    /*
      Triggers search if search term is different from
      empty string
    */
    triggerSearch() {
      if (this.search !== '') {
        this.$router.push({
          name: 'Catalog',
          query: {
            searchTerm: UTIL.removeAccents(this.search),
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.search {
  @include flex();
  height: calc(100vh - #{$menu-height});
  background: white;
}

.search__wrapper {
  width: 70%;
  position: relative;
}

.search__input {
  width: 100%;
  height: 50px;
  border: 0;
  border-bottom: 2px solid rgba($color-black-soft, .1);
  font-size: 29px;
  padding: 0 10px;
  font-family: 'Avenir';
}

.search__placeholder {
  @include squared(100%);
  display: flex;
  align-items: center;
  white-space: pre;
  position: absolute;
  top: 0;
  left: 0;
  cursor: text;
}

.search__trigger {
  @extend %absoluteCenterVertical;
  @extend %buttonBehavior;
  right: 10px;
  padding: 5px 20px;
  background: black;
  color: white;
  border-radius: 30px;
}

.search__placeholder-letter {
  @extend .search__input;
  height: auto;
  width: auto;
  border: 0;
  font-weight: bold;
  color: black;
}

</style>
