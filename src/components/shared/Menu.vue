<template>
  <div class="menu-wrapper">
    <div class="menu">
      <div class="bar"></div>
      <div class="burguer-menu" id="burguer">
        <div class="b1"></div>
        <div class="b2"></div>
        <div class="b3"></div>
      </div>
      <div class="menu-content">
        
        <li>
          <router-link tag="a" :to="{name: 'Catalog'}">Catálogo Inteligente</router-link>
        </li>
        <li><a href="#">Usuarios</a></li>
      </div>
      <div class="logo">
        <img src="../../assets/logo.png" alt=""  id="logo-base">
        <div class="logo_title" :class="{'loading': isLoading}">AGUA DE JAVEL</div>
        <img src="../../assets/logo_badge.png" alt="" class="disabled" id="logo-contrast">
      </div>
      <div class="menu-content">
        <li>
          <svg class="search__button" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </li>
        <li><a href="#">Nosotros</a>
          <div class="submenu" style="background: #A997B6">
            <div class="sb-title">Nosotros</div>
            <ul>
              <li><router-link tag="a" :to="{name: 'Motto'}"> Misión </router-link></li>
              <li>Contactenos</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
        </li>
        
        <li><a href="#">Cuenta</a>
          <div class="submenu" style="background: #CF989C">
            <div class="sb-title">Cuenta</div>
          </div>
        </li>
        <li>
          <a href="#">
            <div class="shopping-cart">
              <div class="shopping-cart__items">{{ cartProducts.length }}</div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.195 426.195" style="enable-background:new 0 0 426.195 426.195;" xml:space="preserve"><g><g><path d="M213.098,30c23.158,0,41.998,18.84,41.998,41.997h30C285.096,32.298,252.798,0,213.098,0c-39.699,0-71.997,32.298-71.997,71.997h30C171.101,48.84,189.941,30,213.098,30z"/><path d="M383.013,409.543l-19.955-308.686c-0.455-7.938-7.024-14.143-14.976-14.143H78.095c-7.951,0-14.521,6.205-14.976,14.143l-20,309.483c-0.236,4.119,1.236,8.156,4.07,11.156c2.833,3,6.778,4.699,10.905,4.699h309.987c0.008,0,0.014,0,0.02,0c8.284,0,15-6.715,15-15C383.102,410.639,383.071,410.086,383.013,409.543z M183.578,134.397c0,10.487-8.501,18.988-18.988,18.988c-10.487,0-18.988-8.501-18.988-18.988V123.59c0-10.487,8.501-18.988,18.988-18.988c10.487,0,18.988,8.501,18.988,18.988V134.397z M280.595,134.397c0,10.487-8.501,18.988-18.988,18.988s-18.988-8.501-18.988-18.988V123.59c0-10.487,8.501-18.988,18.988-18.988s18.988,8.501,18.988,18.988V134.397z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </div>
          </a>
          <div class="submenu" style="background: #98B9CC">
            <div class="sb-title">Carrito</div>
            <cart></cart>
          </div>
        </li>
      </div>

      <div class="search-box">
        <div class="search-box__input">
          <div class="search-box__errase">BORRAR</div>
          <input type="text" id="search_input">
        </div>
      </div>
    </div>

    <div class="menu" style="position: static"></div>

    <div class="menu-mobile">
      <div class="mb-header">Menú</div>
      <li><a href="">Item 1</a></li>
      <li><a href="">Item 2</a></li>
      <li><a href="">Item 3</a></li>
      <li><a href="">Item 4</a></li>
      <li><a href="">Item 5</a></li>
    </div>
    <div class="menu-action"></div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cart from './Cart.vue'
import _ from 'lodash'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'cartProducts'
    ])
  },
  mounted() {
    window.onscroll = e => {
      let scroll = window.scrollY
      let menu = document.getElementsByClassName("menu")[0]
      let bar = document.getElementsByClassName("bar")[0]
      let menuMobile = document.getElementsByClassName("menu-mobile")[0]
      let menuMask = document.getElementsByClassName("menu-action")[0]
      let title = document.getElementsByClassName("logo_title")[0]


      if(scroll >= 100) {
        menu.classList.add("menu-compact")
        bar.classList.add("bar-low")
        Object.assign(menuMobile.style, {
          top: '75px'
        })
        Object.assign(menuMask.style, {
          top: '75px'
        })
        title.style.top = "74%";
      } else {
        menu.classList.remove("menu-compact")
        bar.classList.remove("bar-low")
        Object.assign(menuMobile.style, {
          top: '100px'
        })
        Object.assign(menuMask.style, {
          top: '100px'
        })
        title.style.top = "85%";
      }
    }

    let burguer = document.getElementById("burguer")
    burguer.addEventListener("click", e => {
      document.getElementsByClassName("menu")[0].classList.toggle("bg-black")
      document.getElementsByClassName("menu-mobile")[0].classList.toggle("menu-mobile-in")
      document.getElementById("logo-contrast").classList.toggle("disabled")
      document.getElementById("logo-base").classList.toggle("disabled")
      document.getElementsByTagName("html")[0].classList.toggle("hide-scrollbar")
      document.getElementsByTagName("body")[0].classList.toggle("hide-scrollbar")
      burguer.classList.toggle("burguer-on")
    })

    document.getElementsByClassName("search__button")[0].addEventListener("click", _ => {
      document.getElementsByClassName("search-box")[0].classList.toggle("search-box--active")
      document.getElementById("search_input").focus()
    })

    document.getElementsByClassName("search-box__errase")[0].addEventListener("click", _ => {
      document.getElementById("search_input").value = ""
      document.getElementById("search_input").focus()
    })


    window.addEventListener("load", () => {
      if(document.readyState == "complete") {
        this.$store.commit('isLoading', false);
      }
    })
  },
  components: {
    Cart
  }
}
</script>

<style lang="sass" scoped>
@import '../../stylesheets/_variables.sass'
@import '../../stylesheets/helpers.sass'
@import '../../stylesheets/_fonts.sass'

.logo
  position: absolute
  left: 50%
  transform: translateX(-50%)
  width: 70px
  height: 70px
  z-index: 30

  img
    object-fit: cover
    width: 100%
    height: 100%

$loading-transition: 1s

.logo_title
  display: inline-block
  @extend %title
  font-weight: light
  font-size: 15px
  position: absolute
  white-space: nowrap
  top: 85%
  left: -30%
  transition: $loading-transition
  
  &:before
    content: ''
    transform: scale(0.1)
    position: fixed
    z-index: -1000 
    top: -50vh
    left: -50vw
    background: transparent
    transition: 5s

.loading
  transform: scale(3.5)
  top: 50vh !important
  transition: $loading-transition

  &:before
    transform: scale(1)
    content: ''
    width: 110vw
    height: 210vh
    background: #af9e7e
    position: fixed
    z-index: -1 
    top: -50vh
    left: -50vw
    transition: 5s

.menu
  width: 100vw
  height: 100px
  box-sizing: border-box
  background: white
  max-width: 100vw
  margin: 0
  position: fixed
  right: 0
  top: 0
  padding: 0 30px
  display: flex
  justify-content: space-between
  align-items: center
  transition: .3s
  z-index: 1

  li
    +flex(1, 1)
    height: 100% 
    list-style: none
    padding: 15px 12px
    cursor: pointer

    &:hover > .submenu
      height: 500px
      overflow: auto

      > *
        top: 0
        opacity: 1

    a
      color: black
      font-weight: 600
      letter-spacing: 1.5px
      text-transform: uppercase
      text-decoration: none
      transition: .3s

      &:hover
        color: lighten(black, 20%)

.hide-scrollbar::-webkit-scrollbar
  width: 0 !important

.bar
  z-index: 1
  top: 0
  left: 50%
  transform: translateX(-50%)
  position: absolute
  width: 90vw
  height: 5px
  background: black

.bar-low
  top: 100%

.menu-compact
  height: 75px

.menu-content
  font-size: 14px
  height: 100%
  +flex(1, 1)

  li a
    transition: .2s 

    &:hover
      // font-style: oblique
      transform: skewX(-15deg)

    .shopping-cart:hover
      transition: 0
      transform: skewX(15deg)

.submenu
  overflow: hidden
  position: absolute
  top: 100%
  right: 5vw
  width: 550px 
  height: 0
  background: coral
  font-size: 19px
  transition: .3s
  z-index: 1

  ul
    overflow: hidden

  li
    position: relative
    left: 0
    transition: .3s

    &:hover
      left: 5px
      transform: skewX(-15deg)

    a:hover
      transform: skewX(7deg)

  > *
    transition: .7s
    transition-delay: .3s
    position: relative
    opacity: 0
    top: 100px

.sb-title
  font-family: $title-font
  font-weight: 600
  font-size: 46px
  text-align: center
  margin-top: 45px

// MOBILE

$burguer-distance: 8px  
.burguer-menu
  left: 15px
  width: 30px
  height: 30px
  position: relative
  cursor: pointer
  display: none
  
  .b1, .b2, .b3
    width: 25px
    height: 3px
    background: black 
    position: absolute
    transition: .2s
    transform-origin: left center
    opacity: 1
    border-radius: 30px

  .b1
    top: 0 * $burguer-distance
  .b2
    top: 1 * $burguer-distance
    width: 20px
  .b3
    top: 2 * $burguer-distance


.burguer-on
  div
    background: white !important
  > .b1
    transform: rotate(45deg)
  > .b2
    opacity: 0
  > .b3
    top: 2 * $burguer-distance + 2
    transform: rotate(-45deg)
  
.menu-mobile
  position: fixed
  width: 100vw
  height: 100vh
  background: black
  left: -120%
  transition: .3s
  flex-direction: column
  overflow-y: auto
  top: 75px
  z-index: 1

  > li
    background: white
    border-bottom: 1px solid rgba(#B6C0C2, .9)
    padding: 30px
    list-style: none 
    font-weight: 600
    text-transform: uppercase
    letter-spacing: 1px
    transition: .3s
    cursor: pointer

    &:hover
      background: darken(white, 7%)
    
    a
      text-decoration: none
      color: none

    &:not(:first-child)
      border-bottom: 1px solid #B6C0C2

.mb-header
  color: white
  font-size: 46px
  font-family: $title-font
  text-align: center
  padding: 10vh 0

.menu-mobile-in
  left: 0

.disabled
  display: none

.hidden
  opacity: 0

.bg-black
  background: black

.circle-mask
  clip-path: circle(35px at center)
  
.search__button
  width: 25px
  height: 25px
  transform: scaleX(-1)

  svg
    fill: black

.search-box
  top: 100%
  left: 0
  position: absolute
  background: white
  width: 100%
  height: 0
  +flex(1, 1)
  box-shadow: inset  1px 1px 10px 1px rgba(black, .07) 
  transition: .5s
  overflow: hidden

.search-box--active
  height: 50vh

.search-box__input
  position: relative
  width: 450px
  height: 50px
  background: white

  input
    box-sizing: border-box
    padding: 0
    padding-right: 83px
    font-size: 36px
    width: 100%
    height: 100%
    border: 0
    border-bottom: 2px solid darken(#EDEDED, 1%)
    font-family: $title-font

    &:focus
      outline: none

.search-box__errase
  top: 60%
  right: 1px 
  transform: translateY(-50%)
  position: absolute
  font-size: 13px
  font-family: $title-font
  letter-spacing: 1px
  padding: 5px 8px
  border-radius: 4px
  transition: .3s
  cursor: pointer

  &:hover
    background: darken(white, 6.5%)

.menu-action
  position: fixed
  background: rgba(black, .3)
  width: 100vw
  height: 100vh
  display: none

.shopping-cart
  position: relative

  .shopping-cart__items
    @extend %absolute-centered
    top: 58%
    color: white

  svg
    width: 35px
    height: 35px
    fill: black

@media (max-width: 980px)
  .menu-content
    display: none

  .menu-mobile
    display: flex

  .burguer-menu
    z-index: $top-zindex + 1
    display: block

</style>