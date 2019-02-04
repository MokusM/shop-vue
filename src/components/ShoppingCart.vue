<template>
  <router-link to="/checkout">Cart ({{ numInCart }})</router-link>
</template>
<script>
  export default {
    name: 'shoppingCart',
    computed: {
      inCart() {
        return this.$store.getters.inCart;
      },
      numInCart() {
        return this.inCart.length;
      },
    },
  };

</script>
