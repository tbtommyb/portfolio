<template>
  <div class="direction">
    <div class="btn direction left animate">
      <span class="arrow" v-on:click="setDirection('left')">
        <router-link :to="previousPath()" aria-label="previous">
          &lt;
        </router-link>
      </span>
    </div>
    <div class="btn direction right animate">
      <span class="arrow" v-on:click="setDirection('right')">
        <router-link :to="nextPath()" aria-label="next">
          &gt;
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'direction-buttons',
  props: ['previous', 'next'],
  methods: {
    setDirection(direction) {
      this.$emit('setDirection', direction);
    },
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
  top: 47%;
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
