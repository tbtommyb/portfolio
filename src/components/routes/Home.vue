<template>
  <div>
    <sidebar
      imgAlt="">
    </sidebar>
    <div class="home content">
      <header>
        <h1 v-for="line in headline">{{ line }}</h1>
      </header>
      <div class="content-col">
        <p><strong>{{ summary }}</strong></p>
        <p v-for="para in paragraphs">{{ para }}</p>
        <social-media></social-media>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from '../SocialMedia';
import Sidebar from '../Sidebar';
import home from '../../assets/home.js';

export default {
  name: 'home',
  data () {
    return home;
  },
  components: {
    SocialMedia,
    Sidebar
  }
};

</script>

<style>


</style>
