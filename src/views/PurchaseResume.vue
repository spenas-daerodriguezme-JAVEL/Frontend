/* eslint-disable import/no-dynamic-require */
<template>
  <div class="checkout">
    <div class="row">
     <div class="w-30 fix__products center--responsive"
      style="padding: 30px" ref="column">
        <h1 ref="title1" class="title--responsive">Resumen de transacción</h1>
      </div>

      <div class="w-70 pad" ref="column2">
        <div class="container">
         <img :src="imageSource" alt="" srcset="" class="state-image">
         <!-- <img src="../assets/pending.png" alt="" srcset="" class="state-image"> -->
         <!-- <img src="../assets/error.png" alt="" srcset="" class="state-image"> -->
         <!-- <img src="../assets/approve.jpg" alt="" srcset="" class="state-image"> -->
       <h1>{{title}}</h1>
       <h2>{{subtitle}}</h2>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import VAPI from '../http_common';

export default {
  data() {
    return {
      title: '',
      subtitle: '',
      imageSource: '',
      paymentType: '',
      paymentMethod: '',
      amount: '',
      taxes: '',
      date: '',
    };
  },
  async mounted() {
    const wompiId = this.$route.query.id;
    try {
      const requestData = await VAPI.get(`https://sandbox.wompi.co/v1/transactions/${wompiId}`);
      const transactionStatus = requestData.data.data.status;

      switch (transactionStatus) {
      case 'APPROVED':
        this.title = '¡Gracias por tu compra!';
        this.subtitle = 'Tu pedido será entregado en el transcurso de la semana.';
        this.imageSource = '../../static/purchaseResume/approve.jpg';
        break;

      case 'PENDING':
        this.title = 'La transacción está en proceso de verificación.';
        this.subtitle = 'Este proceso suele tardar algunos minutos, tan pronto recibamos noticias nos comunicaremos contigo';
        this.imageSource = '../../static/purchaseResume/pending.png';
        break;

      default:
        this.title = 'Ha ocurrido un problema con tu transaccion';
        this.subtitle = 'Intenta realizar el pago de nuevo, si el problema persiste comunicate con tu entidad bancaria.';
        this.imageSource = '../../static/purchaseResume/error.png';
        break;
      }
      console.log(requestData);
    } catch (error) {
      console.log(error);
      // this.$router.push('notfound');
    }
  },
  methods: {
  },
  components: {
  },
};
</script>

<style lang="sass" scoped>
@import '../stylesheets/global.sass'

h1
  font-size: 40px

.row
  +flex(0, 0)
  min-height: 100vh

  > *
    box-sizing: border-box

.w-70
  width: 70%

.w-30
  width: 30%

.fix__products
  height: 100vh
  background: $color-black-soft
  color: white

.pad
  padding: 30px

.center--responsive
  +flex(0, 0)

.frow
  +flex(0, 0)
  width: 100%
  flex-wrap: wrap

.state-image
  width: 25%
  height: 20%

.center
  justify-content: center
  margin: 30px auto;

.container
  border-color: black
  margin: auto;
  text-align: center;

.title
  font-size: 24px
  @extend %title

.title--responsive
  font-size: 4vw

.input--medium
  margin: 2%
  flex: 1 0 220px

.input--small
  margin: 2%
  flex: 1 0 160px

.inline
  display: inline

.help__container
  display: flex
  justify-content: space-between

.help__info
  font-size: 13px
  max-width: 380px
  white-space: pre-line

@media (max-width: 820px)
  .center--responsive
    align-items: center

@media (max-width: 550px)
  .row
    flex-flow: column

  .w-30, .w-70
    height: auto
    width: 100%

</style>
