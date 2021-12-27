<template>
  <div class="card mt-3 mx-auto" style="width: 50rem;">
    <div class="card-body">
      <h5 class="card-title">New Post</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ getUser }}</h6>
      <form v-on:submit.prevent="handlePost">
        <textarea rows="4" class="card-text form-control w-100" v-model="content"
                  placeholder="Write something here..." required></textarea>
        <input type="submit" class='btn btn-primary mt-2 float-right'>
      </form>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props:['reload_posts'],
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['getUser', 'getToken']),
  },
  methods: {
    handlePost() {
      const body = {
        content: this.content,
      }
      const configs = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.getToken}`
        }
      }
      this.axios.post('http://127.0.0.1:8000/post/', body, configs).then((response) => {
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
          this.reload_posts()
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: 'post successful !!',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch((e) => {
        alert(e.request.response)
      })
    }
  },
}
</script>

<style>

</style>