<template>
  <div id="app">
    <div class="product edit-product">
      <div class="row">
        <a class="btn" @click="$router.go(-1)" style="max-width: 100px;">Volver</a>
        <a class="btn btn--save danger-btn" v-if="isEdit" :href="deleteUrl">Eliminar producto</a>
      </div>
      <div class="row">
        <h1>
          {{ title }}
        </h1>
      </div>
      <div class="row">
        <div class="field field--small">
          <div class="tag">Nombre del producto</div>
          <input v-model="product.name" type="text" @input="$v.product.name.$touch" />
          <div class="error" v-if="!$v.product.name.required">
            El campo es requerido
          </div>
        </div>
        <div class="field field--small">
          <div class="tag">SKU</div>
          <input v-model="product.SKU" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="field field--small">
          <div class="tag">Línea de negocio</div>
          <Autocomplete
            :suggestions="businessLine"
            @selectedValue="updateValue"
            :currentSelected="product.businessLine"
            @input="$v.product.businessLine.$touch"
          ></Autocomplete>
          <div class="error" v-if="!$v.product.businessLine.required">
            El campo es requerido
          </div>
        </div>
        <div class="field field--small">
          <div class="tag">Presentación disponible</div>
          <div class="field--controls">
            <input v-model="product.capacity" type="text" @input="$v.product.capacity.$touch" />
            <div class="error" v-if="!$v.product.capacity.required">
              El campo es requerido
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="field field--small">
          <div class="tag">Id Descripcion</div>
          <input v-model="product.properties" type="text" @input="$v.product.properties.$touch" />
          <div class="error" v-if="!$v.product.properties.required">
            El campo es requerido
          </div>
        </div>
        <div class="field field--small">
          <div class="tag">Precio</div>
          <input v-model="product.price" type="text" @input="$v.product.price.$touch" />
          <div class="error" v-if="!$v.product.price.required">
            El campo es requerido
          </div>
        </div>
      </div>

      <div class="row">
        <div class="field field--small">
          <div class="tag">¿Mostrar en catálogo?</div>
          <select
            v-model="product.isActive"
            class="input-base input--medium"
            @input="$v.product.isActive.$touch"
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
          <div class="error" v-if="!$v.product.isActive.required">
            El campo es requerido
          </div>
        </div>
        <div class="field field--small">
          <div class="tag">Cantidad</div>
          <input v-model="product.quantity" @input="$v.product.quantity.$touch" type="text" />
          <div class="error" v-if="!$v.product.quantity.required">
            El campo es requerido
          </div>
        </div>
        <div class="field field--small">
          <div class="tag">Posición de catálogo</div>
          <input v-model="product.position" type="text" @input="$v.product.position.$touch" />
          <div class="error" v-if="!$v.product.position.required">
            El campo es requerido
          </div>
        </div>
        <div class="field field--small">
          <div class="tag">¿Mostrar en carrusel?</div>
          <select v-model="product.isInCarousel" class="input-base input--medium">
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      <div class="btn btn--save" @click="executeActionProduct">{{ currentAction == 'Crear' ? 'Crear' : 'Guardar' }}</div>
    </div>
    <modal-info useSlot autoSize ref="modal">
      <div class="modal__message">
        <div class="title__menu">{{ modalMessage }}</div>
      </div>
    </modal-info>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import util from '../util/index';
import Autocomplete from '../components/shared/Autocomplete.vue';

export default {
  mixins: [validationMixin],
  data() {
    return {
      currentAction: '',
      product: {
        name: '',
        businessLine: '',
        capacity: '',
        price: '',
        SKU: '',
        isActive: true,
        quantity: 0,
        position: 1,
        properties: '',
        isInCarousel: false,
      },
      url: '/admin',
      title: '',
      modalMessage: '',
      isEdit: false,
      deleteUrl: '',
      businessLine: [],
    };
  },

  validations: {
    product: {
      name: {
        required,
      },
      businessLine: {
        required,
      },
      capacity: {
        required,
      },

      price: {
        required,
      },
      SKU: {
        required,
      },
      isActive: {
        required,
      },
      quantity: {
        required,
      },
      position: {
        required,
      },
      properties: {
        required,
      },
    },
  },
  async beforeMount() {
    this.currentAction = this.$route.meta.actionType;
    if (this.currentAction === 'Editar') {
      await this.editProduct();
      this.title = 'Editar producto';
    } else if (this.currentAction === 'Crear') {
      this.title = 'Crear nuevo producto';
    }
    try {
      const { data } = await this.$http.get('/api/product/businesslinelist');
      this.businessLine = data.businessLines;
    } catch (error) {
      console.error(error);
    }
  },

  methods: {
    async editProduct() {
      const parameter = this.$route.params.id;
      this.deleteUrl = `/delete/product/${parameter}`;
      const product = await this.$http.get(`/api/product/${parameter}`);
      const productData = product.data;
      this.product = productData;
      this.product.properties = productData.properties._id;
      this.isEdit = true;
    },
    async executeActionProduct() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        // eslint-disable-next-line no-throw-literal
        throw 'Hay campos faltantes';
      }
      const { modal } = this.$refs;
      const jwt = localStorage.getItem('jwt');
      const jsonJWT = util.parseJwt(jwt);
      // eslint-disable-next-line no-underscore-dangle
      const userId = jsonJWT._id;
      try {
        let updateProduct;
        if (this.currentAction === 'Editar') {
          const parameter = this.$route.params.id;
          console.log(this.product);
          updateProduct = await this.$http.put(`/api/product/${parameter}`, this.product, {
            headers: {
              id: userId,
              'x-auth-token': localStorage.getItem('jwt'),
            },
          });
        } else if (this.currentAction === 'Crear') {
          updateProduct = await this.$http.post('/api/product/', this.product, {
            headers: {
              id: userId,
              'x-auth-token': localStorage.getItem('jwt'),
            },
          });
        }
        if (updateProduct.status === 200) {
          this.modalMessage = 'Operación exitosa';
          setTimeout(() => {
            this.$router.replace('/admin');
          }, 500);
        }
        modal.triggerModal();
      } catch (error) {
        this.modalMessage = error;
        modal.triggerModal();
        console.log(error);
      }
    },
    updateValue(selectedValue) {
      this.product.businessLine = selectedValue;
    },
  },
  components: {
    Autocomplete,
  },
};
</script>

<style lang="sass" scoped>
@import ../stylesheets/global.sass

.flex
  width: 70%
  +flex(0, 0)
  flex-direction: column
  align-items: flex-start

.edit-product
  max-width: 900px
  padding: 0 10px
  margin: 30px auto

.tag
  background: black
  color: white
  padding: 7px 15px
  @extend %title

.row
  display: flex
  justify-content: space-between
  margin-bottom: 25px
  flex-wrap: wrap

input
  width: 100%
  height: 30px
  padding: 0 5px

  &[type="textarea"]
    height: 200px

textarea
  width: 100%
  height: 150px

.field
  width: 100%
  display: flex
  flex-direction: column
  align-items: flex-start

.field--small
  width: 30%
  min-width: 300px
  margin-bottom: 10px

.field--controls
  +flex(0, 0)
  width: 100%
  margin-bottom: 2px

.field__control
  +flex(1, 1)
  +squared(34px)
  padding: 5px
  box-sizing: border-box
  background: black
  transition: 0.2s
  cursor: pointer
  border: 1px solid black

  &:hover
    background: white

    svg
      fill: black

  &:first-of-type
    border-right: 1px solid white

  svg
    width: 100%
    height: 100%
    fill: white

.image__preview
  +squared(280px)
  border: 1px dashed black
  position: relative
  cursor: pointer

  &:hover > svg
    +squared(58px)

  svg
    z-index: -1
    +squared(50px)
    @extend %absolute-centered
    fill: black
    transition: 0.3s

  img
    z-index: 5
    display: none
    @extend %image-cover

.btn--save
  +flex(1, 1)
  width: 150px
  height: 20px
  margin-left: auto
  margin-bottom: 20px

.danger-btn
  background-color: red
  border-color: red

.selector--input
  border: 1px solid rgb(118, 118, 118) !important
  background-color: white !important

.error
  color: red
a.btn.btn--save.danger-btn
    height: auto

@media (max-width: 816px)
  .row--title
    text-align: center

  .row + .row
    justify-content: center

  .btn--save
    margin-right: auto
</style>
