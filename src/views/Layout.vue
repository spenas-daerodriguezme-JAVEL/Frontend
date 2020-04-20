<template>
  <div class="layout">
    <base-menu></base-menu>
    <dir class="content" :style="{'margin-bottom': contentMargin}">
      <transition name="trfade">
        <div v-show="isLoading" class="content--loading"></div>
      </transition>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </dir>
    <base-footer ref="footer"></base-footer>
  </div>
</template>

<script>
import Menu from "../components/shared/Menu.vue";
import Footer from "../components/shared/Footer.vue";

export default {
  data() {
    return {
      margin: 0,
      transitionName: "",
      isLoading: false
    };
  },
  computed: {
    contentMargin() {
      return `${this.margin}px`;
    }
  },
  components: {
    BaseMenu: Menu,
    BaseFooter: Footer
  },
  mounted() {
    const { $el: footer } = this.$refs.footer;
    this.margin = footer.offsetHeight;
  },
  watch: {
    $route(to, from) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);

      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  z-index: 1;
  background: white;
  position: relative;
  margin: 0;
  padding: 0;
}

.content--loading {
  @include squared(100%);
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(black, 0.5);
  z-index: 2;
}

footer {
  position: relative;
}
</style>
