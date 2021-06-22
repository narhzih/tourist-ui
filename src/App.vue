<template>
  <app-header></app-header>
  <router-view />
  <app-footer></app-footer>
</template>
<script>
import AppHeader from './views/components/AppHeader';
import AppFooter from './views/components/AppFooter';
export default {
  components: { AppFooter, AppHeader },
};
</script>

<style lang="scss">
@import './assets/css/style.css';
</style>
