<template>
  <nav>
    <ul>
      <li class="nav-item" v-for="link of navLinks">
        <router-link :to="link.path">{{ link.title }}</router-link>
      </li>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      navLinks: [
        { path: "/", title: "Home" },
        { path: "portfolio/0", title: "Portfolio"}
      ]
    };
  }
};
</script>

<style>
nav {
  position: fixed;
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
