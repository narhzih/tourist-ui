<template>
  <nav class="user-view__menu">
    <ul class="side-nav">
      <li class="side-nav--active">
        <a href="#">
          <svg>
            <use xlink:href="@/assets/img/icons.svg#icon-settings"></use>
          </svg>
          Settings
        </a>
      </li>

      <li class="">
        <a href="#">
          <svg>
            <use xlink:href="@/assets/img/icons.svg#icon-briefcase"></use>
          </svg>
          My Bookings
        </a>
      </li>

      <li class="">
        <a href="#">
          <svg>
            <use xlink:href="@/assets/img/icons.svg#icon-star"></use>
          </svg>
          My reviews
        </a>
      </li>

      <li class="">
        <a href="#">
          <svg>
            <use xlink:href="@/assets/img/icons.svg#credit-card"></use>
          </svg>
          Billing
        </a>
      </li>
    </ul>

    <div v-if="user.role === 'admin'">
      <h5 class="admin-nav__heading">Admin</h5>
      <ul class="side-nav">
        <li class="">
          <a href="#">
            <svg>
              <use xlink:href="@/assets/img/icons.svg#map"></use>
            </svg>
            Manage tours
          </a>
        </li>

        <li class="">
          <a href="#">
            <svg>
              <use xlink:href="@/assets/img/icons.svg#users"></use>
            </svg>
            Manage users
          </a>
        </li>

        <li class="">
          <a href="#">
            <svg>
              <use xlink:href="@/assets/img/icons.svg#star"></use>
            </svg>
            Manage reviews
          </a>
        </li>

        <li class="">
          <a href="#">
            <svg>
              <use xlink:href="@/assets/img/icons.svg#briefcase"></use>
            </svg>
            Manage bookings
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped></style>
