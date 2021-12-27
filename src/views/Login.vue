<template>
  <div class="container">
    <div class="card">
      <h5 class="card-title">Login</h5>
      <div class="card-body">
        <form class="form-control" v-on:submit.prevent="handleLogin">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" v-model="username">
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <input type="submit" class="btn btn-primary" value="submit">
        </form>
        <router-link to="/register" class="btn btn-warning">Register</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin() {
      const body = {
        username: this.username,
        password: this.password,
      }
      const configs = {
        headers: {
          Accept: 'application/json'
        }
      }
      this.axios.post('http://127.0.0.1:8000/auth/login/', body, configs).then((response) => {
        const data = response.data
        console.log(data)
        if (data.error) {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: data.error_description,
            showConfirmButton: false,
            timer: 1500
          });
        }
        if (data.access_token) {
          this.login(data)
          this.$router.push('/')
        }
      })
          .catch((e) => {
            alert(e.request.response)
          })
    },
  }
}
</script>

<style>

</style>