<template>
  <div class="gallery">
    <div class="gallery-animation">
      <img v-for="image in images" :key="image" :src="`/images/${image}`" />
      <img v-for="image in images" :key="image" :src="`/images/${image}`" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const images = [
      "booking-info.jpeg",
      "dubai-site.jpg",
      "instrumental.jpg",
      "international-group.png",
    ];

    return {
      images,
    };
  },
};
</script>

<style lang="pcss" scoped>
.gallery {
  overflow: hidden;
}

.gallery-animation {
  display: flex;
  gap: 20px;
  padding: 10px;
  animation: marquee infinite 25s linear reverse;

  img {
    border-radius: 8px;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>