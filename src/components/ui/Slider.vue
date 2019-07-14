<template>
  <div class="slider">
    <div class="slider__container">

      <div class="slider__item"
        v-for="(item, index) in image_data"
        :key="item.url"
        :class="{
          'slider__item--active': index == indexActive,
        }">
        <img :src="item.url" :style="`object-position: ${item.position}`">
      </div>

    </div>

    <div class="slider__controls slider__controls--right"
      @click="nextImage">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path opacity=".87" fill="none" d="M24 24H0V0h24v24z"/><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"/></svg>
    </div>
    <div class="slider__controls slider__controls--left"
      @click="prevImage">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path opacity=".87" fill="none" d="M24 24H0V0h24v24z"/><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"/></svg>
    </div>
  </div>  
</template>

<script>
import { TweenMax } from 'gsap/all'
import util from '../../util/index';

export default {
  props: {
    image_data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      intervalReference: null,
      indexActive: 0,
      indexBackground: 1,
      intervalReference: null
    }
  },
  beforeMount() {
    console.log(this.image_data);
  },
  mounted() {
    this.runSlider();
  },
  methods: {
    nextImage() {
      clearInterval(this.intervalReference);
      this.indexActive = ++this.indexActive % this.image_data.length;
      this.runSlider();
    },
    prevImage() {
      clearInterval(this.intervalReference);
      this.indexActive = util.mod(this.indexActive - 1, this.image_data.length);
      this.runSlider();
    },
    runSlider() {
      this.intervalReference = setInterval(() => {
        this.nextImage();
      }, 5000);
    }
  }

}
</script>

<style lang="sass" scoped>
@import '../../stylesheets/_mixins.sass'
@import '../../stylesheets/_variables.sass'

.slider
  width: 100%
  height: calc(100vh - 100px)
  overflow: hidden
  position: relative

.slider__container
  height: 100%

.slider__item
  flex-shrink: 0
  +squared(100%)
  position: absolute
  border: 1px solid black
  opacity: 0
  user-select: none

  img
    @extend %image-cover

.slider__item--active
  opacity: 1
  transition: opacity 2.5s

.slider__controls
  box-sizing: border-box
  +squared(45px)
  position: absolute
  background: rgba(white, 1)
  box-shadow: 0 1px 0px 1px rgba(black, 0.15)
  top: 50%
  transform: translateY(-50%)
  cursor: pointer
  padding: 5px
  +flex(1, 1)
  z-index: 10

  svg
    +squared(100%)

.slider__controls--right
  right: 0

.slider__controls--left
  left: 0

  svg
    transform: rotate(180deg)

</style>
