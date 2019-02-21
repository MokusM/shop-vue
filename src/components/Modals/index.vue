<template>
    <div v-if="list.length > 0">
      <div class="modal-backdrop" @click="cancelModal()"></div>
        <modal-add
            :success="successModal"
            :cancel="cancelModal"
            :modal="modal"
            v-if="modal.type==='addSnippet'"
        />

        <modal-sign-in
          :success="successModal"
            :cancel="cancelModal"
            :modal="modal"
            v-if="modal.type==='signIn'"
        />

        <modal-sign-up
          :success="successModal"
            :cancel="cancelModal"
            :modal="modal"
            v-if="modal.type==='signUp'"
        />
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
      ModalAdd: () => import('./ModalAdd.vue'),
      ModalSignIn: () => import('./ModalSignIn.vue'),
      ModalSignUp: () => import('./ModalSignUp.vue')
  },
  computed: {
    ...mapState("modals", ["list"]),

    modal() {
      if (this.list.length === 0) return false;
      return this.list[this.list.length - 1];
    }
  },

  methods: {
    ...mapMutations("modals", ["closeModal"]),
    cancelModal() {
      let cancel = this.modal.cancel || function() {};
      cancel();
      this.closeModal(this.list.length - 1);
    },

    successModal(item) {
      let success = this.modal.success || function() {};
      this.closeModal(this.list.length - 1);
      success(item);
    }
  }
};
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1111;
  }
  .icon-close{
    position: relative;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  .icon-close:before{
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 22px;
    transform: rotate(45deg);
    background-color: #fff;
    top: 0;
    right: 9px;
  }
  .icon-close:after{
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 22px;
    transform: rotate(-45deg);
    background-color: #fff;
    top: 0;
    left: 8px;
  }
  .btn{
    width: 220px;
    height: 46px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    background-color: #2b2d3c;
  }
</style>
