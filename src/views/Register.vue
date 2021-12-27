<template>
  <div class="container">
    <div class="card">
      <h5 class="card-title">Register</h5>
      <div class="card-body">
        <form class="form-control" v-on:submit.prevent="handleRegister">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" v-model="username">
          </div>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <input type="submit" class="btn btn-primary" value="submit">
        </form>
        <router-link to="/login" class="btn btn-warning">Sign in</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      email: '',
      password: '',
      username: ''
    }
  },
  methods:{
    handleRegister(){
      const body = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      const configs = {
        headers: {
          Accept: 'application/json'
        }
      }
      this.axios.post('http://127.0.0.1:8000/auth/users/', body, configs).then((response) => {
        const data = response.data
        if (data.error) {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: data.error_description,
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: "Sign Up Success!!",
            showConfirmButton: false,
            timer: 1500
          });
        }
        this.$router.push('/login')
      })
          .catch((e)=>{
            alert(e.request.response)
          })
    }
  }
}
</script>

<style>

</style>