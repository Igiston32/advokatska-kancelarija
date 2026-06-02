# Advokatska Kancelarija

Ovaj fajl je radna dokumentacija za projekat. Slobodno ga dopunjuj kako se aplikacija razvija.

## Osnovne Informacije

- Naziv projekta: `advokatska-kancelarija`
- Lokacija na racunaru: `/Users/igor/Projects/advokatska-kancelarija`
- Tip projekta: Nuxt 4 / Vue web aplikacija
- Package manager: npm
- Git repo: inicijalizovan lokalno

## Verzije

- Homebrew: `5.1.14`
- Node.js: `v26.0.0`
- npm: `11.12.1`
- Nuxt: `4.4.6`
- Vue: `3.5.x`

## Vazne Komande

Pokretanje lokalnog development servera:

```bash
cd /Users/igor/Projects/advokatska-kancelarija
npm run dev
```

Production build:

```bash
npm run build
```

Staticko generisanje sajta:

```bash
npm run generate
```

Preview production build-a:

```bash
npm run preview
```

## Cloudflare Pages

Za staticki sajt:

- Build command: `npm run generate`
- Output directory: `.output/public`

Za SSR/edge Nuxt aplikaciju:

- Build command: `npm run build`
- Output directory: Cloudflare/Nuxt integracija automatski detektuje Nuxt output

Napomena: za advokatski sajt koji je uglavnom prezentacioni, staticki deploy preko `npm run generate` je najjednostavniji pocetak.

## GitHub

Repo je inicijalizovan lokalno, ali pocetni fajlovi jos nisu commitovani.

Tipican prvi commit:

```bash
git add .
git commit -m "Initial Nuxt project"
```

Posle kreiranja praznog GitHub repozitorijuma:

```bash
git remote add origin <github-repo-url>
git branch -M main
git push -u origin main
```

## Korisni Linkovi

- Nuxt Cloudflare deploy: https://nuxt.com/deploy/cloudflare
- Cloudflare Nuxt guide: https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/
- Nuxt docs: https://nuxt.com/docs
- Vue docs: https://vuejs.org/guide/introduction.html

## Beleške

- Projekat je napravljen minimalnim Nuxt template-om.
- `npm run build` je provereno prosao.
- `npm run generate` je provereno prosao.
- Staticki output se nalazi u `.output/public`.

## Sledeci Koraci

- Osmisliti strukturu sajta: pocetna, usluge, o kancelariji, kontakt.
- Dodati osnovni dizajn i tipografiju.
- Dodati SEO meta podatke.
- Povezati projekat sa GitHub repozitorijumom.
- Povezati GitHub repo sa Cloudflare Pages.
