<template>
  <div>
    <DynamicTable :headers="headers" :data="rows"/>
  </div>
</template>

<script>
import DynamicTable from '../shared/DynamicTable.vue';

export default {
  data() {
    return {
      headers: ['department', 'employees'],
      rows: [
        {
          department: 'Accounting',
          employees: 'Bradley banks, Smiths',
        },
        {
          department: 'Human Resources',
          employees: 'Bradley banks, Smiths',
        },
        {
          department: 'Production',
          employees: 'Bradley banks, Smiths',
        },
        {
          department: 'Research and Development',
          employees: 'Bradley banks, Smiths',
        },
        {
          department: 'Sales and Marketing',
          employees: 'Bradley banks, Smiths',
        },
        {
          department: 'Sales and Marketing',
          employees: 'Bradley banks, Smiths',
        },
        {
          department: 'Sales and Marketing',
          employees: 'Bradley banks, jajahs',
        },
      ],
    };
  },
  components: {
    DynamicTable,
  },
};
</script>

<style lang="sass" scoped>
</style>
