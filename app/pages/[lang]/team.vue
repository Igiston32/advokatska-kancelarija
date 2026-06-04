<script setup lang="ts">
import { computed } from 'vue'
import { getLocaleFromParam, localizedText } from '~/composables/useSiteLocale'

const route = useRoute()

const locale = computed(() =>
  getLocaleFromParam(route.params.lang as string | string[] | undefined)
)

const copy = computed(() => localizedText[locale.value])

const teamMembers = [
  { name: 'Ime Prezime', role: 'Partner' },
  { name: 'Ime Prezime', role: 'Senior Associate' },
  { name: 'Ime Prezime', role: 'Associate' },
  { name: 'Ime Prezime', role: 'Associate' },
  { name: 'Ime Prezime', role: 'Junior Associate' },
  { name: 'Ime Prezime', role: 'Office Manager' }
]
</script>

<template>
  <section class="section">
    <p class="eyebrow">{{ copy.pages.teamEyebrow }}</p>
    <h1>{{ copy.pages.teamTitle }}</h1>
    <p class="lead">
      Our lawyers are recognized for reliability, detail-oriented execution and practical
      advice aligned with client goals.
    </p>

    <div class="grid-cards">
      <article v-for="member in teamMembers" :key="member.name + member.role" class="card reveal">
        <div class="avatar-placeholder" />
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
      </article>
    </div>
  </section>
</template>
