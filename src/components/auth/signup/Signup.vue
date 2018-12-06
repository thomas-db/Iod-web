<template>
  <div class="signup">
    <h2>{{'auth.createNewAccount' | translate}}</h2>
    <form name="signup">
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
      <vuestic-checkbox :id="'checkbox1'" v-model="checkboxOneModel">
        <template slot="label">
          {{'auth.agree' | translate}}
          <router-link to>{{'auth.termsOfUse' | translate}}</router-link>
        </template>
      </vuestic-checkbox>
      <div
        class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container"
      >
        <button class="btn btn-primary" @click="signup">{{'auth.signUp' | translate}}</button>
        <router-link class="link" :to="{name: 'login'}">{{'auth.alreadyJoined' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signup',
  data () {
    return {
      checkboxOneModel: true
    }
  },
  methods: {
    signup: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function (user) {
            alert('Your account has been created !')
          },
          function (err) {
            alert('Oops. ' + err.message)
          }
        )
    }
  }
}
</script>

<style lang="scss">
.signup {
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
    margin-top: 2.6875rem;
  }
}
</style>
