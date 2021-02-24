<template>
  <div class="landing">
    <div class="carousel__wrapper">
      <carousel :images="images"></carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/ui/Carousel.vue";

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      images: [
        {
          src: "../../static/fotoslanding/IMG_1214.jpg",
          position: {
            top: "8%",
            left: "10%",
          },
          title: "Jabones y detergentes",
          busLine: "Jabones y detergentes ",
        },
        {
          src: "../../static/fotoslanding/IMG_1237.JPG",
          position: {
            top: "20%",
            right: "10%",
          },
          title: "Fragancias",
          busLine: "Perfumes y preparados de tocador",
        },
        {
          src: "../../static/fotoslanding/IMG_1279.jpg",
          position: {
            center: true,
          },
          title: "Perfumes y preparados de tocador",
          textColor: "white",
          busLine: "Perfumes y preparados de tocador",
        },
        {
          src: "../../static/fotoslanding/IMG_1282.JPG",
          position: {
            top: "10%",
            hcenter: true,
          },
          imagePosition: {
            x: "50%",
            y: "20%",
          },
          title: "Quita manchas",
          busLine: 'Jabones y detergentes ',
        },
        {
          src: "../../static/fotoslanding/IMG_1283.jpg",
          position: {
            top: "10%",
            hcenter: true,
          },
          title: "Preparados para limpiar y pulir",
          busLine: "Preparados para limpiar y pulir",
        },
      ],
    };
  },
  computed: {
    test: {
      get() {
        return this.$store.state.test;
      },
      set(value) {
        this.$store.state.test = value;
      },
    },
  },
  methods: {
    go() {
      this.$router.push("");
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel__wrapper {
  height: calc(100vh - #{$menu-height});
}

.text--test {
  position: absolute;
  left: 50%;
  top: 10%;
  font-size: 32px;
  color: red;
  font-style: oblique;
}
</style>
