<template>
  <div>
    <DynamicTable :headers="headers" :data="getOrdersData" href="/order" />
  </div>
</template>

<script>
import DynamicTable from '../shared/DynamicTable.vue';
import util from '../../util/index';

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
    const jsonJWT = util.parseJwt(jwt);
    // eslint-disable-next-line no-underscore-dangle
    const userId = jsonJWT._id;
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
    const res = await this.$http.get(retrieveUrl,
      {
        headers: {
          id: userId,
          'x-auth-token': localStorage.getItem('jwt'),
        },
      });
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
