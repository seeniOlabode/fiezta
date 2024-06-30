<template>
  <button @click="contact" class="c-button primary site-header__contact-button">
    Contact Us
  </button>
</template>

<script>
export default {
  methods: {
    contact() {
      console.log("contact");
    },
  },
};
</script>

<style>
</style>