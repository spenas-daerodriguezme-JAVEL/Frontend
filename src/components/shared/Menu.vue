<template>
  <div class="menu__container">
    <div class="menu" v-if="!isMobile">
      <router-link tag="a" class="menu__logo" :to="{name : 'Landing'}">
        <img src="../../assets/logotest.png" alt />
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
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
      <router-link tag="a" class="menu__logo" :to="{name : 'Landing'}">
        <img src="../../assets/logotest.png" alt="Agua de Javel" />
      </router-link>
      </div>
      <router-link
        tag="div"
        :to="{name: 'Checkout'}"
        @click="isActive = false; selectedMenu = ''"
        class="menu__shopping-bag menu__shopping-bag--mobile"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
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
          <div v-show="selectedMenu == 'Cuenta' || selectedMenu == 'Ingresar'">
            <Login @click="isActive=true" @close="isActive=false"/>
          </div>

          <div v-if="selectedMenu == 'Nosotros'">
            <div class="title__menu">Nosotros</div>
            <a class="btn link" href="/mision">Acerca de nosotros</a>
            <a class="btn link" href="/contact">Contáctenos</a>
            <a class="btn link" href="/environment">Medio ambiente</a>
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
        :menuItems="mobileMenuData"
        @menuClick="isMobileMenuActive = false"
      />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuMobile from '@shared/MenuMobile';
import Login from './Login.vue';
import { EventBus } from './event-bus';

// * Names with '' do not redirect to a path
const menuData = [
  {
    showName: 'Catálogo',
    dropdown: false,
    path: { name: 'Catalog' },
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

const mobileMenuData = [
  {
    showName: 'Catálogo',
    path: { name: 'Catalog' },
  },
  {
    showName: 'Nosotros',
    path: { name: 'Motto' },
  },
  {
    showName: 'Contactenos',
    path: { name: 'Contact' },
  },
  {
    showName: 'Medio Ambiente',
    path: { name: 'Clients' },
  },
  {
    showName: 'Ingresar',
    path: { name: 'Login' },
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
      mobileMenuData,
      /* User */
      userAccount: {
        email: '',
        password: '',
      },
      formError: false,
    };
  },
  mounted() {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      this.isLogged = true;
      const index = this.menuData.findIndex((item) => item.showName === 'Cuenta');
      this.menuData[index].showName = 'Ingresar';
    }

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

    const isLogged = localStorage.getItem('jwt') !== null;
    if (isLogged) {
      this.changeMenu('logged-in');
    } else {
      this.changeMenu('logged-out');
    }
    this.listenMenuLogged();
  },
  updated() {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      const index = this.menuData.findIndex((item) => item.showName === 'Cuenta');
      if (index >= 0) {        
        this.menuData[index].showName = 'Ingresar';
      }
    } else {
      const index = this.menuData.findIndex((item) => item.showName === 'Ingresar');
      if (index >= 0) {        
        this.menuData[index].showName = 'Cuenta';
      }
    }
  },
  methods: {
    onClickMenu(menuItem) {
      this.isActive = menuItem.dropdown;
      this.selectedMenu = menuItem.dropdown
        ? menuItem.showName
        : '';
    },

    listenMenuLogged() {
      EventBus.$on('changed-logged-status', (newStatus) => {        
        this.changeMenu(newStatus);
        if (newStatus === 'logged-in') {
          const index = this.menuData.findIndex((item) => item.showName === 'Ingresar');
          if (index >= 0) {        
            this.menuData[index].showName = 'Cuenta';
          }
        }
      });
    },

    changeMenu(newStatus) {
      if (newStatus === 'logged-in') {
        this.mobileMenuData.pop();
        this.mobileMenuData.push({
          showName: 'Mi cuenta',
          path: { name: 'MyAccount' },
        });
        this.mobileMenuData.push({
          showName: 'Salir',
          path: { name: 'Logout' },
        });
      } else if (newStatus === 'logged-out') {
        this.mobileMenuData.pop();
        this.mobileMenuData.pop();
        this.mobileMenuData.push({
          showName: 'Ingresar',
          path: { name: 'Login' },
        });
      }
    },
  },
  computed: {
    ...mapGetters([
      'countProducts',
    ]),
  },
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
  cursor: pointer;
}

.menu__shopping-bag__count {
  position: absolute;
  right: 15px;
  font-weight: bolder;  
  top: 36%;
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
  margin-left: 2px;
  img {
    margin: auto;
    height: auto;
    width: 300px;
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
    min-height: 300px;
  }
}

.border-gradient {
  border-image-slice: 1;
  border-width: 2px;
}
.border-gradient-purple {
  border-image: linear-gradient(to left, #743ad5, #d53a9d);
}

.link {
  text-decoration: none;
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
    right: 1em;
  }

  .menu {
    padding-right: 10px;
  }
  .menu__logo {
    img {
      margin: auto;
      height: auto;
      width: 240px;
    }
  }
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 359px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {

  .menu__shopping-bag--mobile {
    right: 0.5em;
    height: 25px;

    .menu__shopping-bag__count{
      right: 14px;
      top: 5px;
    }
  }
  .menu__logo {
    img {
      margin: auto;
      height: auto;
      width: 210px;
    }
  }

}
</style>
