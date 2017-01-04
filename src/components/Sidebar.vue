<template>
  <div id="sidebar">
    <img class="sidebar-main-img" :src="img">
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      img: 'static/img/profile.jpg'
    }
  }
}
</script>

<style scoped>
#sidebar {
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 34%;
  z-index: -1;
}

.sidebar-main-img {
  width: 100%;
  height: 100%;
}
</style>
