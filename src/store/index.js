import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    test: 'xxx',
    isLoading: true,
    cartProducts: [],
  },
  plugins: [
    createPersistedState({
      key: 'cart',
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  getters: {
    isLoading: (state) => state.isLoading,
    cartProducts: (state) => state.cartProducts,
    countProducts: (state) => state.cartProducts.length,
  },
  mutations: {
    isLoading: (state, payload) => {
      state.isLoading = payload;
    },
    addToCart: (state, product) => {
      state.cartProducts.push(product);
    },
    removeFromCart: (state, index) => {
      this.product.splice(index, 1);
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
  actions: {

  },
  modules: {

  },
});
