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
  position: absolute;
  top: 0;
  width: 34%;
  z-index: -1;
}

.sidebar-main-img {
  width: 100%;
  height: 100%;
  min-height: 375px;
}

.img-pale-fade {
  filter: blur(3.5px) opacity(50%);
}
</style>

