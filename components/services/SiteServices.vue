<template>
  <site-block heading="Our Services" backgroundColor="accent">
    <site-card-list />
  </site-block>
</template>

<script>
import SiteBlock from "../shared/SiteBlock.vue";
import SiteCardList from "../shared/SiteCardList.vue";

export default {
  components: {
    SiteBlock,
    SiteCardList,
  },
};
</script>

<style scoped></style>
