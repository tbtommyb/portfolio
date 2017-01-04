<template>
  <div>
    <sidebar
      :imgSrc="currentProject.imgSrc"></sidebar>
    <div class="portfolio content">
      <direction-buttons :next="next" :previous="previous"></direction-buttons>
      <header>
        <h1>Portfolio</h1>
        <a class="heading-link" :href="currentProject.projectSrc">
          <h2>{{ currentProject.title }}</h2>
        </a>
      </header>
      <div class="content-col">
          <ul class="portfolio-links">
            <li class="link link-item animate" v-for="link in currentProject.links">
              <a :href="link.path">{{link.title}}</a>
            </li>
          </ul>
        <strong>{{ currentProject.firstPara }}</strong>
        <p v-for="para in currentProject.paragraphs">{{ para }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar';
import DirectionButtons from '../DirectionButtons';
import projects from '../../assets/projects';

export default {
  name: 'portfolio',
  computed: {
    currentProject() {
      return this.projects[this.$route.params.id]
    },
    next() {
      return (parseInt(this.$route.params.id, 10) + 1)  % this.projects.length;
    },
    previous() {
      const previous = parseInt(this.$route.params.id, 10) - 1;
      return previous < 0 ? this.projects.length - 1 : previous; 
    }
  },
  data () {
    return {
      projects
    };
  },
  components: {
    Sidebar,
    DirectionButtons
  }
};

</script>

<style>

h2 {
  font-size: 4em;
  font-weight: 300;
}

.portfolio-links {
  display: block;
  list-style-type: none;
  padding: 0;
}

@media (max-width: 600px) {
  h2 {
    font-size: 2.5em;
  }
}

@media (max-width: 500px) {
  h2 {
    font-size: 2em;
  }
}

</style>
