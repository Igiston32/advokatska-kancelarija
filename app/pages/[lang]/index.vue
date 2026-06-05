<script setup lang="ts">
import { computed } from 'vue'
import { getLocaleFromParam, localizedText, withLocale } from '~/composables/useSiteLocale'

const route = useRoute()

const locale = computed(() =>
  getLocaleFromParam(route.params.lang as string | string[] | undefined)
)

const copy = computed(() => localizedText[locale.value])
</script>

<template>
  <section class="hero">
    <div class="hero__overlay" />
    <div class="hero__content reveal">
      <h1>{{ copy.pages.homeTitle }}</h1>
      <p v-for="paragraph in copy.pages.homeIntroParagraphs" :key="paragraph" class="lead">
        {{ paragraph }}
      </p>
      <NuxtLink :to="withLocale('/contact', locale)" class="cta-link">
        {{ copy.pages.requestConsultation }}
      </NuxtLink>
    </div>
  </section>
</template>
