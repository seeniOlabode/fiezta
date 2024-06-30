<template>
  <div>
    <site-mobile-header />
    <site-header />
    <main>
      <site-banner />
      <!-- <site-services /> -->
    </main>
    <div class="welcome">welcome to the world</div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import SiteMobileHeader from "./components/header/SiteMobileHeader.vue";
import SiteHeader from "./components/header/SiteHeader.vue";
import SiteBanner from "./components/banner/SiteBanner.vue";
import SiteServices from "./components/services/SiteServices.vue";

export default defineComponent({
  components: {
    SiteMobileHeader,
    SiteHeader,
    SiteBanner,
    SiteServices,
  },
  setup() {
    useHead({
      title: "Fiezta, Concierge on wheels",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
          rel: "stylesheet",
        },
      ],
    });
  },
});
</script>

<style scoped>
.welcome {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>

