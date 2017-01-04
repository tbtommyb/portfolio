<template>
  <div class="direction">
    <div class="btn direction left">
      <span class="arrow">
        <router-link :to="previousPath">&lt;</router-link>
      </span>
    </div>
    <div class="btn direction right">
      <span class="arrow">
        <router-link :to="nextPath">&gt;</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'direction-buttons',
  props: ['previous', 'next'],
  computed: {
    nextPath() {
      return `/portfolio/${this.next}`;
    },
    previousPath() {
      return `/portfolio/${this.previous}`;
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
.btn {
  width: 40px;
  height: 40px;
}

.btn.direction {
  position: absolute;
  top: 50%;
}

.btn.direction.right {
  right: 4%;
}
.btn.direction.left {
  left: 4%;
}

.arrow {
  font-size: 3em;
  font-weight: bold;
}

.arrow a {
  text-decoration: none;
  color: black;
}

.arrow a:hover {
  color: red;
}
</style>
