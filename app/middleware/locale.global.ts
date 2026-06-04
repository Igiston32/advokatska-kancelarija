import { DEFAULT_LOCALE, withLocale } from '~/composables/useSiteLocale'

export default defineNuxtRouteMiddleware((to) => {
  const hasLocalePrefix = /^\/(sr|en)(\/|$)/.test(to.path)

  if (!hasLocalePrefix) {
    return navigateTo(withLocale(to.fullPath, DEFAULT_LOCALE), { redirectCode: 301 })
  }
})
