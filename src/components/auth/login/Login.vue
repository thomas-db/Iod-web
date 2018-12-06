<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <form name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required" v-model="email">
          <label class="control-label" for="email">{{'auth.email' | translate}}</label>
          <i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required" v-model="password">
          <label class="control-label" for="password">{{'auth.password' | translate}}</label>
          <i class="bar"></i>
        </div>
      </div>
      <div
        class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container"
      >
        <button class="btn btn-primary" @click="login">{{'auth.login' | translate}}</button>
        <router-link class="link" :to="{name: 'signup'}">{{'auth.createAccount' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function (user) {
            alert('Well done ! You are now connected')
          },
          function (err) {
            alert('Oops. ' + err.message)
          }
        )
      this.$router.replace('admin/dashboard')
    }
  }
}
</script>

<style lang="scss">
.login {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    .down-container {
      .link {
        margin-top: 2rem;
      }
    }
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 3.125rem;
  }
}
</style>
