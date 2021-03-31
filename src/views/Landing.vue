<template>
  <div class="landing">
    <div class="carousel__wrapper">
      <carousel :images="images" :auto="true"></carousel>
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
          src: "https://storage.googleapis.com/thechemcie/Landing%20divisi%C3%B3n%20agroqu%C3%ADmicos.webp",
          position: {
            top: "10%",
            left: "10%",
          },
          title: "Agroquímicos",
          busLine: "Agroquímicos",
        },
        {
          src: "https://storage.googleapis.com/thechemcie/Landing%20divisi%C3%B3n%20fragancias.webp",
          position: {
            top: "10%",
            right: "10%",
          },
          title: "Fragancias",
          busLine: "Fragancias",
        },
        {
          src: "https://storage.googleapis.com/thechemcie/Landing%20divisi%C3%B3n%20industrial.webp",
          position: {
            top: "10%",
            hcenter: true,
          },
          title: "Industriales",          
          busLine: "Industriales",
        },
        {
          src: "https://storage.googleapis.com/thechemcie/Landing%20divisi%C3%B3n%20perfumer%C3%ADa.webp",
          position: {
            top: "10%",
            hcenter: true,
          },
          imagePosition: {
            x: "50%",
            y: "20%",
          },
          title: "Perfumería",
          busLine: 'Fragancias',
        },
        {
          src: "https://storage.googleapis.com/thechemcie/Landing%20divisi%C3%B3n%20dom%C3%A9stica.webp",
          position: {
            top: "10%",
            hcenter: true,
          },
          title: "Domésticos",
          busLine: "Domésticos",
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
