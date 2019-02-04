<template>
  <div id="app">
      <div class="title">
          <router-link to="/">Logo Magazine</router-link>
          <ShoppingCart />
        </div>

    <transition name="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import ShoppingCart from './components/ShoppingCart.vue';
  export default {
    name: 'app',
    computed: {
      inCart() { return this.$store.getters.inCart; },
    },
    components: {
      ShoppingCart
    }
  }

</script>

<style>
  .title{
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 25px;
  }
</style>
