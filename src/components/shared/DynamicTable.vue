<template>
  <div>
    <input type="text" placeholder="Filtrar en la tabla" v-model="filter" />
    <table>
      <thead>
        <tr>
          <th
            v-for="(header, idx) in headers"
            :key="idx"
          >{{header.charAt(0).toUpperCase() + header.slice(1)}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in paginatedRows" :key="`employee-${index}`">
          <td
            v-for="(header, idx) in headers"
            :key="idx"
            v-html="highlightMatches(row[header], idx, row['link'])"
          ></td>
        </tr>
      </tbody>
    </table>

    <div class="frow">
      <button class="btn btn--paginator" @click="prevPage">Anterior</button>
      <p class="center--info">Página {{currentPage}} de {{totalPages}}</p>
      <button class="btn btn--paginator" @click="nextPage">Siguiente</button>
    </div>
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
    href: String,
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
    totalPages() {
      return Math.round(this.data.length / this.pageSize) + 1;
    },
  },
  methods: {
    highlightMatches(text, idx, link) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists && idx === 0) {
        return `<a href="${this.href}/${link}">${text}</a>`;
      }
      if (!matchExists) return text;
      const re = new RegExp(this.filter, "ig");
      const finalText = text.replace(
        re,
        (matchedText) => `<strong>${matchedText}</strong>`
      );
      if (idx === 0) {
        return `<a href="${this.href}/${link}">${finalText}</a>`;
      }
      return finalText;
    },
    nextPage() {
      if (this.currentPage * this.pageSize < this.data.length) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>

<style lang='sass' scoped>
@import ../../stylesheets/global.sass
input
  width: 100%
  height: 30px
  padding: 0 5px

.frow
  +flex(0, 0)
  justify-content: center
  width: 100%
  flex-wrap: wrap

.btn--paginator
  margin: 15px 20px

.center--info
  vertical-align: middle
</style>
