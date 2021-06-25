<template>
  <main class="main">
    <div class="card-container">
      <card v-for="tour in tours" :tour="tour" :key="tour._id"></card>
    </div>
  </main>
</template>

<script>
import Card from './components/cards/Card';
import axios from 'axios';
export default {
  name: 'Overview',
  components: { Card },
  data() {
    return {
      tours: [],
    };
  },

  created() {
    axios.get('http://localhost:3000/api/v1/tours/').then((res) => {
      this.tours = res.data.data.data;
    });
  },
};
</script>

<style scoped></style>
