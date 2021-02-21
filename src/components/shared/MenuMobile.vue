<template>
    <div class="container">
        <router-link
            tag="div"
            class="item"
            active-class="item--active"
            v-for="menuItem in menuData"
            :key="menuItem.showName"
            :to="menuItem.path"
            @click.native="handleClick"
        >
            {{ menuItem.showName }}
        </router-link>
    </div>
</template>

<script>
import { cloneDeep } from 'lodash';

export default {
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    /*
            For mobile this menu change the paths were it redirects
            since the Motto and my account should have a single view
            for the account
        */
    menuData() {
      const menuCopy = cloneDeep(this.menuItems);

      menuCopy.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        if (item.showName === 'Nosotros') item.path.name = 'Motto';
        // eslint-disable-next-line no-param-reassign
        if (item.showName === 'Cuenta') item.path.name = 'MyAccount';
      });

      return menuCopy;
    },
  },
  data() {
    return {
    };
  },
  methods: {
    handleClick() {
      this.$emit('menuClick');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
    @extend %screenSize;
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    top: $menu-height;
    left: 0;
    z-index: map-get($map: $zIndex, $key: 'menu-mobile');
    background: white;

}

.item {
    padding: 20px 30px;
    border-bottom: 1px solid rgba(black, .3);
    text-transform: uppercase;
    font-size: 13px;
    transition: 200ms;
    cursor: pointer;

    &:hover {
        background: rgba($color-black-soft, 0.2);
    }
}

.item--active {
    color: white;
    background: $color-black-soft;
}
</style>
