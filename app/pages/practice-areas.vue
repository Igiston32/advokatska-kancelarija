<script setup lang="ts">
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
    <p class="eyebrow">Practice Areas</p>
    <h1>Focused expertise across key industries</h1>
    <p class="lead">
      We advise clients in transactions, regulatory matters and strategic disputes with a
      practical approach tailored to each business context.
    </p>

    <ul class="practice-list reveal">
      <li v-for="practice in practices" :key="practice">{{ practice }}</li>
    </ul>
  </section>
</template>
