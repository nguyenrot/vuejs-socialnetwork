<template>
  <div class="container-fluid">
    <h3>User Page</h3>
    <div class="form-control ">
      <div class="card mx-auto" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ getUser }}</h5>
          <p class="card-text">Email : {{ email }}</p>
        </div>
      </div>
    </div>
    <new-post></new-post>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import NewPost from "@/components/layouts/NewPost";
export default {
  data() {
    return {
      email: localStorage.getItem('email'),
    }
  },
  components:{
    newPost:NewPost,
  },
  computed: {
    ...mapGetters(['getUser']),
  },
}

</script>

<style></style>