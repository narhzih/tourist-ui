<template>
  <main class="main">
    <div class="user-view">
      <sidebar></sidebar>

      <div class="user-view__content">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from './component/Sidebar';
export default {
  name: 'AccountBase',
  components: { Sidebar },
};
</script>

<style scoped></style>
