<template>
  <div class="site-label-pill" ref="SiteLabelPill">
    {{ rotationWords[currentIndex] }}
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const SiteLabelPill = ref(null);
    let currentIndex = 0;
    const rotationWords = [
      "Entertainment",
      "Travel",
      "Music",
      "Rentals",
      "Booken",
    ];

    function rotateWords() {
      currentIndex = (currentIndex + 1) % rotationWords.length;
      SiteLabelPill.value.textContent = rotationWords[currentIndex];
    }

    onMounted(() => {
      setInterval(rotateWords, 5000);
    });

    return {
      rotationWords,
      currentIndex,
      rotateWords,
      SiteLabelPill,
    };
  },
  mounted() {},
};
</script>

<style lang="pcss" scoped>
.site-label-pill {
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
</style>