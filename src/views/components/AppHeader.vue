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
      <!--      <a href="#" class="nav__el">My bookings</a>-->
      <!--      <a href="#" class="nav__el">-->
      <!--        <img-->
      <!--          :src="require('/src/assets/img/users/user-1.jpg')"-->
      <!--          alt="User photo"-->
      <!--          class="nav__user-img"-->
      <!--        />-->
      <!--        <span>Jonas</span>-->
      <!--      </a>-->

      <!-- <button class="nav__el">Log in</button>
              <button class="nav__el nav__el--cta">Sign up</button> -->
      <router-link to="/auth/login" class="nav__el">Log in</router-link>
      <router-link to="/auth/signup" class="nav__el nav__el--cta"
        >Sign up</router-link
      >
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
