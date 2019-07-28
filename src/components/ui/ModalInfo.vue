<template>
  <div class="modal-info"
    ref="modal"
    :class="{'modal-info--active': isActive}">
    <div class="modal-info__box"
      :class="{'modal-info__box--auto-size': autoSize}">
      <div class="title__menu">
        <slot
          v-if="useSlot"></slot>
        <span
          v-else>{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap/TweenMax';

export default {
  data() {
    return {
      isActive: false,
    }
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    useSlot: {
      type: Boolean
    },
    autoSize: {
      type: Boolean
    },
    duration: {
      type: Number,
      default: 2000
    },
  },
  methods: {
    triggerModal() {
      let modal = this.$refs.modal;
      this.isActive = true;
      TweenMax.from(modal, 1, {
        opacity: 0,
        clearProps: 'all'
      });

      setTimeout(() => {
        TweenMax.to(modal, 1, {
          opacity: 0,
        });

        setTimeout(() => {
          this.isActive = false;
        }, 990);
      }, this.duration);
    },
  }
}
</script>

<style lang="scss" scoped>

.modal-info {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(black, 0.3);
  z-index: 10;
  display: none;
}

.modal-info--active {
  display: block;
}

.modal-info__box {
  @include squared(300px);
  @extend %absoluteCentered;
  background: white;
  padding: 25px;
}

.modal-info__box--auto-size {
  width: auto;
  padding: 70px;
  height: auto;
}
</style>
