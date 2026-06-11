<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()

const locale = computed(() => (route.path.startsWith('/en') ? 'en' : 'sr'))

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      title: 'Requested page was not found',
      cta: 'Back to home page',
      homePath: '/en'
    }
  }

  return {
    title: 'Tražena stranica nije pronađena',
    cta: 'Povratak na početnu stranu',
    homePath: '/sr'
  }
})
</script>

<template>
  <main class="error-shell">
    <section class="error-card reveal">
      <h1>404</h1>
      <p class="lead error-message">{{ content.title }}</p>
      <NuxtLink :to="content.homePath" class="cta-link">{{ content.cta }}</NuxtLink>
    </section>
  </main>
</template>