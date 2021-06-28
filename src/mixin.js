const myMixin = {
  data() {
    return {
      imageBaseUrl: 'http://127.0.0.1:3000/img',
      tourImageBaseUrl: 'http://127.0.0.1:3000/img/tours',
      userImageBaseUrl: 'http://127.0.0.1:3000/img/users',
    };
  },
  computed: {
    user: function () {
      return this.$store.state.user;
    },
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    filteredUsername: function () {
      if (this.$store.getters.isLoggedIn) {
        return this.$store.state.user.name.split(' ')[0];
      }
      return null;
    },
  },
  methods: {
    showAlert: function (type, msg) {
      this.hideAlert();
      const markup = `<div class="alert alert--${type}">${msg}</div>`;
      document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
      window.setTimeout(this.hideAlert, 5000);
    },
    hideAlert: function () {
      const el = document.querySelector('.alert');
      if (el) el.parentElement.removeChild(el);
    },
  },
};

export default myMixin;
