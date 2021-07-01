<template>
  <header class="header">
    <nav class="nav nav--tours">
      <a href="#" @click.prevent="navigate" class="nav__el">All tours</a>
    </nav>
    <div class="header__logo">
      <img
        :src="require('/src/assets/img/logo-white.png')"
        alt="Natours logo"
      />
    </div>
    <nav :class="{ active: toggled === true }" class="nav nav--user">
      <!--      <a href="#" class="nav__el" v-if="isLoggedIn">My bookings</a>-->
      <router-link to="/account/settings" class="nav__el" v-if="isLoggedIn">
        <img
          :src="`${userImageBaseUrl}/${user.photo}`"
          :alt="user.name"
          class="nav__user-img"
        />
        <span>{{ filteredUsername }}</span>
      </router-link>
      <router-link to="/auth/login" class="nav__el" v-if="!isLoggedIn"
        >Log in</router-link
      >
      <router-link
        to="/auth/signup"
        class="nav__el nav__el--cta"
        v-if="!isLoggedIn"
        >Sign up</router-link
      >
      <a
        @click.prevent="logout"
        href="#"
        class="nav__el nav__el--cta"
        v-if="isLoggedIn"
        >Log out</a
      >
    </nav>
    <input type="checkbox" id="header__checkbox" />
    <label
      for="header__checkbox"
      class="header__crumb"
      :class="{ close: toggled === true }"
      @click="toggle"
    >
      <span class="header__crumb--top"></span>
      <span class="header__crumb--mid"></span>
      <span class="header__crumb--bot"></span>
    </label>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppHeader',
  data() {
    return {
      toggled: false,
    };
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled;
    },
    navigate: function () {
      this.$router.push('/home');
    },

    logout: function () {
      axios
        .get(`${this.$store.state.server.requestUri}/users/logout`)
        .then(() => {
          this.$store.commit('logout');
          this.showAlert('success', 'Logout successful');
          this.$router.push('/home');
        })
        .catch((err) => {
          this.showAlert('error', err.response.data.message);
        });
    },
  },
};
</script>

<style scoped></style>
