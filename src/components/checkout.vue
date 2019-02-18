<template>
  <div class="checkout-box">
    <div class="checkout-box-title">
      <button class="product-remove" v-if="hasProduct()" @click="removeAllInCart(inCart.id)">remove all</button>
      <h3 class="total" v-if="hasProduct()">
        Total: $ {{ totalPrice }}, 00
      </h3>
    </div>
    <ul class="checkout-list">
      <li v-for="(product, index) in inCart.slice().reverse()" :key="index" class="checkout-list__item">
        <div class="checkout-list__row">
          <img :src="product.image" alt="" class="checkout-list__image">
          <h3 class="checkout-list__name">{{ product.name }}</h3>
          <span class="checkout-list__price">R$ {{ product.price }},00 </span>
          <button class="checkout-list__remove" @click="removeFromCart(product)">X</button>
          <div class='checkout-quantity'>
            <div class="checkout-quantity__button" @click="quantityMinus(product)">-</div>
            <div class="checkout-quantity__count">{{product.quantity}}</div>
            <div class="checkout-quantity__button" @click="quantityPlus(product)">+</div>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./">Back to list of products</router-link>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapState(['inCart']), 
      totalPrice() {
        let total = 0;
        for (let item of this.$store.state.inCart) {
          total += item.totalPrice;
        }
        return total.toFixed(2);
      }
    },
    methods: {
      hasProduct() {
        return this.inCart.length > 0;
      },
      ...mapMutations(['removeFromCart','removeAllInCart','quantityMinus','quantityPlus']),      
    }
  };
</script>
<style>
  .checkout-box {
    padding: 25px 0;
  }

  .product-remove {
    display: block;
    width: 150px;
    height: 40px;
    text-align: center;
    padding: 0 15px;
    background-color: #ccc;
    text-transform: uppercase;
    color: #fff;
  }

  .checkout-box-title {
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-block-end: 25px
  }

  .total {
    font-size: 25px;
    text-transform: uppercase;
  }

  .checkout-list {
    margin: 0 -10px;
  }

  .checkout-list__item {
    display: inline-block;
    vertical-align: top;
    margin: -4px;
    width: 20%;
    padding: 0 10px;
    margin-bottom: 35px;
  }

  .checkout-list__row {
    background-color: #fff;
    padding: 20px 15px;
    position: relative;
  }

  .checkout-list__image {
    height: 110px;
    display: block;
    margin: 0 auto 15px;
  }

  .checkout-list__name {
    display: block;
    margin-bottom: 10px;
  }

  .checkout-list__remove {
    position: absolute;
    right: 15px;
    top: 15px;
    background-color: #ccc;
    width: 20px;
    height: 20px;
    color: #fff;
  }

  .checkout-message h3 {
    text-transform: uppercase;
    font-size: 20px;
    margin-block-end: 10px
  }

  .checkout-quantity {
    display: flex;
  }

  .checkout-quantity__button {
    display: block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #ccc;
    line-height: 20px;
  }

  .checkout-quantity__count {
    display: block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #000;
    margin: 0 6px;
    line-height: 20px;
  }

</style>
