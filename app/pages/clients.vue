<script setup lang="ts">
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
    <p class="eyebrow">Clients</p>
    <h1>Trusted by domestic and international organizations</h1>
    <p class="lead">
      We represent multinational companies, local enterprises and institutions across a
      wide range of sectors.
    </p>

    <div class="chips reveal">
      <span v-for="sector in sectors" :key="sector" class="chip">{{ sector }}</span>
    </div>
  </section>
</template>
