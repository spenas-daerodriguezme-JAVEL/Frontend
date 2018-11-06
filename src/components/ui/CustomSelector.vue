<template>
    <div class="selected">
      <span style="text-transform: uppercase">{{ selectedOption == '' ? ' ' : selectedOption }}</span>

      <div class="selector__options" ref="selectorOptions" v-show="optionBoxActive">
        <div class="selector__options__close">
          <svg @click="optionBoxActive = !optionBoxActive" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </div>

        <div class="option"
          v-for="(option, index) in options"
          :key="index"
          :class="{'option--selected': value == option}"
          @click="select(option); optionBoxActive = !optionBoxActive">
            {{ option }}
        </div>
      </div>

      <div class="dark-screen" v-show="optionBoxActive"></div>

      <div class="controls" @click="optionBoxActive = !optionBoxActive">
        <svg class="material-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        <svg class="material-icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    options: {
      type: Array,
    },
    defaultOption: {
      type: String
    }
  },
  data() {
    return {
      optionBoxActive: false,
      selectedOption: ''
    }
  },
  beforeMount() {
    this.select(this.defaultOption)
  },
  methods: {
    run() {
      console.log("Run")
      console.log(`State: ${this.optionBoxActive}`)
      this.optionBoxActive = false
      console.log(`State: ${this.optionBoxActive}`)
    },
    log(data) {
      console.log(data)
    },
    select(option) {
      this.selectedOption = option
      this.$emit('input', this.selectedOption)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../stylesheets/global.sass'

.selected
  display: inline-block
  box-sizing: border-box
  height: 29px
  padding: 5px 20px
  position: relative
  font-weight: bold
  transition: .3s
  cursor: pointer
  min-width: 80px
  text-align: center
  font-size: 18px

.controls
  +flex(1, 1)
  top: 50%
  right: 1px
  height: 100%
  position: absolute
  flex-direction: column
  transform: translateY(-50%)

  svg
    width: 12px
    height: 12px
    fill: black

    &:first-child
      transform: rotate(-90deg)

    &:last-child
      margin-top: -5px
      transform: rotate(90deg)

.selector__options
  text-align: left
  overflow-x: hidden
  overflow-y: auto
  z-index: 1
  background: white
  position: absolute
  width: 300px
  max-height: 400px
  top: 50%
  left: 0
  transform: translate(-0%, -50%)
  box-shadow: 1px 1px 15px 1px rgba(black, .2)
  animation: fadeIn .3s
  font-weight: normal

.selector__options__close
  width: 100%
  text-align: right
  padding-top: 5px

  svg
    fill: black
    width: 25px
    height: 25px
    transition: .3s
    cursor: pointer

    &:hover
      transform: rotate(90deg)

.option
  position: relative
  width: 130%
  box-sizing: border-box
  padding: 15px 20px
  padding-left: 50px 
  transition: .15s
  left: -25px
  opacity: 0

  &:first-child
    border-top: 1px solid red

  &:hover
    transform: skewX(-10deg)

    &:not(.option--selected)
      background: lighten(#ADB39F, 13%)

.option--selected
  background: #ADB39F

.dark-screen
  background: rgba(black, .5)
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  animation: fadeIn 1s 

@for $i from 1 through 15
  .option:nth-child(#{$i})
    animation: slideIn .2s forwards
    animation-delay: ($i - 1) * 0.07s - 0.07s

@keyframes fadeIn
  from
    opacity: 0
  
  to
    opacity: 1


@keyframes slideIn
  from
    opacity: 0
    left: -100px

  to
    opacity: 1
    left: -25px

</style>
