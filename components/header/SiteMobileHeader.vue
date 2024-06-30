<template>
  <header class="site-header" :class="{ 'menu-open': menuOpen }">
    <div class="site-header__content">
      <div class="site-header__top spaced">
        <div class="logo">
          <img src="/fiezta-logo.png" />
        </div>
        <button
          class="site-header__menu-button"
          :class="{ 'menu-open': menuOpen }"
          @click="menuOpen = !menuOpen"
        >
          <span class="menu-button__icon"></span>
        </button>
      </div>

      <nav class="site-nav" :class="{ 'menu-open': menuOpen }">
        <a
          :style="{
            '--delay': `${i * 0.035}s`,
            '--reverse-delay': `${(links.length - i - 1) * 0.035}s`,
          }"
          v-for="(link, i) in links"
          class="site-nav__link"
          :key="link"
          @click="contactUs"
        >
          <img class="link-icon" src="/icons/up-right-small.svg" />
          <span class="link__text-content">
            {{ link }}
          </span>
        </a>
      </nav>
    </div>

    <div @click="menuOpen = !menuOpen" class="site-header__backdrop"></div>
  </header>
</template>

<script>
import { contactUs } from "#imports";

export default {
  data() {
    return {
      menuOpen: false,
      links: ["Traveling", "Entertainment", "Rentals", "Vlogs"],
    };
  },
  methods: {
    contactUs,
  },
};
</script>

<style lang="pcss" scoped>
.site-header {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  display: none;
  z-index: 100;
}

.site-header__content {
  border-bottom: solid 1px var(--c-stroke);
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: white;
}

.site-header__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 40px;
  height: 40px;
  background-color: var(--c-red);
  border-radius: 999px;
}

.site-header__menu-button {
  background: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  cursor: pointer;
  border: none;
}

.menu-button__icon {
  height: 1px;
  width: 24px;
  display: flex;
  align-items: center;
  position: absolute;
}

.menu-button__icon::after,
.menu-button__icon::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--c-dark);
  transition: transform var(--sm-speed);
  animation: closedMenuStrokeAnimation var(--sm-speed)
    cubic-bezier(0.37, 0, 0.63, 1);
}

.menu-button__icon::before {
  transform: translateY(var(--stroke-translate));
  --stroke-rotate: 45deg;
  --stroke-translate: -5px;
}

.menu-button__icon::after {
  transform: translateY(var(--stroke-translate));
  --stroke-rotate: -45deg;
  --stroke-translate: 5px;
}

.site-header__menu-button.menu-open .menu-button__icon {
  &::before,
  &::after {
    animation: openMenuStrokeAnimation var(--sm-speed)
      cubic-bezier(0.37, 0, 0.63, 1);
    animation-fill-mode: forwards;
  }
}

@keyframes closedMenuStrokeAnimation {
  0% {
    transform: translateY(0) rotate(var(--stroke-rotate));
  }

  50% {
    transform: translateY(0) rotate(0);
  }

  100% {
    transform: translateY(var(--stroke-translate)) rotate(0);
  }
}

@keyframes openMenuStrokeAnimation {
  0% {
    transform: translateY(var(--stroke-translate)) rotate(0);
  }

  50% {
    transform: translateY(0) rotate(0);
  }

  100% {
    transform: translateY(0) rotate(var(--stroke-rotate));
  }
}

.site-nav {
  display: flex;
  flex-direction: column;
  color: var(--c-dark);
  height: 0;
  transition: height var(--sm-speed) ease-in-out;
  will-change: height;
}

.site-nav__link {
  font-size: 56px;
  cursor: pointer;
  font-weight: 700;
  opacity: 0;
  transform: translateY(50px);
  transition: transform var(--sm-speed), opacity var(--sm-speed);
  transition-delay: var(--reverse-delay);
  position: relative;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.link__text-content {
  position: relative;
  display: inline-block;
  transform: translateX(0);
  transition: transform var(--sm-speed);

  &::after {
    content: " (coming soon)";
    opacity: 0.4;
    font-size: 90%;
  }
}

.site-nav.menu-open {
  height: 350px;
}

.site-nav.menu-open .site-nav__link {
  opacity: 1;
  transform: translateY(0);
  transition-delay: var(--delay);
}

.site-nav .site-nav__link {
  .link-icon {
    position: absolute;
    left: 20px;
    transform: translateX(-20px) scale(0) rotate(45deg);
    transition: transform var(--sm-speed);
  }

  &:hover .link-icon {
    transform: translateX(0) scale(1) rotate(0);
  }

  &:hover {
    .link__text-content {
      transform: translateX(30px);
    }
  }
}

.site-header__backdrop {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity var(--sm-speed);
  pointer-events: none;
}

.site-header.menu-open .site-header__backdrop {
  opacity: 1;
  pointer-events: all;
  cursor: zoom-out;
}

@media screen and (max-width: 1024px) {
  .site-header {
    display: block;
  }
}

@media screen and (max-width: 764px) {
  .site-nav.menu-open {
    height: 250px;
  }
  .site-nav__link {
    font-size: 38px;
  }
}

@media screen and (max-width: 650px) {
  .site-nav__link {
    font-size: 20px;
  }

  .site-nav.menu-open {
    height: 150px;
  }
}
</style>
