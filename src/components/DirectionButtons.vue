<template>
  <div class="direction">
    <div class="btn direction left">
      <span class="arrow">
        <router-link :to="previousPath()">&lt;</router-link>
      </span>
    </div>
    <div class="btn direction right">
      <span class="arrow">
        <router-link :to="nextPath()">&gt;</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'direction-buttons',
  props: ['previous', 'next'],
  methods: {
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
  position: fixed;
  text-align: center;
  top: 50%;
}

.btn.direction.right {
  right: .2em;
}
.btn.direction.left {
  left: .2em;
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

@media (max-width: 500px) {
  .btn.direction {
    top: 10%;
  }
}

@media (max-width: 600px) {
  .btn.direction.left {
    left: .1em;
  }

  .btn.direction.right {
    right: .1em;
  }
}
</style>
