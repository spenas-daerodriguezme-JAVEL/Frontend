<template>
  <div class="wrapper">
    <div class="message">
      <div class="main-message">
        {{ message }}
      </div>
        
    <div class="btn-group">
      <div class="btn btn-s"
        @click="triggerResponse(true)">Confirmar</div>
      <div class="btn btn-s btn--white"
        @click="triggerResponse(false)">Rechazar</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '¿Confirmar acción?' 
    },
    activeModal: {
      type: Boolean
    }
  },
  data() {
    return {
      activeModalLocal: ''
    }
  },
  beforeMount() {
    this.activeModalLocal = this.activeModal;
  },
  watch: {
    activeModalLocal(newValue, oldValue) {
      this.$emit('update:activeModal', this.activeModalLocal);
    },
    activeModal() { 
      this.activeModalLocal = this.activeModal;
    }
  },
  methods: {
    triggerResponse(response) {
      this.$emit('modalResponse', response);
      this.$emit('update:activeModal', false);
    }
  },
}
</script>

<style lang="sass" scoped>
@import '../../stylesheets/global.sass'

.wrapper
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  z-index: 100
  position: fixed
  background: rgba(black, 0.8)

.message
  background: white
  @extend %absolute-centered
  padding: 20px

.main-message
  @extend %title
  font-size: 28px
  text-align: center
  margin-bottom: 50px

.btn-group
  +flex(1, 1)
  justify-content: space-around

.btn-s
  color: white
  width: 90px
  margin: 0 5px
  border: 2px solid black 

  &:hover
    color: black

.btn-close
  width: 25px
  height: 25px
  margin-left: auto

  svg
    cursor: pointer
    fill: black
    width: 100%
    height: 100%
    transition: 0.2s

    &:hover
      transform: rotate(90deg)


.btn--white
  color: black
  background: white

  &:hover
    color: white
    background: black

</style>
