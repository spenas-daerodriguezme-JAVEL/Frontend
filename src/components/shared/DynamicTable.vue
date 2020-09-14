<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(header, idx) in headers" :key="idx">{{header.charAt(0).toUpperCase() + header.slice(1)}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in paginatedRows" :key="`employee-${index}`">
          <td v-for="(header, idx) in headers" :key="idx" v-html="highlightMatches(row[header])"></td>
        </tr>
      </tbody>
    </table>
    <input type="text" placeholder="Filter by department or employee" v-model="filter" />
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
      pageSize: 8,
      currentPage: 1,
    };
  },
  props: {
    headers: Array,
    data: Array,
  },

  computed: {
    filteredRows() {
      return this.data.filter((row) => {
        const searchTerm = this.filter.toLowerCase();
        let booleanExpression = false;

        this.headers.forEach((header) => {
          const data = row[header].toString().toLowerCase();
          booleanExpression = booleanExpression || data.includes(searchTerm);
        });

        return booleanExpression;
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
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, 'ig');
      return text.replace(
        re,
        (matchedText) => `<strong>${matchedText}</strong>`,
      );
    },
    nextPage() {
      if (this.currentPage * this.pageSize < this.rows.length) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>

<style>
</style>
