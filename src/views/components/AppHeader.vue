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
    <nav class="nav nav--user">
      <!--      <a href="#" class="nav__el" v-if="isLoggedIn">My bookings</a>-->
      <a href="#" class="nav__el" v-if="isLoggedIn">
        <img
          :src="require(`/src/assets/img/users/${user.photo}`)"
          :alt="user.name"
          class="nav__user-img"
        />
        <span>{{ filteredUsername }}</span>
      </a>
      <router-link to="/auth/login" class="nav__el" v-if="!isLoggedIn"
        >Log in</router-link
      >
      <router-link
        to="/auth/signup"
        class="nav__el nav__el--cta"
        v-if="!isLoggedIn"
        >Sign up</router-link
      >
      <a href="#" class="nav__el nav__el--logout" v-if="isLoggedIn">Log out</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    navigate: function () {
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped></style>
