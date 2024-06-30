<template>
  <div class="site-announcements" @click="contactUs">
    <div class="animation-wrapper">
      <!-- <div class="text" v-for="(content, i) in contentArray" :key="content + i">
        {{ content }}
      </div> -->
      Contact us to make enquiries, this site is currently under maintenance.
    </div>
  </div>
</template>

<script>
import { contactUs } from "#imports";

export default {
  setup() {
    const text =
      "Contact us to make enquiries, this site is currently under maintenance.";

    const contentArray = [text, text, text, text, text];

    return {
      contentArray,
      contactUs,
    };
  },
};
</script>

<style lang="pcss" scoped>
.site-announcements {
  min-height: 40px;
  height: fit-content;
  background-color: var(--c-red);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  cursor: pointer;
  transition: background-color var(--sm-speed);
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--c-dark);
    .animation-wrapper {
      animation-play-state: paused;
    }
  }
}

.animation-wrapper {
  animation: marquee infinite 25s linear;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  gap: 40px;
  animation-play-state: paused;
  justify-content: center;
  padding: 10px;

  .text {
    text-wrap: nowrap;
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

@media screen and (max-width: 767px) {
  .animation-wrapper {
    font-size: 14px;
    line-height: 1;
  }
}
</style>