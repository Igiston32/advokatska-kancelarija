<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  getLocaleFromParam,
  localizedText,
  stripLocalePrefix,
  withLocale,
  type SiteLocale
} from '~/composables/useSiteLocale'

const isMenuOpen = ref(false)
const route = useRoute()

const locale = computed(() =>
  getLocaleFromParam(route.params.lang as string | string[] | undefined)
)

const copy = computed(() => localizedText[locale.value])

const navLinks = computed(() => [
  { to: withLocale('/', locale.value), label: copy.value.nav.firm },
  { to: withLocale('/team', locale.value), label: copy.value.nav.team },
  { to: withLocale('/practice-areas', locale.value), label: copy.value.nav.practiceAreas },
  { to: withLocale('/clients', locale.value), label: copy.value.nav.clients },
  { to: withLocale('/contact', locale.value), label: copy.value.nav.contact }
])

const switchLocalePath = (targetLocale: SiteLocale) => {
  const currentPath = stripLocalePrefix(route.fullPath)
  return withLocale(currentPath, targetLocale)
}

watch(
  () => isMenuOpen.value,
  (open) => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = open ? 'hidden' : ''
    }
  }
)

const closeMenu = () => {
  isMenuOpen.value = false
}

useHead(() => ({
  htmlAttrs: {
    lang: locale.value
  }
}))
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <NuxtLink :to="withLocale('/', locale)" class="brand" @click="closeMenu">
        <span class="brand-mark">AK</span>
        <span class="brand-text">Advokatska kancelarija</span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="String(isMenuOpen)"
        aria-controls="main-navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        class="main-nav"
        :class="{ 'main-nav--open': isMenuOpen }"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="main-nav__link"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>

        <div class="lang-switch" aria-label="Language switcher">
          <NuxtLink
            :to="switchLocalePath('sr')"
            class="lang-switch__link"
            :class="{ 'lang-switch__link--active': locale === 'sr' }"
            aria-label="Srpski"
            @click="closeMenu"
          >
            🇷🇸
          </NuxtLink>
          <NuxtLink
            :to="switchLocalePath('en')"
            class="lang-switch__link"
            :class="{ 'lang-switch__link--active': locale === 'en' }"
            aria-label="English"
            @click="closeMenu"
          >
            🇬🇧
          </NuxtLink>
        </div>
      </nav>
    </header>

    <main class="content-wrap">
      <slot />
    </main>

    <footer class="site-footer">
      <p>© {{ new Date().getFullYear() }} Advokatska kancelarija Milosevic Delic</p>
    </footer>
  </div>
</template>
