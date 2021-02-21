<template>
  <div>
  </div>
</template>

<script>
import { EventBus } from './shared/event-bus';

export default {
  mounted() {
    this.logout();
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit('resetCart');
      EventBus.$emit('changed-logged-status', 'logged-out');
      this.$router.push({ name: 'Landing' });
    },
  },
};
</script>

<style>

</style>
