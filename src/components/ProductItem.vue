<template>
  <div class="product-item">
    <div class="product">
      <div class="product-link">
        <div class="product__image">
          <img class="img-responsive" :src="product.image" alt="">
        </div>
        <div class="product__description">
          <div class="product__info">
            <small>{{product.company}}</small>
            <h4>{{product.name}}</h4>
          </div>
          <div class="product__price-cart">
            ${{product.price}}
          </div>
        </div>
      </div>
      <div class="product__action">
        <button class="button" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'product-item',
    props: ['product'],
    methods: {
      ...mapMutations(['addToCart'])
    }

  }

</script>

<style>
  .product {
    background: #FFF;
    margin-bottom: 30px;
    position: relative;
    border: 1px solid #f4f4f4;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, .05);
  }

  .product-item {
    display: inline-block;
    vertical-align: top;
    margin-right: -4px;
    width: 20%;
    padding: 0 10px;
    margin-bottom: 15px;
  }

  .product__description {
    margin-top: 25px;
  }




  .product-link {
    display: block;
    color: #3D3D3D;
    padding: 25px;
  }

  .product-link:hover {
    color: #3D3D3D;
    text-decoration: none;
  }

  .product .product__image {
    width: 100%;
  }

  .product__image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 225px;
  }

  .product__description {
    display: flex;
    background: #FFF;
  }

  .product__info {
    flex: 2;
  }

  .product__description small {
    color: #808080;
  }

  .product__description h4 {
    margin: 3px 0 5px 0;
  }

  .product__price-cart {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #51D2B7;
  }

  .product__price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }

  .product__action {
    display: block;
  }

  .product__action button {
    display: block;
    background-color: #ccc;
    text-align: center;
    border: none;
    display: block;
    text-align: center;
    padding: 10px 10px;
    width: 100%;
    transition: all 0.3s;
    text-transform: uppercase;
  }

  .product__action button:hover {
    opacity: 0.6;
  }

</style>
