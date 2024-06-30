<template>
  <ul class="site-card-list">
    <site-card v-for="card in cards" :key="card" />
  </ul>
</template>

<script>
import SiteCard from "./SiteCard.vue";

export default {
  components: {
    SiteCard,
  },
  data() {
    return {
      cards: [1, 2, 34, 5],
    };
  },
};
</script>

<style scoped>
</style>