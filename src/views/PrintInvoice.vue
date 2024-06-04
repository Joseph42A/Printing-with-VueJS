<script setup lang="ts">
import { DUMMY_DATA } from '@/DUMMY';
import { ref, watch } from 'vue';

/**
 * This Component is only for printing
 * Design  in vuejs and print what you see
 */

const imageLoaded = ref(false);

// Once header image loaded print & close window
watch(imageLoaded, () => {
  window.print();
  window.close();
});
</script>

<template>
  <Teleport to="body">
    <div class="modal" style="position: absolute; top: 0; left: 0; width: 100%">
      <div id="printContainer" style="background-color: white">
        <table style="width: 100%">
          <thead>
            <tr>
              <td colspan="7" class="invoice-header">
                <div class="header-container">
                  <div>
                    <img
                      width="100"
                      src="@/assets/logo.svg"
                      @load="imageLoaded = true"
                    />
                  </div>
                  <h1>Your Company</h1>
                  <h3>Your Address</h3>
                </div>
              </td>
            </tr>
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
    </div>
  </Teleport>
</template>

<style>
/* General print styles here  */
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
/* Apply styles only when the document is being printed */
@media print {
  /* Apply styles to the printed page */
  @page {
    size: auto;
    /* Set the page margins, hide default header and footer */
    margin: 0.15in 0.3in 0.15in 0.3in !important;
  }

  body {
    /* Ensure that colors are printed exactly as they appear on the screen */
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
}
</style>
