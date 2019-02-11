<template>
  <div>

    <product-list></product-list>

  </div>
</template>

<script>
  import ProductList from './ProductList.vue';

  export default {
    name: 'Home',
    components: {
      'product-list': ProductList
    }
  }

</script>
<style scoped>

</style>
