const myMixin = {
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
