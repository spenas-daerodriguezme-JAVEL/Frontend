<template>
  <div>
    <DynamicTable :headers="headers" :data="getOrdersData" href="/order" />
  </div>
</template>

<script>
import DynamicTable from '../shared/DynamicTable.vue';
import VAPI from '../../http_common';

export default {
  components: {
    DynamicTable,
  },
  data() {
    return {
      headers: [],
      data: [],
      statusEquivalences: {
        PENDING: 'Pendiente',
        DECLINED: 'Denegado',
        APPROVED: 'Aprobado',
      },
    };
  },
  async created() {
    const jwt = localStorage.getItem('jwt');
    const jsonJWT = this.parseJwt(jwt);
    let retrieveUrl;
    if (jsonJWT.isAdmin) {
      retrieveUrl = '/api/order/allOrders';
      this.headers = [
        'Orden',
        'Numero de identificacion',
        'Fecha',
        'Estado de orden',
        'Total',
      ];
    } else {
      // eslint-disable-next-line no-underscore-dangle
      retrieveUrl = `/api/order/byUserId/${jsonJWT._id}`;
      this.headers = ['Orden', 'Fecha', 'Estado de orden', 'Total'];
    }
    const res = await VAPI.get(retrieveUrl,
      { headers: { 'x-auth-token': jwt }}
    );
    if (res.status === 200) {
      this.data = res.data;
    }
  },
  computed: {
    getOrdersData() {
      return this.data.map((order) => ({
        link: order.id,
        Orden: order.publicId.toString(),
        'Numero de identificacion': order.userIdentification.toString(),
        Fecha: order.date.toString(),
        'Estado de orden': this.statusEquivalences[order.status],
        Total: `$ ${this.formatPrice(order.price.toString())}`,
      }));
    },
  },
  methods: {
    parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join(''),
      );

      return JSON.parse(jsonPayload);
    },

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

<style lang="sass" scoped>

</style>
