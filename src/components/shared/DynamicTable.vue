<template>
<div>
 <table>
    <thead>
      <tr>
        <th>Department</th>
        <th>Employees</th>
      </tr>
    </thead>
   <tbody>
      <tr v-for="(row, index) in paginatedRows" :key="`employee-${index}`">
        <td v-html="highlightMatches(row.department)"></td>
        <td v-html="highlightMatches([...row.employees].sort().join(', '))"></td>
      </tr>
    </tbody>
  </table>
  <input type="text"
         placeholder="Filter by department or employee"
         v-model="filter" />
         <p>
<button @click="prevPage">Previous</button>
<button @click="nextPage">Next</button>
</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      filter: '',
      rows: [
        { department: 'Accounting', employees: ['Bradley', 'Jones', 'Alvarado'] },
        { department: 'Human Resources', employees: ['Juarez', 'Banks', 'Smith'] },
        { department: 'Production', employees: ['Sweeney', 'Bartlett', 'Singh'] },
        { department: 'Research and Development', employees: ['Lambert', 'Williamson', 'Smith'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
        { department: 'Sales and Marketing', employees: ['Prince', 'Townsend', 'Jones'] },
      ],
      pageSize: 10,
      currentPage: 1,
    };
  },

  computed: {
    filteredRows() {
      return this.rows.filter((row) => {
        const employees = row.employees.toString().toLowerCase();
        const department = row.department.toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return department.includes(searchTerm)
        || employees.includes(searchTerm);
      });
    },
    paginatedRows() {
      return this.filteredRows.filter((row, index) => {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        if (index >= start && index < end) return true;
        // return false;
      });
    },
  },
  methods: {
    highlightMatches(text) {
      const matchExists = text.toLowerCase().includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, 'ig');
      return text.replace(re, (matchedText) => `<strong>${matchedText}</strong>`);
    },
    nextPage() {
      if ((this.currentPage * this.pageSize) < this.rows.length) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>

<style>

</style>
