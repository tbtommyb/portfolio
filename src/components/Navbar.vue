<template>
  <nav>
    <ul>
      <li class="link nav-item animate" v-for="link of navLinks">
        <router-link :to="link.path">{{ link.title }}</router-link>
      </li>
      <li class="link nav-item animate">
        <a href="https://github.com/tbtommyb/CV">CV</a>
      </li>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      navLinks: [
        {
          path: "/",
          title: "Home"
        },
        {
          path: "/portfolio/0",
          title: "Portfolio"
        }
      ]
    };
  }
};
</script>

<style>
nav {
  background-color: white;
  position: fixed;
  top: 0;
  right: 5%
}

.link.nav-item {
  margin: 0 1.2em;
}

</style>
