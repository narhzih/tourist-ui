<template>
  <div class="card">
    <div class="card__header">
      <div class="card__picture">
        <div class="card__picture-overlay">&nbsp;</div>
        <img
          :src="require(`/src/assets/img/tours/${tour.imageCover}`)"
          alt="Tour 1"
          class="card__picture-img"
        />
      </div>

      <h3 class="heading-tertirary">
        <span>{{ tour.name }}</span>
      </h3>
    </div>

    <div class="card__details">
      <h4 class="card__sub-heading">
        {{ tour.difficulty }} {{ tour.duration }}-day tour
      </h4>
      <p class="card__text">
        {{ tour.summary }}
      </p>
      <div class="card__data">
        <svg class="card__icon">
          <use xlink:href="~@/assets/img/icons.svg#icon-map-pin"></use>
        </svg>
        <span>{{ tour.startLocation.description }}</span>
      </div>
      <div class="card__data">
        <svg class="card__icon">
          <use xlink:href="~@/assets/img/icons.svg#icon-calendar"></use>
        </svg>
        <span>{{ tourDate }}</span>
      </div>
      <div class="card__data">
        <svg class="card__icon">
          <use xlink:href="~@/assets/img/icons.svg#icon-flag"></use>
        </svg>
        <span>{{ stops }} stops</span>
      </div>
      <div class="card__data">
        <svg class="card__icon">
          <use xlink:href="~@/assets/img/icons.svg#icon-user"></use>
        </svg>
        <span>{{ tour.maxGroupSize }} people</span>
      </div>
    </div>

    <div class="card__footer">
      <p>
        <span class="card__footer-value">${{ tour.price }}</span>
        <span class="card__footer-text">per person</span>
      </p>
      <p class="card__ratings">
        <span class="card__footer-value">{{ tour.ratingsAverage }}</span>
        <span class="card__footer-text"
          >rating ({{ tour.ratingsQuantity }})</span
        >
      </p>
      <a href="#" @click.prevent="navigate" class="btn btn--green btn--small"
        >Details</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    tour: Object,
  },

  computed: {
    tourDate: function () {
      return new Date(this.tour.startDates[0]).toLocaleString('en-us', {
        month: 'long',
        year: 'numeric',
      });
    },
    stops: function () {
      return this.tour.locations.length;
    },
  },

  methods: {
    navigate: function () {
      this.$router.push({ name: 'tour', params: { id: this.tour._id } });
    },
  },

  created() {},
};
</script>

<style scoped></style>
