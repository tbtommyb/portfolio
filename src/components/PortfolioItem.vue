<template>
  <div class="portfolio-item">
    <header>
      <slot name="header"></slot>
      <transition :name="transitionClass" mode="out-in">
        <h2 :key="$route.params.id">{{ project.title }}</h2>
      </transition>
    </header>
    <div class="content-col">
      <ul class="portfolio-links">
        <li class="link link-item animate" v-for="link in project.links">
          <a :href="link.path">{{link.title}}</a>
        </li>
      </ul>
      <transition-group name="hide">
        <p :key="$route.params.id"><strong>{{ project.summary }}</strong></p>
        <p :key="$route.params.id" v-for="para in project.paragraphs">{{ para }}</p>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio-item',
  props: ['project', 'transitionClass'],
  data () {
    return {}
  }
}
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

.slide-left-enter-active,
.slide-right-enter-active {
  transition: all .2s ease;
}
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all .2s ease;
}
.slide-right-enter {
  transform: translateX(-1200px);
}
.slide-right-leave-active {
  transform: translateX(1200px);
}
.slide-left-enter {
  transform: translateX(1200px);
}
.slide-left-leave-active {
  transform: translateX(-1200px);
}

.hide-enter-active {
  transition-delay: .3s;
}
.hide-leave-active {
  transition-delay: .2s;
}
.hide-enter {
  visibility: hidden;
}
.hide-leave-active {
  visibility: hidden;
}
</style>
