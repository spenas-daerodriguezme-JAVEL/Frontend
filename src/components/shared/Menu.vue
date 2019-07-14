<template>
  <div class="menu__container">
    <div class="menu">
      <div class="menu__logo">
        <img src="../../assets/Javel_logo_solid.png" alt="">
      </div>

      <div class="menu__content">
        <div
          @click="isActive = !isActive" 
          class="menu__item">Catálogo</div>
        <div
          @click="isActive = !isActive" 
          class="menu__item">Usuarios</div>
        <div
          @click="isActive = !isActive" 
          class="menu__item">Nosotros</div>
        <div
          @click="isActive = !isActive" 
          class="menu__item">Cuenta</div>
      </div>


    </div>
    <div class="menu__filter"
      @click="isActive = false"
      :class="{'menu__filter--active': isActive}">
        <div class="menu__item__dropdown"></div>
    </div>

    <div class="menu__spacer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  }
}
</script>

<style lang="scss" scoped>

.menu__spacer {
  height: $menu-height;
}

.menu {
  width: 100vw;
  left: 0;
  top: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: fixed;
  border-bottom: 1px solid rgba(black, 0.15);
  z-index: 2;
  background: white;
}

.menu--black {
  background: black;
  color: white;

  .menu__logo img {
    filter: brightness(0) invert(1);
  }

  .menu--item:hover {
    color: darken($color: #FFF, $amount: 30%);
  }

  .menu__item__dropdown--black {
    background: linear-gradient(black, black), 
              linear-gradient(to right, #8f6B29, #FDE08D, #DF9F28);
  }
}

.menu__logo {
  margin-bottom: 20px;

  img {
    height: 55px;
  }
}

.menu__content {
  display: flex;
  justify-content: center;
}

.menu__item {
  font-family: $title-font;
  margin: 5px 17px;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: lighten($color: #000000, $amount: 30%);
  }
}

.menu__filter {
  @extend %screenSize;
  background: rgba(black, 0.4);
  position: fixed;
  z-index: -10;
  opacity: 0;
  top: #{$menu-height + 2px};
  left: 0;
  transition: 0.3s;
  z-index: 1;
}

.menu__filter--active {
  opacity: 1;
}

.menu__item__dropdown {
  position: fixed;
  top: #{$menu-height + 2px};
  right: 1px;
  width: 430px;
  height: calc(100vh - #{$menu-height} - 5px);
  background: white;
  box-sizing: border-box;

   background: linear-gradient(white, white), 
              linear-gradient(to right, #8f6B29, #FDE08D, #DF9F28);
  background-origin: padding-box, border-box;
  background-repeat: no-repeat; /* this is important */
  border: 5px solid transparent;
}

.border-gradient {
  border-image-slice: 1;
  border-width: 2px;
}
.border-gradient-purple {
  border-image: linear-gradient(to left, #743ad5, #d53a9d);
}

// filter: brightness(0) invert(1);
</style>
