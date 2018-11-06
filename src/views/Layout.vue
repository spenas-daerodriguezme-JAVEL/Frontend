<template>
  <div class="layout">
    <base-menu></base-menu>    
    <router-view></router-view>
    <base-footer></base-footer>
  </div>
</template>

<script>
import Menu from '../components/shared/Menu.vue'
import Footer from '../components/shared/Footer.vue'

export default {
  components: {
    'BaseMenu': Menu,
    'BaseFooter': Footer
  }
}
</script>

<style>

</style>
