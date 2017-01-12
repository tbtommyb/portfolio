<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import projects from './assets/projects.js';

export default {
  name: 'app',
  mounted () {
    /* Preload project images */
    projects.map(project => {
      let img = new Image();
      img.src = project.imgSrc;
    })
  },
  components: {
    Navbar
  }
}

</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

p {
  font-family: 'Muli';
  font-size: 1.1em;
}

h1,
h2 {
  font-family: 'Montserrat', sans-serif;
  height: 80px;
  margin: 0;
}

header {
  overflow: hidden;
}

header h1 {
  font-size: 5em;
}

.heading-link {
  text-decoration: none;
  color: red;
}

strong {
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: 1.2em;
}

.content {
  margin: 60px 5% 0 27%;
}

.content-col {
  margin: 5% 2% 0 24%;
}

.link {
  list-style-type: none;
  display: inline-block;
  border-bottom: 2px solid black;
  padding-bottom: 4px;
  margin: 0 .5em 0 0;
  font-family: 'Montserrat', sans-serif;
}

.link a {
  text-decoration: none;
  color: black;
}

.link a:hover {
  color: red;
}

.animate a {
  transition: color .3s ease;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}


@media (max-width: 600px) {
  header h1 {
    font-size: 4em;
  }
}

@media (max-width: 500px) {
  .content {
    margin: 2%;
    margin-top: -50px;
  }
  .content-col {
    margin: 2%;
  }
}

</style>
