<template>
  <div class="footer">
    <div class="subtitle">EL LABORATORIO AGUA DE JAVEL TIENE UN PUNTO DE VENTA.</div>
    <div class="title">CALLE 5 A 54 - 22, BARRIO COLÓN, BOGOTÁ</div>
    <div class="links">
      <li>Contact</li>
      <li>Instastore</li>
      <li>B2B</li>
      <li>Newsletter</li>
      <li>Terms</li>
      <li>Privacy</li>
      <li>Opening hours</li>
      <li>Press</li>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../../stylesheets/global.sass'

.footer
  +flex(1, 1)
  flex-direction: column
  padding: 50px
  background: #121212

.title
  color: white
  font-family: $title-font
  font-size: 38px
  text-align: center
  padding: 30px 0

.subtitle
  color: white
  letter-spacing: 3px
  font-size: 20px
  height: 60px

.links
  +flex(1, 1)
  flex-wrap: wrap
  font-size: 16px
  color: white

  li
    list-style: none
    padding: 5px 10px



</style>
