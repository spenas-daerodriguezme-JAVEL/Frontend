<template>
  <div class="product edit-product">
    <div class="row">
      <a href="localhost:8080/admin">volver</a>
    </div>
    <div class="row">
      <div class="field field--small">
        <div class="tag">Imagen 1</div>
        <div class="image__preview" @click="triggerRef(1)">
          <svg class="material-icon" viewBox="0 0 24 24">
            <path
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            />
          </svg>
          <img src ref="preview_1" />
        </div>
        <input style="display: none" @change="uploadFile(1)" ref="image_1" type="file" />
      </div>
      <div class="field field--small">
        <div class="tag">Imagen 2</div>
        <div class="image__preview" @click="triggerRef(2)">
          <svg class="material-icon" viewBox="0 0 24 24">
            <path
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            />
          </svg>
          <img src ref="preview_2" />
        </div>
        <input style="display: none" @change="uploadFile(2)" ref="image_2" type="file" />
      </div>
      <div class="field field--small">
        <div class="tag">Imagen 3</div>
        <div class="image__preview" @click="triggerRef(3)">
          <svg class="material-icon" viewBox="0 0 24 24">
            <path
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            />
          </svg>
          <img src ref="preview_3" />
        </div>
        <input style="display: none" @change="uploadFile(3)" ref="image_3" type="file" />
      </div>
    </div>
    <div class="row">
      <div class="field field--small">
        <div class="tag">Imagen 4</div>
        <div class="image__preview" @click="triggerRef(1)">
          <svg class="material-icon" viewBox="0 0 24 24">
            <path
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            />
          </svg>
          <img src ref="preview_1" />
        </div>
        <input style="display: none" @change="uploadFile(1)" ref="image_1" type="file" />
      </div>
      <div class="field field--small">
        <div class="tag">Imagen 5</div>
        <div class="image__preview" @click="triggerRef(2)">
          <svg class="material-icon" viewBox="0 0 24 24">
            <path
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            />
          </svg>
          <img src ref="preview_2" />
        </div>
        <input style="display: none" @change="uploadFile(2)" ref="image_2" type="file" />
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
          :default-option="' - '"
        ></selector>
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
          :default-option="' - '"
        ></selector>
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
        <div class="field--controls" v-for="(step, index) in product.steps" :key="index">
          <input @keydown.enter="addStep(index)" v-model="product.steps[index]" type="text" />
          <div class="field__control" @click="addStep(index)">
            <svg class="material-icon" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
          <div class="field__control" v-show="product.steps.length > 1" @click="removeStep(index)">
            <svg class="material-icon" viewBox="0 0 24 24">
              <path d="M19 13H5v-2h14v2z" />
            </svg>
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

    <div
      class="btn btn--save"
      @click="saveForm"
    >{{ currentAction == 'Crear' ? 'Crear' : 'Guardar' }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        business_line: '',
        dimention: '',
        price: '',
        descriptionId: '',
      },
    };
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
    margin-bottom: 20px

</style>
