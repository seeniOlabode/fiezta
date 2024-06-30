<template>
  <button @click="contact" class="c-button primary site-header__contact-button">
    Contact Us
  </button>
</template>

<script>
import { contactUs } from "#imports";

export default {
  methods: {
    contact() {
      contactUs();
    },
  },
};
</script>

<style>
</style>