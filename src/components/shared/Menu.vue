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
        <li><a href="#">Productos inteligentes</a></li>
        <li><a href="#">Catálogo</a></li>
        <!-- <li><a href="#">Trabaja con nosotros</a></li> -->
      </div>
      <div class="logo">
        <img src="../../assets/logo.png" alt="" class="circle-mask" id="logo-base">
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
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
        </li>
        <li><a href="#">Soporte</a>
          <div class="submenu" style="background: #ADB39F">
            <div class="sb-title">Soporte</div>
          </div>
        </li>
        <li><a href="#">Cuenta</a>
          <div class="submenu" style="background: #CF989C">
            <div class="sb-title">Cuenta</div>
          </div>
        </li>
        <li>
          <a href="#">Carrito de compra</a>
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
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    window.onscroll = e => {
      let scroll = window.scrollY
      let menu = document.getElementsByClassName("menu")[0]
      let bar = document.getElementsByClassName("bar")[0]
      let menuMobile = document.getElementsByClassName("menu-mobile")[0]
      let menuMask = document.getElementsByClassName("menu-action")[0]

      if(scroll >= 100) {
        menu.classList.add("menu-compact")
        bar.classList.add("bar-low")
        Object.assign(menuMobile.style, {
          top: '75px'
        })
        Object.assign(menuMask.style, {
          top: '75px'
        })
      } else {
        menu.classList.remove("menu-compact")
        bar.classList.remove("bar-low")
        Object.assign(menuMobile.style, {
          top: '100px'
        })
        Object.assign(menuMask.style, {
          top: '100px'
        })
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

  img
    object-fit: cover
    width: 100%
    height: 100%

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

.submenu
  overflow: hidden
  position: absolute
  top: 100%
  right: 5vw
  width: 550px 
  height: 0
  background: coral
  font-size: 16px
  transition: .3s
  z-index: 1

  > *
    transition: .7s
    transition-delay: .3s
    position: relative
    opacity: 0
    top: 100px

.sb-title
  font-family: $title-font
  font-weight: 600
  font-size: 38px
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

@media (max-width: 980px)
  .menu-content
    display: none

  .menu-mobile
    display: flex

  .burguer-menu
    z-index: $top-zindex + 1
    display: block

</style>
