<template>
  <div class="selector-list">
    <div class="selector__menu">
      <div class="selector__menu__item"
        v-for="(title, index) in options" :key="index"
        @click="currentTitle = title"
        :class="{'selector--selected': currentTitle == title}">
        <li>{{ title }}</li>
      </div>

    </div>
    <div class="selector__content"
      :class="{'selector--selected-content': currentTitle == activeOption}">
      <div class="title">{{ activeOption }}
        <div class="selector__back"
          @click="currentTitle = ''">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /> </svg>
        </div>
      </div>
      <div class="box--padding">
        <slot
          :name="activeOption"></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    options: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      currentTitle: '',
    };
  },
  mounted() {

  },
  beforeMount() {
    this.currentTitle = this.options[0];
  },
  computed: {
    activeOption() {
      return this.options[this.options.indexOf(this.currentTitle)];
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../stylesheets/global.sass'

.selector-list
  +flex(0, 0)


.selector__menu
  width: 30vw

.selector__menu__item
  padding: 2vw 4vw
  font-size:  1.5vw
  border: 1px solid rgba(202,158,159,.4)
  border-top: 0
  box-sizing: border-box
  font-weight: bolder
  cursor: pointer
  transition: 0.1s
  background: white
  position: relative

  li
    list-style: none
    transition: 0.3s

  &:hover > li
    transform: skewX(-10deg) translateX(7px)

.selector--selected
  color: white
  background: black

.selector__content
  width: 70vw
  white-space: pre-line
  transition: 3s

.box--padding
  padding: 4vw

.title
  background: #CA9E9F
  padding: 20px 50px
  font-weight: bolder
  font-size: 16px
  position: relative
  display: none

  .selector__back
    +squared(23px)
    position: absolute
    left: 10px
    top: 48%
    transform: translateY(-50%)
    cursor: pointer

@media (max-width: 800px)
  .selector-list
    flex-flow: row wrap

  .selector__menu
    width: 100vw

  .selector__menu__item
    font-size: 14px
    padding: 15px 30px

  .selector__content
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 100%
    z-index: 2
    transition: 0.3s

  .selector--selected-content
    left: 0
    background: white

  .title
    display: block

</style>
