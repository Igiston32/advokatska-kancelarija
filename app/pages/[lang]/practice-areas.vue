<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { getLocaleFromParam, localizedText } from '~/composables/useSiteLocale'

const route = useRoute()

const locale = computed(() =>
  getLocaleFromParam(route.params.lang as string | string[] | undefined)
)

const copy = computed(() => localizedText[locale.value])

type PracticeItem = {
  title: string
  description: string[]
}

const practicesByLocale: Record<'sr' | 'en', PracticeItem[]> = {
  sr: [
    {
      title: 'PRIVREDNO PRAVO',
      description: [
        'Kancelarija u polju privrednog prava pruza podrsku od samog osnivanja privrednih subjekata, tokom celog postojanja, a radi postizanja najefikasnijih rezultata i ostvarivanja ciljeva, te pruzamo podrsku i u slucaju eventualnog prekida poslovanja, odnosno prestanka samog subjekta.',
        'Pravna pomoc koju pruzamo je rezultat temeljnog ispitivanja fakticke poslovne situacije nasih klijenata, njihovih ciljeva i sveukupnih trzisnih uslova, sa nastojanjem da im pruzimo najobuhvatnije pravne savete koji su u skladu sa njihovim potrebama i pozitivnim zakonodavstvom.',
        'Kancelarija ima dugogodisnje iskustvo u osnivanju pravnih subjekata, zastupanju pred Agencijom za privredne registre prilikom osnivanja, kao i svake promene koju kroz poslovanje pretrpi privredni subjekat, zastupanju pred Poreskom upravom, bankama i drugim institucijama, sacinjavanju ugovora kako izmedju privrednih subjekata, tako i izmedju privrednih subjekata i fizickih lica i preduzetnika u domacem i spoljnotrgovinskom poslovanju, zastupanju pravnih subjekata u parnicnim postupcima, postupcima pred Sudom casti, arbitraznim sporovima, prekrsajnim postupcima i privrednim prestupima, izradi pravnog due diligence, kao i drugim postupcima vezanim za obavljanje privredne delatnosti.'
      ]
    },
    {
      title: 'GRADJEVINARSTVO',
      description: [
        'U oblasti gradjevinarstva kancelarija ima dugogodisnje iskustvo u radu sa investitorima koje podrazumeva kontinuirano pruzanje pravne pomoci i podrske od pregovora i resavanja imovinskih odnosa na parceli, prikupljanja i predaje kompletne dokumentacije radi pribavljanja gradjevinske dozvole, kao i svih drugih potrebnih dozvola.',
        'Pratimo proces gradnje kako bi tekao u skladu sa rokovima i zakonskom regulativom, zastupamo klijente u svim potrebnim upravnim postupcima, ucestvujemo u postupku pribavljanja upotrebne dozvole, zastupamo pred Republickim geodetskim zavodom, sastavljamo ugovore sa krajnjim kupcima, kao i preduzimamo sve druge potrebne fakticke i pravne radnje.'
      ]
    },
    {
      title: 'RADNO PRAVO',
      description: [
        'Kancelarija se u radu sa privrednim subjektima paralelno bavi i kompletnom zakonskom regulativom koja se tice radnopravnih odnosa, sastavljanja ugovora o radu i usaglasavanja poslovanja klijenata sa vazecim zakonskim i podzakonskim aktima koji se odnose na radno pravo.',
        'Pruzamo podrsku u izradi radnopravnih akata kod poslodavca, savetovanju o upucivanju zaposlenih na rad u inostranstvo, radnom angazovanju stranaca i pribavljanju dozvola za rad, kao i zastupanju u radnim sporovima i pregovorima oko mirnog resenja spora.'
      ]
    },
    {
      title: 'OBLIGACIONO I UGOVORNO PRAVO',
      description: [
        'Tokom dugogodisnjeg rada u privredi, ali i u gradjevinarstvu i drugim granama prava, kancelarija i tim stekli su veliko iskustvo u sastavljanju, sprovodjenju i zastiti prava iz razlicitih vrsta imenovanih i neimenovanih ugovora.',
        'To ukljucuje kupoprodajne ugovore, ugovore o gradjenju, poklonu, zajmu, zakupu i komisionu, ugovore o razlicitim vrstama prevoza, ugovore iz oblasti informacionih tehnologija (implementacija i odrzavanje softvera), ugovore o poslovnoj saradnji, ugovore o izvodjenju radova, ugovore o strucnom angazovanju sportista i sportskih strucnjaka, kao i ugovore o prenosu udela.'
      ]
    },
    {
      title: 'GRADJANSKO PRAVO (SVOJINSKO-PRAVNI ODNOSI, NASLEDNO PRAVO, PORODICNO PRAVO)',
      description: [
        'Kancelarija se bavi zastitom svih oblika prava svojine i drzavine, kako u sudskim postupcima, tako i vaninstitucionalnom zastitom.',
        'Posedujemo veliko iskustvo u sastavljanju ugovora koji se odnose na raspolaganje i zastitu prava svojine, zastupanju klijenata pred katastrom nepokretnosti, utvrdjivanju prava sluzbenosti, zastupanju u ostavinskim postupcima kod primene zakonskog reda nasledjivanja, sastavljanju testamenata, sastavljanju ugovora o podeli imovine supruznika (tzv. predbrachni ugovori), u brakorazvodnim parnicama, postupcima vrsenja/lisenja roditeljskog prava, kao i postupcima za isplatu alimentacije.'
      ]
    },
    {
      title: 'SPORTSKO PRAVO',
      description: [
        'Kancelarija je posebno ponosna na svoj doprinos u razvoju prakse u oblasti sportskog prava koje je krenulo uzlaznom putanjom donosenjem Zakona o sportu 2011. godine, te nastavilo usvajanjem novog zakona 2016. godine.',
        'Nasa kancelarija je 2011. godine bila odabrana kao saradnik Ministarstva sporta i Sportskog saveza Beograda kako bi pomogla postupak uskladjivanja postojecih organizacija sa novim zakonom i preregistracije sportskih organizacija iz Ministarstva u registar Agencije za privredne registre.',
        'Kancelarija poseduje znacajno iskustvo u zastupanju sportskih organizacija - nacionalnih granskih saveza, regionalnih saveza i sportskih klubova i udruzenja, izradi akata i uskladjivanja sa zakonskom regulativom, izradi ugovora o sportskom i strucnom angazovanju sa sportistima i sportskim strucnjacima, kao i strucnjacima u sportu, zastupanju sportskih organizacija pred sudovima i drugim institucijama, zastupanju u inspekcijskim postupcima, kao i upravnim sporovima pred Upravnim sudom proisteklim iz upravnih postupaka.'
      ]
    }
  ],
  en: [
    {
      title: 'CORPORATE LAW',
      description: [
        'In the field of corporate law, the office provides support from the very establishment of business entities, throughout their entire existence, with the aim of achieving the most efficient results and business goals, while also offering support in cases of potential business discontinuation or entity termination.',
        'The legal assistance we provide is the result of a thorough assessment of our clients\' factual business position, their goals, and overall market conditions, with a clear focus on delivering comprehensive legal advice aligned with their needs and applicable legislation.',
        'The office has extensive experience in company formation, representation before the Serbian Business Registers Agency during incorporation and all status changes in business operations, representation before the Tax Administration, banks, and other institutions, drafting contracts between business entities as well as between businesses and individuals or entrepreneurs in domestic and international trade, representation in civil litigation, proceedings before the Court of Honor, arbitration disputes, misdemeanour and economic offence proceedings, legal due diligence, and other procedures related to carrying out business activities.'
      ]
    },
    {
      title: 'CONSTRUCTION LAW',
      description: [
        'In construction law, the office has long-standing experience working with investors and provides continuous legal support from negotiations and resolution of property relations on land plots to collecting and submitting complete documentation for obtaining building permits and all other necessary approvals.',
        'We monitor the construction process to ensure compliance with deadlines and legal regulations, represent clients in required administrative procedures, participate in occupancy permit procedures, represent clients before the Republic Geodetic Authority, draft contracts with end buyers, and undertake all other necessary factual and legal actions.'
      ]
    },
    {
      title: 'LABOR LAW',
      description: [
        'When advising business entities, the office also provides full support regarding labor law regulations, drafting employment contracts, and aligning client operations with applicable labor laws and bylaws.',
        'We assist with drafting employer labor documents, advising on posting employees abroad, hiring foreign nationals and obtaining work permits, as well as representing clients in labor disputes and negotiations aimed at amicable settlement.'
      ]
    },
    {
      title: 'OBLIGATIONS AND CONTRACT LAW',
      description: [
        'Through many years of work in corporate, construction, and other legal fields, our office and team have gained significant experience in drafting, implementing, and protecting rights arising from various named and unnamed contracts.',
        'This includes sale and purchase agreements, construction contracts, gift agreements, loan agreements, lease agreements, commission agreements, contracts for different types of transport, IT contracts related to software implementation and maintenance, business cooperation agreements, works contracts, contracts for professional engagement of athletes and sports experts, as well as share transfer agreements.'
      ]
    },
    {
      title: 'CIVIL LAW (PROPERTY LAW RELATIONS, INHERITANCE LAW, FAMILY LAW)',
      description: [
        'The office provides protection of all forms of ownership and possession rights, both in court proceedings and through out-of-court legal protection.',
        'We have extensive experience in drafting agreements related to the disposition and protection of property rights, representing clients before the real estate cadastre, establishing easement rights, representation in inheritance proceedings under statutory succession rules, drafting wills, drafting matrimonial property division agreements (so-called prenuptial agreements), divorce litigation, proceedings for exercising or deprivation of parental rights, and maintenance/alimony claims.'
      ]
    },
    {
      title: 'SPORTS LAW',
      description: [
        'The office is especially proud of its contribution to the development of sports law practice, which began its upward trajectory with the adoption of the Law on Sports in 2011 and continued with the new law adopted in 2016.',
        'In 2011, our office was selected as a partner of the Ministry of Sports and the Sports Association of Belgrade to assist in harmonizing existing organizations with the new law and in the re-registration of sports organizations from the Ministry register to the Serbian Business Registers Agency register.',
        'The office has significant experience in representing sports organizations - national federations, regional federations, sports clubs and associations - drafting legal acts and ensuring regulatory compliance, drafting sports and professional engagement contracts with athletes and sports professionals, representing sports organizations before courts and other institutions, representation in inspection proceedings, and in administrative disputes before the Administrative Court arising from administrative procedures.'
      ]
    }
  ]
}

const practices = computed(() => practicesByLocale[locale.value])

const introByLocale = {
  sr: [
    'Kancelarija pruza sveobuhvatnu pravnu podrsku u kljucnim oblastima koje su najvaznije za poslovanje, imovinske odnose i dugorocnu zastitu interesa klijenata.',
    'Nas pristup je zasnovan na prakticnim resenjima, preventivnom savetovanju i zastupanju pred nadleznim institucijama i sudovima kada je to potrebno.'
  ],
  en: [
    'The office provides comprehensive legal support in the key practice areas most relevant to business operations, property matters, and long-term protection of client interests.',
    'Our approach combines practical solutions, preventive legal advice, and representation before competent authorities and courts when needed.'
  ]
} as const

const introParagraphs = computed(() => introByLocale[locale.value])

const openIndex = ref<number | null>(0)

const togglePractice = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

watch(locale, () => {
  openIndex.value = 0
})
</script>

<template>
  <section class="section">
    <h1>{{ copy.pages.practiceTitle }}</h1>
    <p v-for="paragraph in introParagraphs" :key="paragraph" class="lead practice-intro">
      {{ paragraph }}
    </p>

    <div class="practice-accordion reveal">
      <article v-for="(practice, index) in practices" :key="practice.title" class="practice-item">
        <button
          type="button"
          class="practice-trigger"
          :aria-expanded="String(openIndex === index)"
          @click="togglePractice(index)"
        >
          <span>{{ practice.title }}</span>
          <span class="practice-icon">{{ openIndex === index ? '−' : '+' }}</span>
        </button>

        <div v-if="openIndex === index" class="practice-panel">
          <p v-for="paragraph in practice.description" :key="paragraph">{{ paragraph }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
