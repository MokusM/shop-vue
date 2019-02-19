<template>
    <header class="title">
        <router-link to="/">Logo Magazine</router-link>
        <router-link to="/checkout">Cart ({{ cartCount }})</router-link>
        <button class="btn" @click="showLogin()" style="margin: 0 10px" >Войти</button>
    </header>
</template>

<script>
    import { mapState , mapMutations } from 'vuex'
    export default {
        computed: {
        ...mapState(['cartCount'])
        },
        methods: {
            ...mapMutations('modals', ['openModal']),
            showLogin () {
                this.openModal({ type: 'signIn' })
            },
        }
    }
</script>

<style>

</style>