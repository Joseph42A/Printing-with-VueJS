<script setup>
import { DUMMY_DATA } from '@/DUMMY';

const printInvoice = () => {
  window.open(
    '/print-invoice',
    '',
    'menubar=no, location=yes,rel=noreferrer, left=200,top=200, status=0'
  );
};
</script>

<template>
  <main>
    <div style="display: flex">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <h3>VueJS Printing...</h3>
        <button @click="printInvoice">Print</button>
      </div>
    </div>
    <div id="printContainer" style="background-color: white">
      <table style="width: 100%">
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Amount</th>
            <th>Total Price</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in DUMMY_DATA" :key="item.id">
            <td>{{ item.product }}</td>
            <td>{{ item.unitPrice }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.totalPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
button {
  cursor: pointer;
}
#printContainer {
  table {
    width: 100%;
    border-collapse: collapse;
    break-inside: auto;
    page-break-inside: auto;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  table td,
  table th {
    padding: 1.5mm;
    border: 2px solid #ccc;
    border: 2px solid #ccc;
    vertical-align: top;
    font-size: inherit;
  }
  table td.invoice-header {
    border: none;
  }

  table th {
    text-align: left;
    vertical-align: bottom;
    color: rgb(0, 0, 30);
    background-color: #04aa6d;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  thead {
    display: table-header-group;
  }
  tfoot {
    display: table-footer-group;
  }
  tr {
    page-break-inside: avoid;
    page-break-after: auto;
  }
  table td,
  table th,
  table tr {
    /* Prevent elements from being split across pages in paginated media (like print) */
    break-inside: avoid;
    /* Automatically insert a page break after the element, if needed */
    break-after: auto;
  }
}
</style>
