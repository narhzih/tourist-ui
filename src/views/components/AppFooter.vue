<template>
  <div class="footer">
    <div class="footer__logo">
      <img
        :src="require('/src/assets/img/logo-green-round.png')"
        alt="Natours logo"
      />
    </div>
    <ul class="footer__nav">
      <li><a href="#">About us</a></li>
      <li><a href="#">Download apps</a></li>
      <li><a href="#">Become a guide</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <p class="footer__copyright">
      Built by Olawale Omosekeji &copy; by Jonas Schmedtmann. All rights
      reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped></style>
