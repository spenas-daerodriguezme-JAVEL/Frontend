<template>
  <div class="catalog-list" data-sortable=".item" id="sort_1">
    <modal-message
      :message="'¿Cofirmar borrado?'"
      :active-modal.sync="activeModal"
      v-show="activeModal"
      @modalResponse="confirmDelete($event)"></modal-message>

    <div
      class="item"
      v-for="(product, index) in products"
      :class="{'special-item': (product.position + 1) % 4 == 0}"
      :data-position="index"
      :data-id="index"
      :key="index">
        <div class="content">
          <div class="image">
            <svg class="material-icon" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            <img :src="product.images[0] ? URI + product.images[0].url : ''" alt="">
          </div>
          <div class="text-zone">
            <div class="title">{{ product.name }}</div>
            {{ product.price | toMoney }}
          </div>
          <div class="button-group">
            <div class="button"
              @click="editItem(product.id)">Editar</div>
            <div class="button button--black" 
              @click="activateModal(index)">Eliminar</div>
          </div>
        </div>
    </div>

    <div class="add-product"
      @click="toNewProduct">
      <svg class="material-icon" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
    </div>

  </div>  
</template>

<script>

import util from '../../util/index'
import _ from 'lodash'
import Sortable from './Sortable'
import VAPI from '../../http_common'
import ModalMessage from '../../components/ui/ModalMessage.vue'
const URI = process.env.URI
export default {
  data() {
    return {
      URI,
      deletion: -1,
      activeModal: false,
      products: [
        // {name: 'producto A', position: 2},
        // {name: 'producto B', position: 1},
        // {name: 'producto C', position: 0},
        // {name: 'producto D', position: 3},
        // {name: 'producto E', position: 4},
        // {name: 'producto F', position: 5},
      ]
    }
  },
  async mounted() {
    await this.getProducts();
    let obj = new Sortable(document.querySelector('#sort_1'), null);
    obj.success = results => {
        this.products.forEach((product, index) => {
        if(product.position != results[index]) this.changePosition(product.id, results[index]);
        // product.position = results[index]
        this.$set(this.products[index], 'position', results[index]);
      })
    }

  },
  methods: {
    async changePosition(id, position) {
      try {
        const res = await VAPI.put(`change_position/${id}`, {
          position
        })
      } catch (e) {
        console.error("Error al guardar la nueva posicion")
      }
    },
    async deleteItem(id) {
      try {
        const res = await VAPI.delete(`products/${id}`);
      } catch (e) {
        console.error("Error al eliminar item");
      }
    },
    editItem(id) {
      this.$router.push({name: 'ProductEdit', params: {id}});
    },
    activateModal(id) {
      this.deletion = id;
      this.activeModal = true;
    },
    confirmDelete(response) {
      if(response) {

        this.$nextTick(() => {
          this.deleteItem(this.products[this.deletion]._id.$oid);
          this.products.splice(this.deletion, 1);
          location.reload();
        })
      }
    },
    toNewProduct() {
      this.$router.push({name: 'ProductNew'});
    },
    async getProducts() {
      try {
        const res = await VAPI.get('products');
        this.products = _.sortBy(res.data, [function(o) { return o.position }]);
      } catch (e) {
        console.error("Error al cargar todos los productos");
      }
    }
  },
  filters: {
    toMoney:  util.toMoney
  },
  components: {
    ModalMessage
  }
}
</script>

<style lang="sass" scoped>
@import "../../stylesheets/global.sass"

.catalog-list
  max-width: 750px
  margin: 20px auto
  position: relative
  padding-bottom: 100px

.item
  cursor: pointer
  width: 99%
  height: 150px
  position: absolute
  padding: 10px
  box-sizing: border-box
  transition: 0.3s

.content
  +flex(0, 0)
  width: 100%
  height: 100%
  border: 1px solid rgba(black, 0.6)

.image
  width: 200px
  height: 100%
  background: rgba(black, 0.15)
  position: relative

  svg
    z-index: -1
    fill: black
    +squared(50px)
    @extend %absolute-centered

  img
    @extend %image-cover

.text-zone
  padding: 10px

.title
  @extend %title
  font-size: 24px

.is-dragged
  opacity: 0.6s
  z-index: 9000

  .content 
    box-shadow: 0 1px 10px 1px rgba(black, 0.15)

.special-item
  background: black
  color: white

  .image > svg
    fill: white

  .button
    border: 2px solid white

  .button--black
    background: white
    color: black

.button
  +flex(1, 1)
  font-family: $title-font
  font-weight: bold
  cursor: pointer
  transition: 0.2s
  border: 2px solid black
  width: 90px
  height: 45px

  &:hover
    width: 100px

.button--black
  background: black
  color: white
  
.button-group
  +flex(1, 1)
  width: 130px
  margin-left: auto
  flex-direction: column
  justify-content: space-around

.add-product
  +squared(60px)
  border-radius: 50%
  background: black
  position: absolute
  bottom: 20px
  right: 3%
  +flex(1, 1)
  cursor: pointer
  transition: 0.3s

  &:hover
    background: rgba(black, 0.8)

  svg
    fill: white
    +squared(40px)
    
</style>
