<template>
  <div>
    <sidebar></sidebar>
    <div class="home content">
      <header>
        <h1 v-for="line of headline">{{ line }}</h1>
      </header>
      <div class="content-col">
        <strong>{{ firstPara }}</strong>
        <p v-for="para in paragraphs">{{ para }}</p>
        <social-media></social-media>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from './SocialMedia';
import Sidebar from './Sidebar';

export default {
  name: 'home',
  data () {
    return {
      headline: ['Tom', 'Barrett'],
      firstPara: 'Tom Barrett is a wonderful front-end developer. Tom Barrett is a wonderful front-end developer.',
      paragraphs: [
        'Tom is going to write lots of interesting things about web development and why you should give him a job.',
        'Tom is going to write lots of interesting things about web development and why you should give him a job.'
      ]
    };
  },
  components: {
    SocialMedia,
    Sidebar
  }
};

</script>

<style>

.content {
  margin: 0 5%;
  margin-top: 6%;
}

.home.content {
  margin-left: 24%;
}

.content-col {
  margin: 5% 2% 0 24%;
}

@media (max-width: 500px) {
  .home.content {
    margin: 2% !important;
    margin-top: -15% !important;
  }
  .content-col {
    margin: 2%;
  }
}
</style>
