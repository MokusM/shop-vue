<template>
  <div>
    <div class="products">      
      <template v-for="product in products">        
        <product-item :product="product"></product-item>
      </template>
    </div>
  </div>
</template>
<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',   
    computed: {
      products() {
        return this.$store.getters.getProducts
      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>
<style>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
    margin: 0 -10px;
  }

</style>
