<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
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
  overflow-x: hidden;
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

@media (max-width: 600px) {
  header h1 {
    font-size: 4em;
  }
}

@media (max-width: 500px) {
  .home.content {
    margin: 2% !important;
    margin-top: -50px !important;
  }
  .content-col {
    margin: 2%;
  }
}

</style>
