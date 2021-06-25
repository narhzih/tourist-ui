<template>
  <app-header></app-header>
  <router-view :key="$route.fullPath"></router-view>
  <app-footer></app-footer>
</template>

<script>
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

export default {
  name: 'Base',
  components: { AppFooter, AppHeader },
};
</script>

<style scoped></style>
