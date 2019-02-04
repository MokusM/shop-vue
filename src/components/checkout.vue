<template>
  <div class="checkout-box">
    <button class="product-remove" v-if="hasProduct()" @click="remove(inCart.id)">remove all</button>
    <ul class="checkout-list">
      <li v-for="(product, index) in inCart.slice().reverse()" :key="index" class="checkout-product">
        <img :src="product.image" alt="" class="product-image">
        <h3 class="product-name">{{ product.name }}</h3>
        <span class="product-price">R$ {{ product.price }},00 </span>
        <button class="product-remove" @click="remove(inCart.id)">X</button>
      </li>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./">Back to list of products</router-link>

    </div>
    <h3 class="total" v-if="hasProduct()">
      Total: R$ {{ totalPrice() }}, 00
    </h3>-
  </div>
</template>

<script>
  export default {
    computed: {
        inCart() {
            return this.$store.getters.getInCart
        }
    },
    methods: {
      hasProduct() {
        return this.inCart.length > 0;
      },
      totalPrice() {
        return this.inCart.reduce((current, next) =>
          current + next.price, 0);
      },
      remove(item){
        this.$store.dispatch('removeInCart', item);
      }
    },
   
  };

</script>
<style>
    .checkout-list{
        margin: 0 -10px;
    }
    .checkout-product{
        display: inline-block;
        vertical-align: top;
        margin: -4px;
        width: 30%;
        padding: 0 10px;
        margin-bottom: 35px;
    }
    .product-image{
        height: 200px;
        display: block;
        margin: 0 auto;
    }
</style>
