<template>
    <header class="title">
        <router-link to="/">Logo Magazine</router-link>
        <router-link to="/checkout">Cart ({{ cartCount }})</router-link>
        <router-link to="/">Login</router-link>
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
        ...mapState(['cartCount'])
        },
        methods: {

        }
    }
</script>

<style>

</style>