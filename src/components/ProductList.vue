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
  import { mapState } from 'vuex'
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',   
    components: {
      'product-item': ProductItem
    },    
    computed: {
      ...mapState(['products'])
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
