<template>
  <main class="main">
    <div class="login-form">
      <h2 class="heading-secondary ma-bt-lg">Create your account!</h2>
      <form action="#" class="form form--login">
        <div class="form__group">
          <label for="name" class="form__label">Your name</label>
          <input type="text" id="name" class="form__input" required />
        </div>

        <div class="form__group">
          <label for="email" class="form__label">Email address</label>
          <input
            type="email"
            id="email"
            class="form__input"
            placeholder="you@example.com"
            required
          />
        </div>

        <div class="form__group">
          <label for="password" class="form__label">Password</label>
          <input
            type="password"
            id="password"
            class="form__input"
            placeholder="********"
            minlength="8"
            required
          />
        </div>

        <div class="form__group">
          <label for="c_password" class="form__label">Confirm Password</label>
          <input
            type="password"
            id="c_password"
            class="form__input"
            placeholder="********"
            minlength="8"
            required
          />
        </div>

        <div class="form__group">
          <button class="btn btn--green">Sing Up</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SignUp',
};
</script>

<style scoped></style>
