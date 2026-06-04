<script setup lang="ts">
import { computed } from 'vue'
import { getLocaleFromParam, localizedText } from '~/composables/useSiteLocale'

const route = useRoute()

const locale = computed(() =>
  getLocaleFromParam(route.params.lang as string | string[] | undefined)
)

const copy = computed(() => localizedText[locale.value])

const sectors = [
  'Food and Beverage',
  'Retail and Distribution',
  'Real Estate Development',
  'Energy and Mining',
  'Technology and Telecom',
  'Pharmaceuticals and Healthcare',
  'Financial Services',
  'Logistics and Infrastructure'
]
</script>

<template>
  <section class="section">
    <p class="eyebrow">{{ copy.pages.clientsEyebrow }}</p>
    <h1>{{ copy.pages.clientsTitle }}</h1>
    <p class="lead">
      We represent multinational companies, local enterprises and institutions across a
      wide range of sectors.
    </p>

    <div class="chips reveal">
      <span v-for="sector in sectors" :key="sector" class="chip">{{ sector }}</span>
    </div>
  </section>
</template>
