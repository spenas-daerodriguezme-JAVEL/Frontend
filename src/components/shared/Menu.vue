<template>
  <div class="menu__container">
    <div class="menu" v-if="!isMobile">
      <router-link tag="a" class="menu__logo" :to="{name : 'Landing'}">
        <img src="../../assets/aguadejavel_logo.png" alt />
      </router-link>

      <div class="menu__content">
        <router-link
          tag="div"
          class="menu__item"
          v-for="menuItem in menuData"
          :key="menuItem.showName"
          :to="menuItem.path.name === '' ? {} : menuItem.path"
          @click.native="onClickMenu(menuItem)"
        >{{ menuItem.showName }}</router-link>
      </div>
      <router-link
        tag="div"
        class="menu__shopping-bag"
        :to="{name: 'Checkout'}"
        @click="isActive = false; selectedMenu = ''"
      >
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.195 426.195" style="enable-background:new 0 0 426.195 426.195;" xml:space="preserve" > <g> <g> <path d="M213.098,30c23.158,0,41.998,18.84,41.998,41.997h30C285.096,32.298,252.798,0,213.098,0c-39.699,0-71.997,32.298-71.997,71.997h30C171.101,48.84,189.941,30,213.098,30z" /> <path d="M383.013,409.543l-19.955-308.686c-0.455-7.938-7.024-14.143-14.976-14.143H78.095c-7.951,0-14.521,6.205-14.976,14.143l-20,309.483c-0.236,4.119,1.236,8.156,4.07,11.156c2.833,3,6.778,4.699,10.905,4.699h309.987c0.008,0,0.014,0,0.02,0c8.284,0,15-6.715,15-15C383.102,410.639,383.071,410.086,383.013,409.543z M183.578,134.397c0,10.487-8.501,18.988-18.988,18.988c-10.487,0-18.988-8.501-18.988-18.988V123.59c0-10.487,8.501-18.988,18.988-18.988c10.487,0,18.988,8.501,18.988,18.988V134.397z M280.595,134.397c0,10.487-8.501,18.988-18.988,18.988s-18.988-8.501-18.988-18.988V123.59c0-10.487,8.501-18.988,18.988-18.988s18.988,8.501,18.988,18.988V134.397z" /> </g> </g> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> </svg>
        <div class="menu__shopping-bag__count">{{ countProducts }}</div>
      </router-link>
    </div>
    <!-- Mobile menu -->
    <div v-else class="menu menu-mobile">
      <div
        @click="isMobileMenuActive = !isMobileMenuActive"
        :class="{'burguer-menu--active': isMobileMenuActive}"
        class="burguer-menu"
      >
        <div class="burguer-item" v-for="i in 3" :key="i"></div>
      </div>
      <div class="menu__logo">
        <img src="../../assets/aguadejavel_logo.png" alt="Agua de Javel" />
      </div>
      <router-link 
        tag="div"
        :to="{name: 'Checkout'}"
        @click="isActive = false; selectedMenu = ''"
        class="menu__shopping-bag menu__shopping-bag--mobile"
      >
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 426.195 426.195" style="enable-background:new 0 0 426.195 426.195;" xml:space="preserve" > <g> <g> <path d="M213.098,30c23.158,0,41.998,18.84,41.998,41.997h30C285.096,32.298,252.798,0,213.098,0c-39.699,0-71.997,32.298-71.997,71.997h30C171.101,48.84,189.941,30,213.098,30z" /> <path d="M383.013,409.543l-19.955-308.686c-0.455-7.938-7.024-14.143-14.976-14.143H78.095c-7.951,0-14.521,6.205-14.976,14.143l-20,309.483c-0.236,4.119,1.236,8.156,4.07,11.156c2.833,3,6.778,4.699,10.905,4.699h309.987c0.008,0,0.014,0,0.02,0c8.284,0,15-6.715,15-15C383.102,410.639,383.071,410.086,383.013,409.543z M183.578,134.397c0,10.487-8.501,18.988-18.988,18.988c-10.487,0-18.988-8.501-18.988-18.988V123.59c0-10.487,8.501-18.988,18.988-18.988c10.487,0,18.988,8.501,18.988,18.988V134.397z M280.595,134.397c0,10.487-8.501,18.988-18.988,18.988s-18.988-8.501-18.988-18.988V123.59c0-10.487,8.501-18.988,18.988-18.988s18.988,8.501,18.988,18.988V134.397z" /> </g> </g> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> </svg>
        <div class="menu__shopping-bag__count">{{ countProducts }}</div>
      </router-link>
    </div>
    <!-- Dropdown menu -->
    <transition name="trfade1">
      <div
        class="menu__filter"
        ref="filter"
        v-show="isActive"
        :class="{'menu__filter--active': isActive}"
      >
        <div class="menu__item__dropdown" ref="dropdown">
          <div v-if="selectedMenu == 'Cuenta'">
            <Login @click="isActive = true" @close="isActive = false" />
          </div>

          <div v-if="selectedMenu == 'Nosotros'">
            <div class="title__menu">Nosotros</div>
            <div class="about">
              <a href>Acerca de</a>
              <a href>Contáctenos</a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <modal-info useSlot autoSize ref="modal" :duration="1200">
      <div class="modal__message">
        <div class="title__menu">Inicio de sesión exitoso</div>
      </div>
    </modal-info>

    <div class="menu__spacer"></div>

    <transition name="trmenu">
      <MenuMobile
        v-if="isMobileMenuActive"
        :menuItems="menuData"
        @menuClick="isMobileMenuActive = false"
      />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuMobile from '@shared/MenuMobile';
import Login from './Login.vue';

// * Names with '' do not redirect to a path
const menuData = [
  {
    showName: 'Catálogo',
    dropdown: false,
    path: { name: 'Catalog' },
  },
  {
    showName: 'Clientes',
    dropdown: false,
    path: { name: 'Clients' },
  },
  {
    showName: 'Nosotros',
    dropdown: true,
    path: { name: '' },
  },
  {
    showName: 'Cuenta',
    dropdown: true,
    path: { name: '' },
  },
];

export default {
  components: {
    Login,
    MenuMobile,
  },
  data() {
    return {
      /* Menu */
      menuData,
      /* Mobile */
      isMobile: false,
      isMobileMenuActive: false,
      isActive: false,
      selectedMenu: '',
      /* User */
      userAccount: {
        email: '',
        password: '',
      },
      formError: false,
    };
  },
  mounted() {
    this.$refs.filter.addEventListener('click', (e) => {
      const dropdown = this.$refs.dropdown.getBoundingClientRect();
      const isInBounds = e.clientX <= dropdown.right
              && e.clientX >= dropdown.left
              && e.clientY <= dropdown.bottom
              && e.clientY >= dropdown.top;

      if (!isInBounds) {
        this.isActive = false;
      }
    });

    // Check mobile menu activation according to media query point
    const mediaQuery = '(max-width: 1200px)';

    this.isMobile = window.matchMedia(mediaQuery).matches;

    window.matchMedia(mediaQuery)
      .addListener((event) => {
        this.isMobile = event.matches;

        if (!event.matches) this.isMobileMenuActive = false;
      });
  },
  methods: {
    onClickMenu(menuItem) {
      this.isActive = menuItem.dropdown;
      this.selectedMenu = menuItem.dropdown
        ? menuItem.showName
        : '';
    },
  },
  computed: {
    ...mapGetters([
      'countProducts',
    ]),
  }
};
</script>

<style lang="scss" scoped>
.trfade1-enter-active,
.trfade1-leave-active {
  transition: opacity 0.5s;

  .menu__item__dropdown {
    transition: 0.3s;
  }
}
.trfade1-enter,
.trfade1-leave-to {
  opacity: 0;

  .menu__item__dropdown {
    opacity: 0;
  }
}

.menu__spacer {
  height: $menu-height;
}

.menu {
  width: 100vw;
  box-sizing: border-box;
  height: $menu-height;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-right: 80px;
  position: fixed;
  border-bottom: 1px solid rgba(black, 0.15);
  z-index: 2;
  background: white;
  -moz-box-align: center;
  -moz-box-pack: justify;
}

.menu__shopping-bag {
  @include squared(35px);
  position: absolute;
  right: 35px;
}

.menu__shopping-bag__count {
  position: absolute;
  right: 13px;
  color: white;
  top: calc(50% + 5px);
  transform: translateY(-50%);
}

.menu--black {
  background: black;
  color: white;

  .menu__logo img {
    filter: brightness(0) invert(1);
  }

  .menu--item:hover {
    color: darken($color: #fff, $amount: 30%);
  }
}

.menu__logo {
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
  font-size: 18px;
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
  top: #{$menu-height};
  left: 0;
  transition: 0.3s;
  z-index: 2;
}

.menu__filter--active {
  opacity: 1;
}

.menu__item__dropdown {
  position: fixed;
  top: #{$menu-height};
  right: 1px;
  width: 430px;
  background: white;
  box-sizing: border-box;
  border: 5px solid transparent;
  padding: 20px;

  > div {
    min-height: 360px;
  }
}

.border-gradient {
  border-image-slice: 1;
  border-width: 2px;
}
.border-gradient-purple {
  border-image: linear-gradient(to left, #743ad5, #d53a9d);
}

.about {
  margin-top: 60px;
  min-height: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;

  a {
    color: inherit;

    &:hover {
      transform: skewX(-10deg);
    }
  }
}

/* Mobile version */

.burguer-menu {
  position: relative;
  height: 80px;
  width: 30px;
}

.burguer-item {
  width: 30px;
  height: 4px;
  border-radius: 30px;
  background-color: black;
  transform: translateY(-50%);
  position: absolute;
  transition: transform 200ms ease-in-out, opacity 300ms;
  opacity: 1;

  $bar-space: 10px;

  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      top: $i * $bar-space + 20px;
    }
  }
}

.burguer-menu--active {
  .burguer-item {
    &:nth-child(1) {
      transform-origin: left center;
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform-origin: left center;
      transform: rotate(-45deg) translate(-1px, 1px);
    }
  }
}

@media (max-width: 1200px) {
  .menu__shopping-bag--mobile {
    position: relative;
    margin-left: auto;
  }

  .menu {
    padding-right: 10px;
  }
}
</style>
