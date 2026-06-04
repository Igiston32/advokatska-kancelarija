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
      <p class="eyebrow">{{ copy.pages.homeEyebrow }}</p>
      <h1>{{ copy.pages.homeTitle }}</h1>
      <p class="lead">
        We provide clear, practical and business-oriented legal support to companies,
        founders and institutions. Our work combines deep legal expertise with an
        understanding of how real businesses operate.
      </p>
      <NuxtLink :to="withLocale('/contact', locale)" class="cta-link">
        {{ copy.pages.requestConsultation }}
      </NuxtLink>
    </div>
  </section>

  <section class="section reveal">
    <h2>{{ copy.pages.homeSectionTitle }}</h2>
    <p>
      Our team focuses on precision, responsiveness and solutions that move your
      business forward. We partner with clients as long-term advisors across day-to-day
      operations and high-stakes transactions.
    </p>
  </section>
</template>
