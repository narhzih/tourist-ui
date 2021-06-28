<template>
  <div class="user-view__form-container">
    <h2 class="heading-secondary ma-bt-md">Your account settings</h2>

    <form
      action="#"
      class="form form-user-data"
      enctype="multipart/form-data"
      @submit.prevent="saveSettings"
    >
      <div class="form__group">
        <label for="name" class="form__label">Name</label>
        <input
          type="text"
          id="name"
          class="form__input"
          v-model="name"
          required
          name="name"
        />
      </div>
      <div class="form__group ma-bt-md">
        <label for="email" class="form__label">Email address</label>
        <input
          type="email"
          id="email"
          class="form__input"
          v-model="email"
          required
          name="email"
        />
      </div>

      <div class="form__group form__photo-upload">
        <img
          :src="require(`/src/assets/img/users/${user.photo}`)"
          alt="User photo"
          class="form__user-photo"
        />
        <input
          class="form__upload"
          type="file"
          accept="image/*"
          id="photo"
          name="photo"
        />
        <label for="photo">Choose new photo</label>
      </div>

      <div class="form__group right">
        <button type="submit" class="btn btn--small btn--green">
          Save settings
        </button>
      </div>
    </form>
    <div class="line">&nbsp;</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Settings',
  data() {
    return {
      name: '',
      email: '',
      photo: '',
    };
  },

  methods: {
    validateInput: function () {
      if (this.email === '' || this.name === '') {
        this.showAlert('error', 'You cannot leave any field empty');
        return false;
      }
      return true;
    },
    saveSettings: function () {
      if (this.validateInput() === true) {
        let data = new FormData();
        data.append('name', this.name);
        data.append('email', this.email);
        const photo = document.getElementById('photo').files[0];
        if (photo) {
          data.append('photo', photo);
        }

        axios
          .patch(
            `${this.$store.state.server.requestUri}/users/update-me`,
            data,
            {
              headers: {
                Authorization: `Bearer ${this.$store.state.accessToken}`,
              },
            }
          )
          .then((res) => {
            const user = res.data.data.user;
            this.$store.commit('updateUser', user);
            this.showAlert('Data updated successfully');
          })
          .catch((error) => console.log(error.response));
      }
    },

    setData: function () {
      this.name = this.user.name;
      this.email = this.user.email;
    },

    // testSubmit: function () {
    //   console.log(this.dName);
    // },
  },

  created() {
    this.setData();
  },
};
</script>

<style scoped></style>
