<template>
  <div class="social">
    <ul>
      <li class="social-link animate" v-for="link of socialLinks">
        <a :href="link.path">
          <svg width="96" height="96">
            <image :xlink:href="link.svg" :src="link.png" width="96" height="96" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import socialLinks from '../assets/social';

export default {
  name: 'social-media',
  data () {
    return {
      socialLinks
    };
  }
};
</script>

<style scoped>

.social {
  margin-top: 3em;
}

ul {
  padding: 0;
}

.social-link {
  list-style-type: none;
  display: inline-block;
  width: 40px;
  height: 40px;
  box-sizing: content-box;
  border-radius: 2px;
  border: 2px solid white;
  margin: 4px 10px 4px 4px;
}

.social-link:first-of-type {
  margin-left: 0;
}
.social-link:hover {
  border: 2px solid red;
}

.social-link.animate {
  transition: border .3s ease;
}

svg,
image {
  width: 100%;
  height: 100%;
}
</style>
