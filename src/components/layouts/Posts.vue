<template>
  <div class="container">
    <div class="card mt-3 mx-auto" style="width: 50rem;">
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['post']
  }
</script>

<style>

</style>