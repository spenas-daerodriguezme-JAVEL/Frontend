<template>
  <div class="carousel" ref="carousel">
    <div class="carousel__container carousel--transition" ref="carousel__container">
      <div class="carousel__item"
        ref="carousel__item"
        v-for="image in images"
        :style="{'width': `${itemSize}px`}"
        :key="image.title">
        <img :src="image.src" :alt="image.title" 
          :style="{'object-position': image.imagePosition ? `${image.imagePosition.x} ${image.imagePosition.y}` : '50% 50%'}">

        <div class="carousel__description"
          :class="{
            'carousel__description--white-text': image.textColor, 
            'carousel__description--centered': image.position.center,
            'carousel__description--hcenter': image.position.hcenter
          }"
          :style="{ 'top': image.position.top, 'left': image.position.left, 'right': image.position.right }">
          <div class="text--bold text--fs38">{{ image.title }}</div>
          <br/>
          <div
            style="margin-bottom: 10px;" 
            class="text--fs25">{{ image.subtitle }}</div>
          <a href="">Ver en el catálogo</a>
        </div>
      </div>
    </div>
   
    <div class="carousel__controls carousel__controls--left"
      @click="translateImage(1)">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"> <g> <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
    </div>
    <div class="carousel__controls carousel__controls--right"
      @click="translateImage(-1)">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"> <g> <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { TweenMax } from 'gsap/TweenMax';

const TRANSITION_TIME = 700;
const SLIDE_TIME = 3000;

export default {
  data() {
    return {
      itemSize: 0
    }
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    auto: {
      type: Boolean
    }
  },
  mounted() {
    let container = this.$refs['carousel__container'];

    this.itemSize = this.$refs.carousel.getBoundingClientRect().width;
    container.style.left = `-${this.itemSize}px`;

    window.addEventListener('resize', () => {
      try {
        this.itemSize = this.$refs.carousel.getBoundingClientRect().width;
        container.style.left = `-${this.itemSize}px`;
      } catch (error) { }
    });

    if (this.auto) {
      setInterval(() => {
        this.translateImage(-1);
      }, SLIDE_TIME);
    }
  },
  methods: {
    translateImage: _.throttle(function(direction) {
      let carouselSize = this.$refs['carousel'].getBoundingClientRect().width;
      let container = this.$refs['carousel__container'];

      container.classList.add('carousel--transition');
      container.style.transform = `translateX(${carouselSize * direction}px)`;
      let items = container.querySelectorAll('.carousel__item')
      let firstItem = items[0];
      let lastItem = items[items.length - 1];

      setTimeout(() => {
        container.classList.remove('carousel--transition');
        container.style.transform = `translateX(0px)`;

        if (direction == 1) {
          container.insertBefore(lastItem, firstItem);
        } else {
          container.appendChild(firstItem);
        }
      }, TRANSITION_TIME);
    }, TRANSITION_TIME),
  }
}
</script>

<style lang="scss" scoped>

.carousel {
  @include squared(100%);
  position: relative;
}

.carousel__container {
  display: flex;
  position: relative;
  width: 10000px;
  height: 100%;
  top: 0;
}

.carousel__item {
  height: 100%;
  font-size: 80px;
  text-align: center;
  position: relative;

  img {
    @extend %imageCover;
  }
}

.carousel__description {
  position: absolute;
  font-size: 18px;
  text-align: center;
  line-height: 23px;
  white-space: pre-line;

  a {
    text-decoration: none;
    padding-top: 50px;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}

.carousel__description--white-text {
  color: white;
}

.carousel__description--centered {
  @extend %absoluteCentered;
}

.carousel__description--hcenter {
  left: 50%;
  transform: translateX(-50%);
}

.carousel--transition {
  transition: 0.6s ease-in-out;
}

.carousel__controls {
  @include squared(60px);
  @extend %absoluteCenterVertical;
  padding: 10px;
  cursor: pointer;
}

$control-distance: 20px;
.carousel__controls--left {
  left: $control-distance; 
}

.carousel__controls--right {
  right: $control-distance; 

  svg {
    transform: rotate(180deg);
  }
}

@media (max-width: 963px) {
  .text--bold {
    line-height: 33px;
  }
}

@media (max-width: 600px) {
  .text--fs25 {
    display: none;
  }
}

</style>
