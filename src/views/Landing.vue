<template>
  <div class="landing">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
        class="rel">
        <img
          slot="img"
          class="carrousel-item"
          src="../../static/fotoslanding/IMG_1214.jpg"
          alt="image slot">

        <div class="text--test">asdasdasd</div>
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="carrousel-item"
          src="../../static/fotoslanding/IMG_1237.jpg"
          alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="carrousel-item"
          src="../../static/fotoslanding/IMG_1279.jpg"
          alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="carrousel-item"
          src="../../static/fotoslanding/IMG_1282.jpg"
          alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="carrousel-item"
          src="../../static/fotoslanding/IMG_1283.jpg"
          alt="image slot">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import Slider from '../components/ui/Slider.vue';
export default {
  components: {
    Slider
  },
  data() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.carrousel-item {
  width: 100vw;
  height: calc(110vh - #{$menu-height});
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.text--test {
  position: absolute;
  left: 50%;
  top: 10%;
  font-size: 32px;
  color: red;
}
</style>


