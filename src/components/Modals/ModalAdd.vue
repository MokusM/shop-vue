<template>
    <div class="modal">
        <button type="button" class="btn btn-close" @click="cancel">
            <i class="far fa-times-circle"></i>
        </button>
        <div class="modal-body">
            <div class="b-modal__header">
                <h3>Вы успешно зарегистрировались</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    
    export default {
        props: {
            success: Function,
            cancel: Function,
            modal: Object
        }
    }
</script>

<style>

</style>