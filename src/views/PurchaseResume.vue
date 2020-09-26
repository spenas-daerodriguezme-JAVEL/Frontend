<template>
  <div class="checkout">
    <div class="row">
     <div class="w-30 fix__products center--responsive"
      style="padding: 30px" ref="column">
        <h1 ref="title1" class="title--responsive">Resumen de transacción</h1>
      </div>

      <div class="w-70 pad" ref="column2">
        <h1 ref="title2">{{title}}</h1>
        <p ref="subtitle">{{subtitle}}<p>

        <div ref="resume" style="display: flex;">
          <div class="center">

            <div >
        <h3 class="inline">Tipo de pago:</h3>
        <p class="inline">{{paymentType}}</p>
            </div>
            <div >
        <h3 class="inline">Metodo de pago:</h3>
        <p class="inline">{{paymentMethod}}</p>
            </div>
            <div >
        <h3 class="inline">Cantidad:</h3>
        <p class="inline">{{amount}} pesos colombianos.</p>
            </div>
            <div >
        <h3 class="inline">Tasa de impuestos:</h3>
        <p class="inline">{{taxes}}</p>
            </div>
            <div >
        <h3 class="inline">Estado de la transaccion:</h3>
        <p class="inline">{{transactionState}}</p>
            </div>
            <div >
        <h3 class="inline">Fecha de la transaccion:</h3>
        <p class="inline">{{date}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import Cart from '../components/shared/Cart.vue';
import InputBase from '../components/InputBase.vue';

export default {
  data() {
    return {
      title: '',
      subtitle: '',
      paymentState: '',
      paymentType: '',
      paymentMethod: '',
      amount: '',
      taxes: '',
      date: '',
    };
  },
  mounted() {
    const title = this.$refs.title1;
    const welcome = this.$refs.title2;
    const sub = this.$refs.subtitle;
    const resum = this.$refs.resume;

    TweenMax;

    const tl = new TimelineLite();

    tl
      .from(title, 1.5, {
        x: 100,
        opacity: 0,
      })
      .delay(0.05)
      .from(welcome, 0.5, {
        y: 90,
        opacity: 0,
      })
      .delay(0.05)
      .from(sub, 0.5, {
        y: 90,
        opacity: 0,
      })
      .delay(0.05)
      .from(resum, 0.5, {
        y: 90,
        opacity: 0,
      });

    const { column } = this.$refs;
    const { column2 } = this.$refs;
    const bounds = column.getBoundingClientRect();

    Object.assign([column.style, column2.style], {
      height: `calc(100vh - ${bounds.top}px)`,
    });
    this.receiveInformation();
  },
  methods: {
    receiveInformation() {
      const orderId = this.$route.query.referenceCode;
      this.paymentType = this.$route.query.lapPaymentMethodType;
      this.paymentMethod = this.$route.query.lapPaymentMethod;
      this.transactionState = this.$route.query.lapTransactionState;
      this.amount = this.$route.query.TX_VALUE;
      this.taxes = this.$route.query.TX_TAX;
      this.date = this.$route.query.processingDate;
      const transState = this.$route.query.lapTransactionState;

      if (transState === 'DECLINED') {
        this.title = 'Ha ocurrido un problema con tu transaccion';
        this.subtitle = 'Intenta realizar el pago de nuevo, si el problema persiste comunicate con tu entidad bancaria. Esto es todo lo que sabemos por ahora:';
        this.transactionState = 'Reprobada';
      } else if (transState === 'APPROVED') {
        this.title = 'Gracias por tu compra!';
        this.subtitle = 'A continuación un resumen de la transacción:';
        this.transactionState = 'Aprobada';
      }

      // ?merchantId=508029&merchant_name=Test+PayU+Test+comercio&merchant_address=Av+123+Calle+12&telephone=7512354&merchant_url=http%3A%2F%2Fpruebaslapv.xtrweb.com&transactionState=6&lapTransactionState=DECLINED&message=DECLINED&referenceCode=api123434&reference_pol=853811209&transactionId=9953ddeb-4ab8-4a47-b1a8-dab7c758116e&description=Test+PAYU&trazabilityCode=&cus=&orderLanguage=es&extra1=&extra2=&extra3=&polTransactionState=6&signature=b44143a874bdc93a64aa46ea1f6fd6ed&polResponseCode=5&lapResponseCode=DECLINED_TEST_MODE_NOT_ALLOWED&risk=&polPaymentMethod=450&lapPaymentMethod=VISA&polPaymentMethodType=2&lapPaymentMethodType=CREDIT_CARD&installmentsNumber=1&TX_VALUE=20000.00&TX_TAX=3193.00&currency=COP&lng=es&pseCycle=&buyerEmail=test%40test.com&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=&processingDate=2020-09-02
    },
  },
  components: {
    InputBase,
    Cart,
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
  width: 70%

.fix__products
  width: 30vw
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

.center
  justify-content: center
  margin: 30px auto;

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
