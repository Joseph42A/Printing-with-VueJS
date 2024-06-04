<script setup>
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
  </main>
</template>

<style scoped>
button {
  cursor: pointer;
}
</style>
