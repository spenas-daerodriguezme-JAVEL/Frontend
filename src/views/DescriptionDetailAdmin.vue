<template>
  <div class="product edit-product">
 <div class="row">
		  <a class="btn" href="/admin" style="max-width: 100px">Volver</a>
           <a
        class="btn btn--save danger-btn"
        v-if="isEdit"
        :href="deleteUrl"
      >Eliminar descripción</a>
	     </div>
       <div class="row">
         <h1>
           {{title}}
         </h1>
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
        <div class="image__preview" @click="triggerRef(4)">
          <svg class="material-icon" viewBox="0 0 24 24">
            <path
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            />
          </svg>
          <img src ref="preview_4" />
        </div>
        <input style="display: none" @change="uploadFile(4)" ref="image_4" type="file" />
      </div>
      <div class="field field--small">
        <div class="tag">Imagen 5</div>
        <div class="image__preview" @click="triggerRef(5)">
          <svg class="material-icon" viewBox="0 0 24 24">
            <path
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            />
          </svg>
          <img src ref="preview_5" />
        </div>
        <input style="display: none" @change="uploadFile(5)" ref="image_5" type="file" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Descripción catálogo</div>
        <textarea v-model="description.description" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field field--small">
        <div class="tag">Aspecto físico</div>
        <input v-model="description.physicalAspect" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Olor</div>
        <input v-model="description.smell" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Color</div>
        <input v-model="description.color" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="field field--small">
        <div class="tag">Gravedad específica</div>
        <input v-model="description.gravity" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Viscosidad</div>
        <input v-model="description.viscosity" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Solubilidad en agua</div>
        <input v-model="description.solubility" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="field field--small">
        <div class="tag">Inflamable</div>
        <selector
          :value.sync="description.flammable"
          :options="[{label: 'Si', value: 'Si'}, {label: 'No', value: 'No'}]"
          :default-option="' - '"
        ></selector>
      </div>
      <div class="field field--small">
        <div class="tag">Densidad</div>
        <input v-model="description.density" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Principio activo</div>
        <input v-model="description.activeComponent" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="field field--small">
        <div class="tag">Peso específico</div>
        <input v-model.number="description.weight" type="number" />
      </div>
      <div class="field field--small">
        <div class="tag">Índice de refracción</div>
        <input v-model="description.refractionIndex" type="text" />
      </div>
      <div class="field field--small">
        <div class="tag">Toxico</div>
        <selector
          :value.sync="description.isToxic"
          :options="[{label: 'Si', value: 'Si'}, {label: 'No', value: 'No'}]"
          :default-option="' - '"
        ></selector>
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Párrafo 1</div>
        <textarea v-model="description.paragraph1" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Párrafo 2</div>
        <textarea v-model="description.paragraph2" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Párrafo 3</div>
        <textarea v-model="description.paragraph3" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Párrafo 4</div>
        <textarea v-model="description.paragraph4" type="textarea" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Título de pasos</div>
        <input v-model="description.stepTitle" type="text" />
      </div>
    </div>

    <div class="row">
      <div class="field">
        <div class="tag">Pasos</div>
        <div class="field--controls" v-for="(step, index) in description.steps" :key="index">
          <input @keydown.enter="addStep(index)" v-model="description.steps[index]" type="text" />
          <div class="field__control" @click="addStep(index)">
            <svg class="material-icon" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
          <div class="field__control" v-show="description.steps.length > 1" @click="removeStep(index)">
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
        <input v-model="description.promoTitle" type="text" />
      </div>
    </div>

    <div
      class="btn btn--save"
      @click="executeActionDescription"
    >{{ currentAction == 'Crear' ? 'Crear' : 'Guardar' }}</div>
     <div
      class="btn btn--save danger-btn"
      @click="saveImages"
    >Guardar imágenes</div>
     <modal-info useSlot autoSize ref="modal">
      <div class="modal__message">
        <div class="title__menu">{{modalMessage}}</div>
      </div>
    </modal-info>
  </div>
</template>

<script>
import VAPI from '../http_common';
import CustomSelector from '../components/ui/CustomSelector.vue';

export default {
  data() {
    return {
      currentAction: '',
      description: {
        description: '',
        physicalAspect: '',
        smell: '',
        color: '',
        gravity: '',
        viscosity: '',
        solubility: '',
        flammable: '',
        density: '',
        activeComponent: '',
        weight: '',
        refractionIndex: '',
        isToxic: '',
        paragraph1: '',
        paragraph2: '',
        paragraph3: '',
        paragraph4: '',
        stepTitle: '',
        steps: [''],
        promoTitle: '',
        images: ['', '', '', '', ''],
      },
      url: '/admin',
      title: '',
      modalMessage: '',
      isEdit: false,
      deleteUrl: '',
      descriptionId: 0,
    };
  },

  async beforeMount() {
    this.currentAction = this.$route.meta.actionType;
    if (this.currentAction === 'Editar') {
      this.isEdit = true;
      await this.loadDescription();
      this.title = 'Editar descripción';
    } else if (this.currentAction === 'Crear') {
      this.title = 'Crear nueva descripción';
    }
  },
  methods: {
    triggerRef(index) {
      this.$refs[`image_${index}`].click();
    },
    uploadFile(index) {
      const item = this.$refs[`image_${index}`];

      if (item.files && item.files[0]) {
        const reader = new FileReader();
        const self = this;

        reader.onload = function (e) {
          self.$refs[`preview_${index}`].src = e.target.result;
          self.$refs[`preview_${index}`].style = 'display: inline-block';
        };

        reader.readAsDataURL(item.files[0]);
      }
    },
    addStep(index) {
      this.description.steps.splice(index + 1, 0, '');
    },
    removeStep(index) {
      this.description.steps.splice(index, 1);
    },
    setInitialImages(imagesArray) {
      for (let index = 1; index <= imagesArray.length; index++) {
        const self = this;
        // console.log('ok' + self.$refs['preview_1'].src);
        self.$refs[`preview_${index}`].src = imagesArray[index];
        self.$refs[`preview_${index}`].style = 'display: inline-block';
      }
    },
    async loadDescription() {
      this.descriptionId = this.$route.params.id;
      this.deleteUrl = `/delete/description/${this.descriptionId}`;
      const description = await VAPI.get(`/api/description/${this.descriptionId}`);
      const descriptionData = description.data;
      this.description = descriptionData;
      this.setInitialImages(descriptionData.images);
    },

    async executeActionDescription() {
      const { modal } = this.$refs;
      try {
        let description;
        this.currentAction = this.$route.meta.actionType;
        if (this.currentAction === 'Editar') {
          description = await VAPI.put(`/api/description/${this.descriptionId}`, this.description);
        } else if (this.currentAction === 'Crear') {
          description = await VAPI.post('/api/description/', this.description);
          this.descriptionId = description._id;
        }

        const formData = new FormData();
        const positions = [];
        for (let index = 1; index <= 5; index++) {
          const item = this.$refs[`image_${index}`];
          if (item.files.length !== 0) {
            positions.push(index);
            console.log('guarde');
            formData.append('image', item.files[0]);
          // console.log(self.$refs[`preview_${index}`].src);
          }
        }
        formData.append('positions', positions);
        formData.append('id', this.descriptionId);
        const response = await VAPI.post('/imagenes', formData);

        if (description.status === 200 && response.status === 200) {
          this.modalMessage = 'Operación exitosa';
        }
        modal.triggerModal();
        // check if any image has changed and sends it to back
      } catch (error) {
        this.modalMessage = 'Error en servidor, vuelva a intentar';
        modal.triggerModal();
        console.log(error);
      }
    },
  },
  components: {
    Selector: CustomSelector,
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

.danger-btn
  background-color: red
  border-color: red

</style>
