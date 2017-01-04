<template>
  <nav>
    <ul>
      <li class="nav-item" v-for="link of navLinks">
        <a :href="link.path">{{ link.title }}</a>
      </li>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      navLinks: [
        { path: "index.html", title: "Home" },
        { path: "portfolio.html", title: "Portfolio"}
      ]
    };
  }
};
</script>

<style>
nav {
  position: absolute;
  top: 0;
  right: 5%
}

.nav-item {
  list-style-type: none;
  display: inline-block;
  margin: 0 1.2em;
  border-bottom: 2px solid black;
  padding-bottom: 4px;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-family: 'Montserrat', sans-serif;
}

.nav-item a:hover {
  color: red;
}
</style>
