<template>
  <main class="main">
    <div class="login-form">
      <h2 class="heading-secondary ma-bt-lg">Log into your account</h2>
      <form action="#" class="form form--login">
        <div class="form__group">
          <label for="email" class="form__label">Email address</label>
          <input
            type="email"
            id="email"
            class="form__input"
            placeholder="you@example.com"
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
            minlength="8"
            required
          />
        </div>

        <div class="form__group">
          <button class="btn btn--green">Login</button>
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
        alert('You cannot leave any input empty');
        return false;
      }

      return true;
    },

    login: function () {
      if (this.validateInput() !== false) {
        axios
          .post(`http://localhost:3000/api/v1/users/login`, {
            email: this.email,
            password: this.password,
          })
          .then((res) => console.log(res.data.data.data))
          .catch((err) => console.log(err.response));
      }
    },
  },
};
</script>

<style scoped></style>
