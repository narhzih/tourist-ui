<template>
  <main class="main">
    <div class="login-form">
      <h2 class="heading-secondary ma-bt-lg">Create your account!</h2>
      <form action="#" class="form form--login" @submit.prevent="signUp">
        <div class="form__group">
          <label for="name" class="form__label">Your name</label>
          <input
            type="text"
            id="name"
            class="form__input"
            placeholder="Olawale Omosekeji"
            v-model="name"
            required
          />
        </div>

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
          <label for="c_password" class="form__label">Confirm password</label>
          <input
            type="password"
            id="c_password"
            class="form__input"
            placeholder="********"
            v-model="passwordConfirm"
            minlength="8"
            required
          />
        </div>

        <div class="form__group">
          <button type="submit" class="btn btn--green">Sing Up</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
    };
  },

  methods: {
    validateInput: function () {
      if (
        this.email === '' ||
        this.password === '' ||
        this.name === '' ||
        this.passwordConfirm === ''
      ) {
        this.showAlert('error', 'You cannot leave any field empty');
        return false;
      } else {
        if (this.password !== this.passwordConfirm) {
          {
            this.showAlert('error', 'Passwords do not match');
            return false;
          }
        }

        if (this.password.length < 8) {
          this.showAlert(
            'error',
            'Password length cannot be less than 8 characters'
          );
          return false;
        }
      }

      return true;
    },

    signUp: function () {
      if (this.validateInput() === true) {
        axios
          .post(`${this.$store.state.server.requestUri}/users/signup`, {
            name: this.name,
            email: this.email,
            password: this.password,
            passwordConfirm: this.passwordConfirm,
          })
          .then((res) => {
            console.log(res.data.data.data);
            console.log(this.$cookies.get('jwt'));
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    },
  },

  created() {
    console.log(this.$store.state.server.requestUri);
  },
};
</script>

<style scoped></style>
