<script setup lang="ts">
import { computed } from 'vue'
import { getLocaleFromParam, localizedText } from '~/composables/useSiteLocale'

const route = useRoute()

const locale = computed(() =>
  getLocaleFromParam(route.params.lang as string | string[] | undefined)
)

const copy = computed(() => localizedText[locale.value])
const mapEmbedUrl =
  'https://www.google.com/maps?q=Vojvoda%20Savatija%2028%2C%20Beograd&output=embed'
const mapOpenUrl = 'https://maps.google.com/?q=Vojvoda%20Savatija%2028%2C%20Beograd'
</script>

<template>
  <section class="section section--contact">
    <div class="contact-card reveal">
      <h1>{{ copy.pages.contactTitle }}</h1>
      <p class="lead">{{ copy.pages.contactLead }}</p>

      <div class="contact-details">
        <p><strong>{{ copy.pages.contactAddressLabel }}:</strong> {{ copy.pages.contactAddress }}</p>
        <p><strong>{{ copy.pages.contactPhoneLabel }}:</strong> {{ copy.pages.contactPhone }}</p>
        <p><strong>{{ copy.pages.contactEmailLabel }}:</strong> {{ copy.pages.contactEmail }}</p>
      </div>

      <a class="cta-link" :href="`mailto:${copy.pages.contactEmail}`">{{ copy.pages.sendEmail }}</a>

      <div class="contact-map">
        <p class="contact-map__title">{{ locale === 'sr' ? 'Lokacija kancelarije' : 'Office location' }}</p>
        <iframe
          class="contact-map__frame"
          :src="mapEmbedUrl"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          :title="locale === 'sr' ? 'Mapa lokacije kancelarije' : 'Office location map'"
        />
        <a class="contact-map__link" :href="mapOpenUrl" target="_blank" rel="noopener noreferrer">
          {{ locale === 'sr' ? 'Otvori u mapama' : 'Open in maps' }}
        </a>
      </div>
    </div>
  </section>
</template>
