<template>
  <div>
    <sidebar
      :imgAlt="currentProject.imgAlt"
      :imgSrc="currentProject.imgSrc">
    </sidebar>
    <div class="portfolio content">
      <direction-buttons
        :next="next"
        :previous="previous"
        v-on:setDirection="updateTransitionClass">
      </direction-buttons>
      <portfolio-item
        :project="currentProject"
        :transitionClass="transitionClass">
        <h1 slot="header">Portfolio</h1>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar';
import DirectionButtons from '../DirectionButtons';
import PortfolioItem from '../PortfolioItem';
import projects from '../../assets/projects';

export default {
  name: 'portfolio',
  methods: {
    updateTransitionClass(direction) {
      this.transitionClass = `slide-${direction}`;
    }
  },
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
      transitionClass: 'slide-left',
      projects
    };
  },
  components: {
    Sidebar,
    DirectionButtons,
    PortfolioItem
  }
};

</script>

<style>

</style>
