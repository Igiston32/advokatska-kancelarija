export const SUPPORTED_LOCALES = ['sr', 'en'] as const

export type SiteLocale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: SiteLocale = 'sr'

const localePrefixPattern = /^\/(sr|en)(?=\/|$|\?|#)/

export const isSupportedLocale = (value: string | undefined): value is SiteLocale =>
  value === 'sr' || value === 'en'

export const getLocaleFromParam = (value: string | string[] | undefined): SiteLocale => {
  const single = Array.isArray(value) ? value[0] : value
  return isSupportedLocale(single) ? single : DEFAULT_LOCALE
}

export const stripLocalePrefix = (path: string) => {
  const cleaned = path.replace(localePrefixPattern, '')
  return cleaned.length > 0 ? cleaned : '/'
}

export const withLocale = (path: string, locale: SiteLocale) => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') {
    return `/${locale}`
  }

  return `/${locale}${normalized}`
}

export const localizedText = {
  sr: {
    nav: {
      firm: 'Kancelarija',
      team: 'Tim',
      practiceAreas: 'Oblasti rada',
      clients: 'Klijenti',
      contact: 'Kontakt'
    },
    pages: {
      homeEyebrow: 'Kancelarija',
      homeTitle: 'Stratesko pravno savetovanje za kompleksne poslovne situacije',
      homeSectionTitle: 'Kako radimo',
      teamEyebrow: 'Tim',
      teamTitle: 'Posveceni pravni profesionalci',
      practiceEyebrow: 'Oblasti rada',
      practiceTitle: 'Fokusirana ekspertiza kroz kljucne industrije',
      clientsEyebrow: 'Klijenti',
      clientsTitle: 'Poverenje domacih i medjunarodnih organizacija',
      contactEyebrow: 'Kontakt',
      contactTitle: 'Hajde da razgovaramo o vasim pravnim potrebama',
      requestConsultation: 'Zatrazi konsultacije',
      sendEmail: 'Posalji email'
    }
  },
  en: {
    nav: {
      firm: 'The Firm',
      team: 'Team',
      practiceAreas: 'Practice Areas',
      clients: 'Clients',
      contact: 'Contact'
    },
    pages: {
      homeEyebrow: 'The Firm',
      homeTitle: 'Strategic legal counsel for complex business matters',
      homeSectionTitle: 'How we work',
      teamEyebrow: 'Team',
      teamTitle: 'Dedicated legal professionals',
      practiceEyebrow: 'Practice Areas',
      practiceTitle: 'Focused expertise across key industries',
      clientsEyebrow: 'Clients',
      clientsTitle: 'Trusted by domestic and international organizations',
      contactEyebrow: 'Contact',
      contactTitle: 'Let us discuss your legal needs',
      requestConsultation: 'Request Consultation',
      sendEmail: 'Send Email'
    }
  }
} as const
