<template>
    <header class="title">
        <router-link to="/">Logo Magazine</router-link>
        <router-link to="/checkout">Cart ({{ cartCount }})</router-link>
        <button class="btn" @click="showLogin()" v-if="!isLoggedIn" style="margin: 0 10px" >Registartion</button>
        <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </header>
</template>

<script>
    import { mapState , mapMutations } from 'vuex'
    export default {
        computed: {
        ...mapState(['cartCount']),
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
        },
        methods: {
            ...mapMutations('modals', ['openModal']),
            showLogin () {
                this.openModal({ type: 'signUp' })
            },
            logout: function () {
                this.$store.dispatch('logout')
                .then(() => {
                this.$router.push('/')
                })
            }
        }
    }
</script>

<style>

</style>