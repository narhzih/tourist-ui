<template>
  <li :class="{ 'side-nav--active': active }">
    <router-link :to="path">
      <svg>
        <use
          v-bind="{
            'xlink:href': '~@/assets/img/icon-style.svg#icon-' + icon,
          }"
        ></use>
      </svg>
      {{ text }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'SidebarLink',
  props: {
    active: {
      default: false,
    },
    icon: String,
    text: String,
    path: String,
  },
};
</script>

<style scoped></style>
