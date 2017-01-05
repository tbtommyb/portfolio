<template>
  <div id="sidebar">
    <img class="sidebar-main-img img-pale-fade" :src="imgSrc">
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: ['imgSrc'],
  data () { return {}; }
}
</script>

<style>
#sidebar {
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 34%;
  z-index: -1;
}

.sidebar-main-img {
  height: 100%;
  min-height: 375px;
}

.img-pale-fade {
  filter: blur(3.5px) opacity(50%);
}

@media (max-width: 600px) {
  .sidebar-main-img {
    margin-left: -33%;
    width: initial;
  }
}

@media (max-width: 500px) {
  #sidebar {
    position: relative;
    height: 180px;
    width: 100%;
  }

  .sidebar-main-img {
    margin-left: 0;
    width: 100%;
  }
}

</style>

