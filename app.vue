<template>
  <div>
    <site-announcements />
    <site-mobile-header />
    <site-header />
    <main>
      <site-banner />
      <gallery />
      <!-- <site-services /> -->
    </main>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import SiteMobileHeader from "./components/header/SiteMobileHeader.vue";
import SiteHeader from "./components/header/SiteHeader.vue";
import SiteBanner from "./components/banner/SiteBanner.vue";
import SiteServices from "./components/services/SiteServices.vue";
import SiteAnnouncements from "./components/announcements/SiteAnnouncements.vue";
import Gallery from "./components/gallery.vue";

export default defineComponent({
  components: {
    SiteMobileHeader,
    SiteHeader,
    SiteBanner,
    SiteServices,
    SiteAnnouncements,
    Gallery,
  },
  setup() {
    useHead({
      title: "Site Under Maintenance",
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
        {
          href: "/fiezta-logo.png",
          rel: "icon",
          type: "image/png",
        },
      ],
    });
  },
});
</script>

<style scoped>
</style>

