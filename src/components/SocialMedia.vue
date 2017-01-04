<template>
  <div class="social">
    <ul>
      <li class="social-link" v-for="link of socialLinks">
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
export default {
  name: 'social-media',
  data () {
    return {
      socialLinks: [
        {
          path: 'http://www.mail.com',
          svg: require('../assets/icons/mail.svg'),
          png: require('../assets/icons/mail.png')
        },
        {
          path: 'http://www.github.com',
          svg: require('../assets/icons/github.svg'),
          png: require('../assets/icons/github.png')
        },
        {
          path: 'http://www.linkedin.com',
          svg: require('../assets/icons/linkedin.svg'),
          png: require('../assets/icons/linkedin.png')
        },
        {
          path: 'http://www.twitter.com',
          svg: require('../assets/icons/twitter.svg'),
          png: require('../assets/icons/twitter.svg')
        }
      ]
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
  margin-right: .5em;
}

svg,
image {
  width: 100%;
  height: 100%;
}
</style>
