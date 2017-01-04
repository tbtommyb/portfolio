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
  margin: 0;
}

h1 {
  font-size: 5em;
}

h2 {
  font-size: 4em;
  font-weight: 300;
}

strong {
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: 1.2em;
}

</style>
