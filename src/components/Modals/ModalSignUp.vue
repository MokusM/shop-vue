<template>
    <div class="modal">
        <button
                type="button"
                class="btn btn-close"
                @click="cancel"
        >
            <i class="far fa-times-circle"></i>
        </button>
        <div class="modal-header">
            Зарегистрироваться
        </div>
        <div class="modal-body">
            <form @submit.prevent.stop="submit()" >

                <input class="comment__input" placeholder="Имя"  v-model="name" required>
                <input class="comment__input" placeholder="Логин" v-model="login" required>
                <input class="comment__input" placeholder="Пароль"  type="password" v-model="password" required>

                <button class="btn btn-plus btn-plus-reverse" type="submit">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ModalSignUp",

  props: {
    success: Function,
    cancel: Function,
    modal: Object
  },
  data() {
    return {
      login: "",
      password: "",
      name: ""
    };
  },

  methods: {
    ...mapActions(["signUp"]),
    submit() {
      this.signUp({ login: this.login, password: this.password, name: this.name }).then(() =>
        this.cancel()
      );
    }
  }
};
</script>

<style >
  
</style>

