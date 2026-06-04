<script setup lang="ts">
import { computed } from 'vue'
import { getLocaleFromParam, localizedText } from '~/composables/useSiteLocale'

const route = useRoute()

const locale = computed(() =>
  getLocaleFromParam(route.params.lang as string | string[] | undefined)
)

const copy = computed(() => localizedText[locale.value])

const practices = [
  'Banking and Finance',
  'Corporate and Commercial',
  'Dispute Resolution',
  'Employment',
  'Real Estate and Construction',
  'Technology, Media and Telecom',
  'Data Protection',
  'Energy and Infrastructure'
]
</script>

<template>
  <section class="section">
    <p class="eyebrow">{{ copy.pages.practiceEyebrow }}</p>
    <h1>{{ copy.pages.practiceTitle }}</h1>
    <p class="lead">
      We advise clients in transactions, regulatory matters and strategic disputes with a
      practical approach tailored to each business context.
    </p>

    <ul class="practice-list reveal">
      <li v-for="practice in practices" :key="practice">{{ practice }}</li>
    </ul>
  </section>
</template>
