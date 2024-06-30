<template>
  <li class="site-card">
    <div class="site-card__image">
      <img :src="card.image" />
    </div>
    <div class="site-card__content">
      <h5 class="c-heading">{{ card.title }}</h5>
      <p class="c-body">{{ card.description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {
        return {
          title: "Live Entertainment Bands",
          description:
            "Bring your event to life with our professional live bands. From energetic performances to soulful melodies, our talented musicians ensure an unforgettable experience tailored to your occasion.",
          image: "/images/nick-baker-VuPIUePS_vU-unsplash.jpeg",
        };
      },
    },
  },
};
</script>

<style scoped></style>
