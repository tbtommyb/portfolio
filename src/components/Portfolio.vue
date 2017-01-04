<template>
  <div>
    <sidebar></sidebar>
    <div class="home content">
      <header>
        <h1>Portfolio</h1>
        <h2>{{ currentProject.title }}</h2>
      </header>
      <direction-buttons :next="next" :previous="previous"></direction-buttons>
      <div class="content-col">
        <strong>{{ currentProject.firstPara }}</strong>
        <p v-for="para in currentProject.paragraphs">{{ para }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import DirectionButtons from './DirectionButtons';

export default {
  name: 'portfolio',
  computed: {
    currentProject() {
      return this.projects[this.$route.params.id]
    },
    next() {
      return (this.$route.params.id + 1)  % this.projects.length;
    },
    previous() {
      const previous = this.$route.params.id - 1;
      return previous < 0 ? this.projects.length - 1 : previous; 
    }
  },
  data () {
    return {
      projects: [
        {
          title: 'Concertsport',
          firstPara: 'Lots of info about the project. Lots of info about the project. Lots of info about the project. Lots of info about the project. Lots of info about the project. ',
          paragraphs: [
            'Tom is going to write lots of interesting things about web development and why you should give him a job.',
            'Tom is going to write lots of interesting things about web development and why you should give him a job.'
          ]
        },
        {
          title: 'OxGrow',
          firstPara: 'Lots of info about the project. Lots of info about the project. Lots of info about the project. Lots of info about the project. Lots of info about the project. ',
          paragraphs: [
            'Tom is going to write lots of interesting things about web development and why you should give him a job.',
            'Tom is going to write lots of interesting things about web development and why you should give him a job.'
          ]
        },
        {
          title: 'Wedding',
          firstPara: 'Lots of info about the project. Lots of info about the project. Lots of info about the project. Lots of info about the project. Lots of info about the project. ',
          paragraphs: [
            'Tom is going to write lots of interesting things about web development and why you should give him a job.',
            'Tom is going to write lots of interesting things about web development and why you should give him a job.'
          ]
        }
      ]
    };
  },
  components: {
    Sidebar,
    DirectionButtons
  }
};

</script>

<style scoped>

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
</style>
