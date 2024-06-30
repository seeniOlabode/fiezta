<template>
  <section class="site-section">
    <div class="site-section__content spaced" :class="backgroundColor">
      <header class="site-section__header">
        <h2 class="c-heading">{{ heading }}</h2>
      </header>

      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: "Our Services",
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
  },
};
</script>

<style lang="pcss" scoped>
.site-section {
}

.site-section__content {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;

  &.accent {
    background-color: var(--c-red);
    color: white;
  }
}

.site-section__header {
  margin-bottom: 30px;
}

@media screen and (max-width: 1024px) {
  .site-section__content {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
</style>