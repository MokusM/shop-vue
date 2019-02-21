<template>
  <div class="modal">
    <button type="button" class="btn btn-close" @click="cancel">
      <i class="icon-close"></i>
    </button>
    <div class="modal-header">
      Войти
    </div>
    <div class="modal-body">
      <form  @submit.prevent="login">
        <input class="comment__input" placeholder="Логин" :class="{ 'error': showError && !login }" v-model="login"
          required>
        <input class="comment__input" placeholder="Пароль" :class="{ 'error': showError && !password }" type="password"
          v-model="password" required>
        <button class="btn" type="submit">
          Войти
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  
  import { mapState, mapActions } from "vuex";
  export default {
    name: "ModalSignIn",

    props: {
      success: Function,
      cancel: Function,
      modal: Object
    },

    data() {
      return {
        login: '',
        password: '',
        showError: false
      }
    },

    methods: {
      ...mapActions(["signUp"]),
      /*submit() {
        this.signUp({ login: this.login, password: this.password, name: this.name }).then(() =>
          this.cancel()
        );
      }*/
     
      login: function () {
        let login = this.login 
        let password = this.password
        this.$store.dispatch('login', { login, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    
      
    }
  };
</script>

<style>
  .modal {
    background: #ffffff;
    box-shadow: 0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.27);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 0;
    padding: 10px 20px;
    width: 90%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1112;


  }

  .modal .btn-close {
    position: absolute;
    width: 46px;
    height: 46px;
    top: 0;
    right: 0;
    padding: 0;
    background: #2b2d3c;
    border-radius: 0;
  }

  .btn-close:hover {
    background: #4aae9b;
    color: white;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    padding: 15px 0;
    text-align: left;
    margin-right: 50px;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4aae9b;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;

  }

  .comment__input,
  .comment__textarea {
    display: block;
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #2196f3;
  }

  .comment__textarea {
    height: auto;
    resize: none;
  }

  .code__actions {
    display: flex;
    align-items: center;
  }

  .cdn__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .code__actions {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .code__actions .btn {
    color: #2196f3;
    margin-right: 5px;
  }

  .code__actions .btn:hover {
    color: #fff;
  }

  .code__actions .btn.btn-active {
    color: #fff;
  }
</style>