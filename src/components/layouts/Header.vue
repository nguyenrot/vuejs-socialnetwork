<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <router-link class="navbar-brand" to="/user" v-if="this.$store.getters.getUser">{{
        this.$store.getters.getUser
      }}
    </router-link>
    <router-link className="navbar-brand" to="/login" v-if="!this.$store.getters.getToken">Login</router-link>
    <a class="navbar-brand" href="" v-on:click.prevent="logout_user" v-else>Logout</a>
    <div>
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  methods: {
    ...mapGetters(['getToken']),
    ...mapActions(['getUser', 'logout']),
    logout_user() {
      this.logout()
      this.$router.push('/login')
    },
  },
  created() {
    if (this.getToken()) {
      if (!this.$store.getters.getUser) {
        const configs = {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.getToken()}`
          }
        }
        this.axios.get('http://127.0.0.1:8000/auth/users/', configs).then((response) => {
          const data = response.data
          this.getUser(data)
        })
            .catch((e) => {
              console.log(e)
            })
      }
    }
  }
}
</script>

<style>

</style>