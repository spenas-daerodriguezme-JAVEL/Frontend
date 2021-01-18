<template>
  <div class="container">
    <div class="row">
    <div class="double-column">
       <h1>Orden # {{publicId}}</h1>
    <div><b>Fecha:</b> {{orderDate}}</div>
    <div><b>Estado:</b> {{states[orderStatus]}}</div>

    <table>
      <thead>
        <tr>
          <th>
          </th>
          <th>
            PRODUCTO
          </th>
          <th>
            PRESENTACIÓN
          </th>
          <th>
            CANTIDAD
          </th>
          <th>
            PRECIO
            </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>
          <img src="../../assets/productos/QUITAOXIDO.jpg" width="150px">
          </td>
          <td>
            {{product.productName}}
          </td>
          <td>
            {{product.capacity}}
          </td>
          <td>
            {{product.qty}}
          </td>
          <td>
            $ {{formatPrice(product.price * product.qty)}}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="row-left">
      <div class="left-column">
        <div class="details-wrapper">
          <div class="column-details">
            <span><b>SUBTOTAL</b></span>
            <span><b>ENVÍO</b></span>
            <span><b>IVA</b></span>
            <span><b>TOTAL</b></span>
          </div>
          <!-- <span class="column-details">SUBTOTAL</span> -->
          <div class="column-details">
            <span>$ {{getSubtotal}}</span>
            <span>$ 0</span>
            <span>$ {{getIVA}}</span>
            <span>$ {{formatPrice(orderPrice)}}</span>
          </div>

        </div>
      </div>
    </div>
      </div>

    <div class="column">
      <h2>Dirección de envío</h2>
      <span>{{userInfo.name}}</span>
      <span>{{userInfo.telephone}}</span>
      <span>{{userInfo.address}}</span>
      <span>{{userInfo.state}}</span>
      <span>{{userInfo.city}}</span>

    </div>
    </div>
    <div class="row">
      <router-link class="btn" :to="routerUrl" style="max-width: 100px">Volver</router-link>
    </div>
    <div class="blank-space"></div>
  </div>
</template>

<script>
import VAPI from '../../http_common';
import util from '../../util/index';

export default {
  data() {
    return {
      products: [],
      userInfo: {},
      publicId: 0,
      orderDate: '',
      orderStatus: '',
      orderPrice: 0,
      states: {
        PENDING: 'Pendiente',
        DECLINED: 'Rechazado',
        APPROVED: 'Aprobado',
      },
      routerUrl: '',
    };
  },
  async created() {
    const parameter = this.$route.params.id;
    const jwt = localStorage.getItem('jwt');
    const jsonJWT = util.parseJwt(jwt);
    // eslint-disable-next-line no-underscore-dangle
    const userId = jsonJWT._id;
    const order = await VAPI.get(`/api/order/byId/${parameter}`, {
      headers: {
        id: userId,
        'x-auth-token': localStorage.getItem('jwt'),
      },
    });
    console.log(order);
    this.products = order.data.products;
    this.userInfo = order.data.user;
    this.publicId = order.data.publicId;
    this.orderDate = order.data.date;
    this.orderStatus = order.data.status;
    this.orderPrice = order.data.price;

    if (this.$route.meta.isAdmin) {
      this.routerUrl = '/admin';
    } else {
      this.routerUrl = '/my-account';
    }
  },

  computed: {
    getIVA() {
      const price = (this.orderPrice * 0.19).toFixed(0);
      return this.formatPrice(price);
    },
    getSubtotal() {
      const price = (this.orderPrice * 0.81).toFixed(0);
      return this.formatPrice(price);
    },
  },
  methods: {
    formatPrice(price) {
      const needFormat = price / 1000 >= 1;
      if (needFormat) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      }
      return price;
    },
  },
};
</script>

<style lang='sass'>
@import '../../stylesheets/global.sass'
.container
  margin: 60px;

.row
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

.column
  display: flex;
  margin-left: 40px;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

.column-details
  display: flex;
  margin-left: 40px;
  flex-direction: column;

  flex: 1;

.row-left
  display: flex;
  justify-content: space-between;

.left-column
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  flex-basis: 100%;
  flex: 1;

.details-wrapper
  display: flex;
  justify-content: space-between;

.double-column
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2;

.blank-space
  min-height: 40px
</style>
