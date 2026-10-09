# GAIA — Complete English version

The final French codebase was the sole translation source. Seven complete English pages replace the public English placeholders and the outdated English homepage.

| Page | French | English | Desktop 1440 | Mobile 390 |
|---|---|---|---|---|
| Homepage | `/fr/` | `/en/` | [JPEG](home-1440.jpg) | [JPEG](home-390.jpg) |
| Acupuncture | `/fr/acupuncture/` | `/en/acupuncture/` | [JPEG](acupuncture-1440.jpg) | [JPEG](acupuncture-390.jpg) |
| Aculift | `/fr/aculift/` | `/en/aculift/` | [JPEG](aculift-1440.jpg) | [JPEG](aculift-390.jpg) |
| Pranic Healing | `/fr/pranic-healing/` | `/en/pranic-healing/` | [JPEG](pranic-1440.jpg) | [JPEG](pranic-390.jpg) |
| Women’s Health | `/fr/sante-feminine/` | `/en/womens-health/` | [JPEG](women-1440.jpg) | [JPEG](women-390.jpg) |
| About | `/fr/a-propos/` | `/en/about/` | [JPEG](about-1440.jpg) | [JPEG](about-390.jpg) |
| Booking | `/prendre-rendez-vous/` | `/en/book-an-appointment/` | [JPEG](booking-1440.jpg) | [JPEG](booking-390.jpg) |

## Expressions adapted for natural English

| French | English chosen |
|---|---|
| Vivre sa féminité, pas la subir. | Embrace your womanhood. On your own terms. |
| la sorcière bien aimée | the much-loved witch |
| culcul la praline | a bit cheesy |
| À l’écoute, pour de vrai. | Listening. Really listening. |
| De fil en aiguille (littéralement cette fois) | One thread led to another (through a needle this time, quite literally) |
| Coincidences ? Pas sûre ! | Coincidences? Not so sure! |
| Et je crois que c’est plutôt bon signe non ? | And I think that’s a pretty good sign, isn’t it? |
| Nous ne fonctionnons pas de manière linéaire. | We don’t function in a straight line. |
| la thérapeute vers laquelle je tends | The practitioner I’m working towards being |
| Diagnostiquer (energetic assessment context) | Assess |
| Prendre rendez-vous | Book an appointment |
| On en parle ? | Shall we talk? |

Other adaptations: French education/employment references remain “Preparatory classes, business school, a permanent job”; “recentrage” becomes “feel centred”; “élan” becomes “momentum”; “appropriation” of cycle awareness is rendered as “reclaim this knowledge”. No qualifications or clinical claims were added.

“Nothing works in silos.” and “GAIA creates spaces for reconnection.” remain unchanged. Official Pranic Healing course names remain unchanged.

## Booking and language architecture

- English booking: `/en/book-an-appointment/`; French booking remains `/prendre-rendez-vous/`.
- All English booking CTAs lead to the English booking page, rather than directly to WhatsApp.
- WhatsApp uses the existing centralized phone number. No message was sent.
- English prefilled message: “Hi Lauriane, I’d like to book an appointment. Could you let me know your next available times?”
- All 14 language-switch directions were tested by actual navigation. Each of the seven pairs has reciprocal `fr`, `en`, `x-default` hreflang.
- Metadata, Open Graph descriptions, image alt texts, and shared interface labels were translated.
- The sitemap now lists finished FR/EN pairs plus the unchanged main `/links/` page; legacy placeholders are not treated as translated equivalents.
- `/links/` remains the main French Instagram hub, unchanged. No new language-specific links page was created.
- Existing hidden legacy Contact, Journal and EN Links code/routes were retained, not translated into supposed final content. They are not linked from the completed English navigation or its footer. No Journal content or navigation item was created or reintroduced.

## Verification

- Production build passed: 22 static HTML routes.
- Seven English pages checked at 1440, 1280, 1024, 768, 430, 390 and 360px: 49 final viewport checks.
- Zero horizontal document overflow across those 49 checks.
- Desktop dropdown opens with keyboard and closes with Escape. Mobile menu and nested Practices accordion open; menu stays within viewport width.
- Main H1/H2/H3 bounds stay within the viewport; closed-details descendants are excluded from meaningful overflow interpretation.
- One H1 per page; internal main-content links resolve to generated routes.
- Matching French/English section structure, heading counts, paragraph counts and image counts were verified.
- French rendered main-content text and image references were compared against the preceding SEO audit snapshot: identical across the seven French pages and `/links/`.
- No photograph, palette, CSS typography or page layout was redesigned. Booking’s English manual line break is placed after “Book an” so “an” is not stranded.
- 14 full-page JPEGs: desktop 1440 and mobile 390 for every translated page.
- Browser testing used local headless Chrome with viewport emulation; not physical devices.

## Existing hosting/SEO conditions outside this translation pass

The existing private audience and configured canonical origin were preserved. This translation does not resolve the previously audited public-access/canonical-domain configuration.

## Confirmations

- French copy untouched.
- All five targeted English internal-page placeholders replaced with complete pages, English homepage refreshed from the final French source, and true English booking added.
- Original images, fonts, section order and brand identity preserved.
- No new service, qualification, testimonial, Journal article or medical claim.
- `/links/` unchanged.
