<template>
  <main class="main">
    <div class="login-form">
      <h2 class="heading-secondary ma-bt-lg">Log into your account</h2>
      <form action="#" class="form form--login" @submit.prevent="login">
        <div class="form__group">
          <label for="email" class="form__label">Email address</label>
          <input
            type="email"
            id="email"
            class="form__input"
            placeholder="you@example.com"
            v-model="email"
            required
          />
        </div>

        <div class="form__group">
          <label for="password" class="form__label">Password</label>
          <input
            type="password"
            id="password"
            class="form__input"
            placeholder="********"
            v-model="password"
            minlength="8"
            required
          />
        </div>

        <div class="form__group">
          <button type="submit" class="btn btn--green">Login</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    validateInput: function () {
      if (this.email === '' || this.password === '') {
        this.showAlert('error', 'You cannot leave any field empty');
        return false;
      }

      return true;
    },

    login: function () {
      if (this.validateInput() !== false) {
        axios
          .post(`${this.$store.state.server.requestUri}/users/login`, {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            const accessToken = res.data.token;
            const user = res.data.data.user;
            this.$store.commit('login', {
              accessToken,
              user,
            });

            this.showAlert('success', 'Login successful');
            this.$router.push('/home');
          })
          .catch((error) => {
            this.showAlert('error', error.response.data.message);
          });
      }
    },
  },

  created() {
    // console.log(this.$cookies.get('jwt'));
  },
};
</script>

<style scoped></style>
