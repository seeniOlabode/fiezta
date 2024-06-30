<template>
  <header class="site-header spaced">
    <div class="logo"></div>
    <nav class="site-header__nav">
      <a class="c-link" v-for="link in links" :key="link">{{ link }}</a>
    </nav>
    <button class="c-button primary site-header__contact-button">
      Contact Us
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: ["Traveling", "Entertainment", "Rentals", "Vlogs"],
    };
  },
};
</script>

<style lang="pcss" scoped>
.site-header {
  display: flex;
  align-items: center;
  gap: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: solid 1px var(--c-stroke);
  display: none;
  background-color: white;
}

.logo {
  width: 40px;
  height: 40px;
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