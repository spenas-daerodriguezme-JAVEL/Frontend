<template>
  <div class="landing">
    <div class="carousel__wrapper">
      <carousel
        :images="images"></carousel>
    </div>
  </div>
</template>

<script>
import Slider from '../components/ui/Slider.vue';
import Carousel from '../components/ui/Carousel.vue';

export default {
  components: {
    Slider,
    Carousel
  },
  data() {
    return {
      images: [
        {
          src: '../../static/fotoslanding/IMG_1214.jpg',
          position: {
            top: '15%',
            left: '10%'
          },
          title: 'Cuidado textil',
          subtitle: 'Una experiencia única.'
        },
        {
          src: '../../static/fotoslanding/IMG_1237.JPG',
          position: {
            top: '15%',
            right: '10%'
          },
          title: 'Fragancias',
          subtitle: 'Hay un aroma para cada lugar.'
        },
        {
          src: '../../static/fotoslanding/IMG_1279.jpg',
          position: {
            center: true
          },
          title: 'Perfumes',
          subtitle: 'Imagina enamorar a todos.',
          textColor: 'white'
        },
        {
          src: '../../static/fotoslanding/IMG_1282.JPG',
          position: {
            top: '10%',
            hcenter: true
          },
          imagePosition: {
            x: '50%',
            y: '20%'
          },
          title: 'Quita manchas',
          subtitle: 'Esta listo para cualquier desafío.'
        },
        {
          src: '../../static/fotoslanding/IMG_1283.jpg',
          position: {
            top: '10%',
            hcenter: true
          },
          title: 'Tratamiento de superficies',
          subtitle: 'Sin restregar y sin esfuerzo, como por arte de magia.'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>

.carousel__wrapper {
  height: 80vh;
}

.text--test {
  position: absolute;
  left: 50%;
  top: 10%;
  font-size: 32px;
  color: red;
}
</style>


