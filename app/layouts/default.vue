<script setup lang="ts">
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'The Firm' },
  { to: '/team', label: 'Team' },
  { to: '/practice-areas', label: 'Practice Areas' },
  { to: '/clients', label: 'Clients' },
  { to: '/contact', label: 'Contact' }
]

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
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <NuxtLink to="/" class="brand" @click="closeMenu">
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
