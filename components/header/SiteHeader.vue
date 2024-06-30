<template>
  <header class="site-header spaced">
    <div class="logo">
      <img src="/fiezta-logo.png" />
    </div>
    <nav class="site-header__nav">
      <a @click="contactUs" class="c-link" v-for="link in links" :key="link">{{
        link
      }}</a>
    </nav>
    <button class="c-button primary site-header__contact-button">
      Contact Us
    </button>
  </header>
</template>

<script>
import { contactUs } from "#imports";

export default {
  data() {
    return {
      links: ["Traveling", "Entertainment", "Rentals", "Vlogs"],
    };
  },
  methods: {
    contactUs,
  },
};
</script>

<style lang="pcss" scoped>
.site-header {
  display: flex;
  align-items: center;
  gap: 40px;
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  border-bottom: solid 1px var(--c-stroke);
  display: none;
  background-color: white;
  z-index: 100;
}

.logo {
  width: 50px;
  height: 50px;
  background-color: var(--c-red);
  border-radius: 999px;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.site-header__contact-button {
  margin-left: auto;
}

@media screen and (min-width: 1025px) {
  .site-header {
    display: flex;
  }
}
</style>