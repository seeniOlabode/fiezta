<template>
  <section class="site-banner spaced">
    <div class="site-banner__label-pill">{{ rotationWords[currentIndex] }}</div>
    <h1 class="c-heading">
      Fiezta, concierge on wheels <br />
      (under maintenance)
    </h1>
    <p class="c-body site-banner__sub-title">
      From Entertainment to Travel, We've Got You Covered!!
    </p>
    <contact-button class="site-banner__contact-button" />
  </section>
</template>

<script>
import SiteLabelPill from "../shared/SiteLabelPill.vue";
import ContactButton from "../shared/ContactButton.vue";

export default {
  components: {
    SiteLabelPill,
    ContactButton,
  },
  data() {
    return {
      rotationWords: [
        "Entertainment",
        "Travel",
        "Music",
        "Rentals",
        "Booking",
        "Coming Soon",
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    this.startRotateWords();
  },
  methods: {
    startRotateWords() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.rotationWords.length;
      }, 5000);
    },
  },
};
</script>

<style scoped>
.site-banner {
  padding: 200px var(--sm-spacing) 100px var(--sm-spacing);
  text-align: center;
}

.site-banner__sub-title {
  margin-top: 20px;
}

.site-banner__label-pill {
  background-color: var(--c-stroke);
  color: var(--c-dark);
  width: fit-content;
  padding: 0 13px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  margin: 0 auto;
}

.site-banner__contact-button {
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .site-banner {
    padding: 140px 0 50px 0;
  }
  .site-banner__sub-title {
    margin-top: 10px;
    width: 70%;
    margin: 10px auto 0 auto;
  }
  .site-banner__label-pill {
    font-size: var(--t-0);
    margin-bottom: 20px;
  }

  .site-banner__contact-button {
    margin-top: 10px;
  }
}
</style>