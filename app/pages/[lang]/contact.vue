<script setup lang="ts">
import { computed } from 'vue'
import { getLocaleFromParam, localizedText } from '~/composables/useSiteLocale'

const route = useRoute()

const locale = computed(() =>
  getLocaleFromParam(route.params.lang as string | string[] | undefined)
)

const copy = computed(() => localizedText[locale.value])
</script>

<template>
  <section class="section section--contact">
    <div class="contact-card reveal">
      <p class="eyebrow">{{ copy.pages.contactEyebrow }}</p>
      <h1>{{ copy.pages.contactTitle }}</h1>
      <p class="lead">Reach out for consultation, project support or representation.</p>

      <div class="contact-details">
        <p><strong>Address:</strong> Njegoseva 11, Belgrade</p>
        <p><strong>Phone:</strong> +381 (0)11 000 000</p>
        <p><strong>Email:</strong> info@ak-example.rs</p>
      </div>

      <a class="cta-link" href="mailto:info@ak-example.rs">{{ copy.pages.sendEmail }}</a>
    </div>
  </section>
</template>
