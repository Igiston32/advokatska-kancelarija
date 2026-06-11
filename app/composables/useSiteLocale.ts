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
      contact: 'Kontakt'
    },
    pages: {
      homeTitle: 'O kancelariji',
      homeIntroParagraphs: [
        'Advokatska kancelarija preko 20 godina svojim klijentima pruza pravnu pomoc visokog kvaliteta u skladu sa Zakonom o advokaturi i pozitivnim propisima Republike Srbije. Uspeh i zadovoljstvo nasih klijenata je glavni prioritet nase kancelarije i tima.',
        'Tokom proteklih godina kancelarija je saradjivala sa mnostvom klijenata iz Republike Srbije, ali i inostranim klijentima, kako iz regiona, tako i iz drugih zemalja Evrope i sveta u razlicitim oblastima prava: privredno pravo, informacione tehnologije, gradjevinarstvo, svojinskopravni odnosi, parnicni i vanparnicni postupci, arbitraze, naknade stete, radno pravo, prekrsaji, ugovorno pravo i obligacioni odnosi, izvrsni postupci i dr.',
        'Kancelarija je posebno ponosna sto je svom sirokom spektru pridruzila i sportsko pravo i saradnju sa velikim brojem sportskih organizacija u okviru razlicitih sportskih grana (nacionalnim granskim savezima, regionalnim savezima i sportskim klubovima).',
        'Odlikuje nas izuzetna istrajnost, upornost, temeljan i posvecen rad koji za glavni cilj ima odnos poverenja koji nastojimo da gradimo i odrzimo sa klijentima.'
      ],
      teamEyebrow: 'Tim',
      teamTitle: 'Posveceni pravni profesionalci',
      practiceEyebrow: 'Oblasti rada',
      practiceTitle: 'Oblasti pravne podrske',
      contactEyebrow: 'Kontakt',
      contactTitle: 'Hajde da razgovaramo o vasim pravnim potrebama',
      requestConsultation: 'Kontakt',
      sendEmail: 'Posalji email'
    }
  },
  en: {
    nav: {
      firm: 'The Firm',
      team: 'Team',
      practiceAreas: 'Practice Areas',
      contact: 'Contact'
    },
    pages: {
      homeTitle: 'About the Firm',
      homeIntroParagraphs: [
        'For more than 20 years, our law office has provided clients with high-quality legal assistance in accordance with the Law on Advocacy and the applicable regulations of the Republic of Serbia. The success and satisfaction of our clients are the top priority of our office and team.',
        'Over the years, the office has worked with numerous clients from the Republic of Serbia, as well as international clients from the region and from other countries in Europe and worldwide, across various areas of law: corporate and commercial law, information technology, construction, property law, litigation and non-litigation proceedings, arbitration, damages, labor law, misdemeanors, contract law and obligations, enforcement proceedings, and more.',
        'The office is particularly proud to have expanded its broad spectrum of services to include sports law and cooperation with a large number of sports organizations across different disciplines (national federations, regional federations, and sports clubs).',
        'We are distinguished by exceptional perseverance, dedication, and thorough work, with the primary goal of building and maintaining a trusted relationship with our clients.'
      ],
      teamEyebrow: 'Team',
      teamTitle: 'Dedicated legal professionals',
      practiceEyebrow: 'Practice Areas',
      practiceTitle: 'Legal Practice Areas',
      contactEyebrow: 'Contact',
      contactTitle: 'Let us discuss your legal needs',
      requestConsultation: 'Contact',
      sendEmail: 'Send Email'
    }
  }
} as const
