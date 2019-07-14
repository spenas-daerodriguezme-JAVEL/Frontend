<template>
  <div class="product edit-product">

    <div class="row">
      <div class="field field--small">
        <div class="tag">Imagen 1</div>
        <div class="image__preview"
          @click="triggerRef(1)">
          <svg class="material-icon" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          <img src="" ref="preview_1">  
        </div>
        <input
          style="display: none" 
          @change="uploadFile(1)"
          ref="image_1"
          type="file" />
      </div>
      <div class="field field--small">
        <div class="tag">Imagen 2</div>
        <div class="image__preview"
          @click="triggerRef(2)">
          <svg class="material-icon" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          <img src="" ref="preview_2">    
        </div>
        <input
          style="display: none" 
          @change="uploadFile(2)"
          ref="image_2"
          type="file" />
      </div>
      <div class="field field--small">
        <div class="tag">Imagen 3</div>
        <div class="image__preview"
          @click="triggerRef(3)">
          <svg class="material-icon" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          <img src="" ref="preview_3">    
        </div>
        <input
          style="display: none" 
          @change="uploadFile(3)"
          ref="image_3"
          type="file" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Nombre del producto</div>
        <input v-model="product.name" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="field field--small">
        <div class="tag">Línea de negocio</div>
        <input v-model="product.business_line" type="text" />
      </div>
      <div class="flex">
        <div class="tag">Presentación disponible - Precio</div>
        <div class="field--controls"
            v-for="(step, index) in product.price" 
            :key="index">
            <input
              @keydown.enter="addPrice(index)" 
              v-model="product.price[index].dimention" type="text" />
            <input
              @keydown.enter="addPrice(index)" 
              v-model="product.price[index].price" type="text" />
          <div class="field__control"
            @click="addPrice(index)">
            <svg class="material-icon" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </div>
          <div class="field__control"
            v-show="product.price.length > 1"
             @click="removePrice(index)">
            <svg class="material-icon" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Descripción catálogo</div>
        <textarea v-model="product.catalog_description" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field field--small">
        <div class="tag">Aspecto físico</div>
        <input v-model="product.physical_appereance" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Olor</div>
        <input v-model="product.smell" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Color</div>
        <input v-model="product.color" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="field field--small">
        <div class="tag">Gravedad específica</div>
        <input v-model="product.specific_gravity" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Viscosidad</div>
        <input v-model="product.viscosity" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Solubilidad en agua</div>
        <input v-model="product.water_solubility" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="field field--small">
        <div class="tag">Inflamable</div>
        <selector
          :value.sync="product.flamable"
          :options="[{label: 'Si', value: 'Si'}, {label: 'No', value: 'No'}]"
          :default-option="' - '"></selector>
      </div>
      <div class="field field--small">
        <div class="tag">Densidad</div>
        <input v-model="product.density" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Principio activo</div>
        <input v-model="product.active_principle" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="field field--small">
        <div class="tag">Peso específico</div>
        <input v-model.number="product.weight" type="number" />
      </div>
      <div class="field field--small">
        <div class="tag">Índice de refracción</div>
        <input v-model="product.refractive_index" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Toxico</div>
        <selector
          :value.sync="product.toxic"
          :options="[{label: 'Si', value: 'Si'}, {label: 'No', value: 'No'}]"
          :default-option="' - '"></selector>
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Párrafo 1</div>
        <textarea v-model="product.paragraph_1" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Párrafo 2</div>
        <textarea v-model="product.paragraph_2" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Párrafo 3</div>
        <textarea v-model="product.paragraph_3" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Párrafo 4</div>
        <textarea v-model="product.paragraph_4" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Título de pasos</div>
        <input v-model="product.step_title" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Pasos</div>
        <div class="field--controls"
            v-for="(step, index) in product.steps" 
            :key="index">
            <input
              @keydown.enter="addStep(index)" 
              v-model="product.steps[index]" type="text" />
          <div class="field__control"
            @click="addStep(index)">
            <svg class="material-icon" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </div>
          <div class="field__control"
            v-show="product.steps.length > 1"
             @click="removeStep(index)">
            <svg class="material-icon" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="field">
        <div class="tag">Título de promoción</div>
        <input v-model="product.promotion_title" type="text" />
      </div>
    </div>

    <div class="btn btn--save"
      @click="saveForm">{{ currentAction == 'Crear' ? 'Crear' : 'Guardar' }}</div>

  </div>
</template>

<script>
import util from '../../util/index'
import VAPI from '../../http_common'
import CustomSelector from '../../components/ui/CustomSelector.vue'
const URI = process.env.URI
const basePrice = {dimention: '', price: 0};

export default {
  data() {
    return {
      URI,
      currentAction: '',
      product: {
        name: '',
        business_line: '',
        price: [{dimention: '', price: 0}],
        catalog_description: '',
        physical_appereance: '',
        smell: '',
        color: '',
        specific_gravity: '',
        viscosity: '',
        water_solubility: '',
        flamable: '',
        density: '',
        active_principle: '',
        weight: '',
        refractive_index: '',
        dilution: '',
        toxic: '',
        paragraph_1: '',
        paragraph_2: '',
        paragraph_3: '',
        paragraph_4: '',
        step_title: '',
        steps: [''],
        promotion_title: '',
        images: ['', '', ''],
      },
    }
  },
  methods: {
    addStep(index) {
      this.product.steps.splice(index + 1, 0, '');
    },
    addPrice(index) {
      this.product.price.splice(index + 1, 0, util.deepCopy(basePrice));
    },
    removeStep(index) {
      this.product.steps.splice(index , 1);
    },
    removePrice(index) {
      this.product.price.splice(index , 1);
    },
    triggerRef(index) {
      this.$refs[`image_${index}`].click();
    },
    uploadFile(index) {
      let item = this.$refs["image_" + index]

      if(item.files && item.files[0]) {
        let reader = new FileReader()
        let self = this

        reader.onload = function(e) {
          self.$refs["preview_" + index].src = e.target.result
          self.$refs["preview_" + index].style = "display: inline-block"
        }

        reader.readAsDataURL(item.files[0])
        self.product.images[index - 1] = item.files[0];
      }
    },
    async getImages(id) {
      try {
        for (let i = 1; i <= 3; i++) {
          const res = await VAPI.get(`products/${id}/preview?image_id=${i}`, {responseType: 'arraybuffer'});
          if(res.status == 200) {
            let image = Buffer.from(res.data, 'binary').toString('base64');
            this.$refs[`preview_${i}`].src = `data:image/png;base64,${image}`;
            this.$refs[`preview_${i}`].style = "display: inline-block";
          }
        }
      } catch(e) {
        console.log(`Error: ${e}`);
      }
    },
    setImages() {
      for (let i = 1; i <= 3; i++) {
        if(this.product.images[i - 1]) {
          this.$refs[`preview_${i}`].src = URI + this.product.images[i - 1].url;
          this.$refs[`preview_${i}`].style = "display: inline-block";
        }
      }
    },
    async saveForm() {
      try {
        let formData = new FormData();

        for (const key in this.product) {
          if(key == 'images') {
            for (let i = 0; i < this.product.images.length; i++) {
              if(this.product.images[i] instanceof File) {
                formData.append(`image_${i + 1}`, this.product.images[i]);
              }
            }
            continue;
          }

          if(key == 'steps' || key == 'price') {
            formData.append(key, JSON.stringify(this.product[key]));
            continue;
          }
          formData.append(key, this.product[key]);
        }

        let res;

        if(this.currentAction == 'Crear') {
          res = await VAPI.post('products/', formData,
          
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
          console.log("Creation");
          console.log(formData);
          console.log(res);
        } else {
          const id = this.$route.params.id;
          res = await VAPI.put(`products/${id}`, formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
        }

        this.$router.push({name: 'AdminCatalogList'})

      } catch(e) {
        console.error("Error saving form");
        console.error(e);
      }
    },
    async editProduct() {
      try {
        const product_id = this.$route.params.id;
        const res = await VAPI.get(`products/${product_id}`);

        console.log("RES is", res);
        for (const key in res.data) {
          console.log("Keys are", key);
          if(key == 'price') continue;
          if(key == 'description') {
            
            for (const key2 in res.data.description) {
              this.product[key2] = res.data.description[key2];
              console.log(res.data.description[key2]);
            }
          } else {
            this.product[key] = res.data[key];
            console.log(this.product[key]);
          }
        }

      } catch (e) {
        console.error("Error cargando el producto");        
      }
    }
  },
  mounted() {
    if(this.currentAction == 'Editar') {
    }
  },
  async beforeMount() {
    this.currentAction = this.$route.meta.actionType;
    if(this.currentAction == 'Editar') {
      await this.editProduct();
      this.setImages();
      // this.getImages(this.$route.params.id);
    }
  },
  filters: {
    toMoney: util.toMoney,
  },
  components: {
    'Selector': CustomSelector
  },
}
</script>

<style lang="sass" scoped>
@import ../../stylesheets/global.sass

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


</style>