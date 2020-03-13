<template>
  <div
    tabindex="0"
    @click="open"
    class="selector">
    <div
      v-if="isActive"
      @click="close"
      class="wrapper"></div>

    <div class="label">{{ label }}</div>
    <div
      class="input">{{ showValue }}</div>
    <div class="control"><i class="fa fa-caret-down"></i></div>

    <!-- Dropdown -->
      <div
        v-if="isActive"
        @click="close"
        class="close">Cerrar</div>
      <template v-if="isActive">
        <input
          ref="inputSearch"
          @keypress.="handleEsc"
          v-model="search"
          type="text"
          class="search"
          placeholder="Buscar...">
        <div
          ref="dropdown"
          :class="{'dropdown--up': opensUp}"
          class="dropdown">
          <transition-group tag="span" name="item">
            <div
              v-for="option in queryItems"
              :key="option.value"
              :class="{ 'dropdown__item--selected': option.value === value }"
              @click="select($event, option)"
              class="dropdown__item">{{ option.label }}</div>
          </transition-group>
        </div>
      </template>
  </div>
</template>

<script>
import { locationInBox } from '../../util/index';

export default {
  model: {
    prop: 'value',
    event: 'select',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Selecciona una opción',
    }
  },
  data() {
    return {
      search: '',
      opensUp: false,
      isActive: false,
    }
  },
  computed: {
    showValue() {
      if (this.value === '') return this.placeholder;

      const res = this.options.find(opt => opt.value === this.value);
      if (res) return res.label
      else this.$emit('select', '');
      // return this.options.find(opt => opt.value === this.value).label;
    },
    queryItems() {
      return this.options.filter(option => {
        return option.label
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(
            this.search
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
          )
      })
    }
  },
  methods: {
    open() {
      this.isActive = true;

      setTimeout(() => {

        const dropdown = this.$refs.dropdown;
        const bounds = dropdown.getBoundingClientRect();

        this.opensUp = bounds.bottom > window.innerHeight;
      }, 0);
    },
    close(event) {
      this.isActive = false;
      event.stopPropagation();
    },
    handleEsc() {
      if (this.search.length > 0) this.search = '';
      else this.close();
    },
    select(event, option) {
      this.$emit('select', option.value);
      this.isActive = false;
      event.stopPropagation();
    }
  }
}
</script>

<style lang="scss" scoped>

.selector {
  border: 1px solid rgb(214, 222, 235);
  min-width: 180px;
  height: 60px;
  position: relative;
  box-sizing: border-box;
  transition: .2s;

  &:hover {
    background: rgba(black, .05);
  }

  .input {
    box-sizing: border-box;
    padding: 25px 30px 0;
    width: 100%;
    height: 100%;
    border: 0;
    cursor: pointer;
    font-style: oblique;
    font-size: 16px;
  }
}

.label {
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  top: 7px;
  left: 30px;
}

.control {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

// Dropdown

$selectionColor: gray;

.wrapper {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background: rgba($color: #000000, $alpha: .5);
}

.dropdown {
  z-index: 11;
  background: white;
  position: absolute;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
}

.dropdown--up {
  bottom: 100%;
}

.dropdown__item {
  padding: 17px 10px;
  cursor: pointer;
  transition: .2s;

  &:hover, &.dropdown__item--selected {
    background: $selectionColor;
    padding-left: 11px;
  }

  &.dropdown__item--selected {
    background: darken($selectionColor, 8%);
  }
}

.search {
  font-family: 'Avenir';
  font-size: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 11;
  height: 100%;
  background: $selectionColor;
  color: white;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(black, .5);
  border-bottom-width: 2px;

  &::placeholder {
    color: inherit;
  }
}

.close {
  border-radius: 30px;
  padding: 3px 7px;
  background: rgba(black, .3);
  position: absolute;
  right: 10px;
  top: 20px;
  color: white;
  z-index: 12;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background: rgba(black, .2);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// Group
.item-enter-active,
.item-leave-active {
  transition: opacity .3s cubic-bezier(0.55, 0.055, 0.675, 0.19)  ;
}

.item-enter,
.item-leave-to {
  opacity: 0;
}

</style>
