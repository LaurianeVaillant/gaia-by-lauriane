# GAIA — Audit SEO global, 9 octobre 2026

Audit uniquement. Source et HTML statique de la dernière version publiée : `12d605058fde23870ec62caed672059776613014`. Contrôle HTTP anonyme du site hébergé et du domaine déclaré. Aucun code, contenu ou réglage modifié.

## Conclusion principale

La base on-page française est globalement saine : titres et descriptions présents, un H1 par page, hiérarchie cohérente, liens HTML crawlables, images avec alt et dimensions, contenu rendu côté build.

Le lancement SEO est toutefois bloqué par deux faits vérifiés :
1. Le site `https://gaia-by-lauriane.vaillantlauriane.chatgpt.site` est propriétaire-privé. Toutes les routes testées, y compris robots et sitemap, renvoient HTTP 401 aux visiteurs anonymes. C’est cohérent avec le réglage d’accès actuel, pas un défaut de la copy. Google ne peut pas indexer ces pages derrière authentification. [Référence Google sur les statuts HTTP](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes).
2. Toutes les canonicals et les URL du sitemap/OG/schema pointent vers `https://gaiabylauriane.com`, alors que ce domaine ne résout pas lors de l’audit. L’échec DNS local est confirmé par Google Public DNS : Status 3 / NXDOMAIN. Cette origine doit être opérationnelle ou remplacée par le domaine public réellement retenu avant lancement. [Référence Google sur la canonicalisation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

Ce rapport distingue les balises du HTML construit et l’accessibilité réelle publique. L’absence de noindex dans les pages ne rend pas un site privé indexable. Aucun accès Search Console, données CrUX ou résultat d’indexation Google n’a été consulté. Les résultats de production après authentification et la véritable 404 hébergée ne peuvent pas être déduits du 401 anonyme.

## Codes partagés

- **G1 — high : accès privé 401.** À résoudre uniquement quand le lancement public est décidé.
- **G2 — high : origine canonique non résolue.** Canonical, hreflang, sitemap, OG et Person utilisent tous le domaine non opérationnel.
- **G3 — high pour le lancement bilingue : traductions internes incomplètes.** Le sélecteur FR/EN existe, mais les cinq pages EN service/À propos sont des pages d’attente plutôt que des équivalents complets. Les hreflang HTML sont réciproques pour ces paires, mais les contenus ne sont pas équivalents.
- **G4 — medium : ancien Contact dans le footer.** Le footer partagé pointe vers `/fr/contact/` ou `/en/contact/`, qui affichent encore « Informations à venir » / « Details coming soon », alors que la réservation WhatsApp fonctionne déjà. La contradiction touche toutes les pages Base.
- **G5 — low à medium : partage social générique.** Sept pages principales utilisent la même image portrait verticale `/images/portrait-1200.webp`. Le partage distingue les titres/descriptions mais pas les images ; l’URL absolue dépend de G2. Aucun problème de contenu client-only.

Les severities indiquent le risque avant un lancement public, pas une pénalité Google mesurée.

## Audit page par page

### Accueil

URL hébergée actuelle : `https://gaia-by-lauriane.vaillantlauriane.chatgpt.site/fr/`

SEO STATUS
- **Title :** `GAIA by Lauriane | Acupuncture traditionnelle, Aculift & Pranic Healing` — présent et unique parmi les huit pages.
- **Meta description :** « Découvrez GAIA by Lauriane : acupuncture traditionnelle, Aculift et Pranic Healing, dans une approche qui relie le corps, l’énergie et nos différents fonctionnements. » — présente ; pertinence détaillée ci-dessous.
- **H1 :** 1 — « Lauriane — Praticienne en acupuncture traditionnelle ».
- **Heading hierarchy :** H1 → H2 de sections → H3 des trois pratiques ; pas de saut de niveau ni doublon de heading problématique. Les labels éditoriaux anglais sont un choix de marque dans une page majoritairement française.
- **Sujet / intention :** Présentation de GAIA et orientation vers les pratiques. Mot-clé acupuncture traditionnelle clairement présent ; copy naturelle, sans bourrage.
- **Canonical :** `https://gaiabylauriane.com/fr/` — chemin cohérent, origine bloquée par G2.
- **Indexability :** HTTP public 401 (G1) ; aucune meta robots/noindex dans cette page construite. Absence de noindex ≠ garantie d’indexation.
- **Internal links :** Liens vers les trois pratiques, Santé féminine, À propos et réservation ; ancres de pratiques explicites.
- **Alt text / images :** 4 images, alt présents, dimensions présentes. Soleil/lune : alt descriptif acceptable ; un alt vide serait envisageable si ce symbole est considéré purement décoratif.
- **OG metadata :** og:title = title, og:description = description, og:url = canonical, og:type = website, og:locale = fr_FR ; Twitter summary_large_image. Image commune portrait-1200.webp, sans og:image:width/height.
- **Language metadata :** html lang=fr. HTML hreflang fr/en auto-référencés et x-default=FR ; paire EN /en/.

ISSUES
- G1/G2 high ; G4 medium. G5 low. Titre assez long mais descriptif : éventuelle troncature, pas une erreur technique. Les lieux sont dans le contenu, pas dans le title : opportunité locale, pas obligation.

### Acupuncture traditionnelle

URL hébergée actuelle : `https://gaia-by-lauriane.vaillantlauriane.chatgpt.site/fr/acupuncture/`

SEO STATUS
- **Title :** `Acupuncture traditionnelle — Lauriane | GAIA` — présent et unique parmi les huit pages.
- **Meta description :** « Découvrez l’acupuncture traditionnelle avec Lauriane : son approche, le déroulement d’une séance et les informations de consultation. » — présente ; pertinence détaillée ci-dessous.
- **H1 :** 1 — « Acupuncture traditionnelle ».
- **Heading hierarchy :** H1 → H2 approche, réseau, séance, motifs, attentes, CTA ; H3 des étapes et attentes, correctement subordonnés.
- **Sujet / intention :** Service et déroulement de consultation bien identifiés ; pas de promesse de résultat garanti.
- **Canonical :** `https://gaiabylauriane.com/fr/acupuncture/` — chemin cohérent, origine bloquée par G2.
- **Indexability :** HTTP public 401 (G1) ; aucune meta robots/noindex dans cette page construite. Absence de noindex ≠ garantie d’indexation.
- **Internal links :** Liens vers réservation et autres pages via navigation ; ancres descriptives.
- **Alt text / images :** 1 photo significative, alt descriptif, width/height, srcset/sizes et priorité Hero. Illustrations SVG décoratives masquées aux technologies d’assistance.
- **OG metadata :** og:title = title, og:description = description, og:url = canonical, og:type = website, og:locale = fr_FR ; Twitter summary_large_image. Image commune portrait-1200.webp, sans og:image:width/height.
- **Language metadata :** html lang=fr. HTML hreflang fr/en auto-référencés et x-default=FR ; paire EN /en/acupuncture/.

ISSUES
- G1/G2/G3 high ; G4 medium ; G5 low. « Diagnostiquer » reste susceptible d’être compris comme diagnostic médical malgré l’explication du bilan énergétique : medium, à faire valider dans son contexte professionnel. Disclaimer explicite présent.

### Aculift

URL hébergée actuelle : `https://gaia-by-lauriane.vaillantlauriane.chatgpt.site/fr/aculift/`

SEO STATUS
- **Title :** `Aculift — Approche du visage par Lauriane | GAIA` — présent et unique parmi les huit pages.
- **Meta description :** « Découvrez l’Aculift avec Lauriane : une approche personnalisée du visage inspirée de l’acupuncture traditionnelle, autour de l’éclat et de la détente des traits. » — présente ; pertinence détaillée ci-dessous.
- **H1 :** 1 — « Aculift ».
- **Heading hierarchy :** H1 → H2 définition, raisons, personnalisation, séance, CTA ; H3 des deux étapes, hiérarchie correcte.
- **Sujet / intention :** Approche esthétique du visage identifiable. Aucun avant/après garanti ni promesse de guérison.
- **Canonical :** `https://gaiabylauriane.com/fr/aculift/` — chemin cohérent, origine bloquée par G2.
- **Indexability :** HTTP public 401 (G1) ; aucune meta robots/noindex dans cette page construite. Absence de noindex ≠ garantie d’indexation.
- **Internal links :** Lien contextualisé vers acupuncture et CTA réservation.
- **Alt text / images :** Photo avec alt ; motif de visage avec alt vide adapté à son rôle décoratif. Dimensions et lazy-loading du motif présents.
- **OG metadata :** og:title = title, og:description = description, og:url = canonical, og:type = website, og:locale = fr_FR ; Twitter summary_large_image. Image commune portrait-1200.webp, sans og:image:width/height.
- **Language metadata :** html lang=fr. HTML hreflang fr/en auto-référencés et x-default=FR ; paire EN /en/aculift/.

ISSUES
- G1/G2/G3 high ; G4 medium ; G5 low. « Naturelle, sans injection et sans médicaments » n’est pas une garantie d’innocuité ; aucun « sans risque » détecté. Footer de complémentarité médicale présent ; pas de disclaimer médical local distinct.

### Pranic Healing

URL hébergée actuelle : `https://gaia-by-lauriane.vaillantlauriane.chatgpt.site/fr/pranic-healing/`

SEO STATUS
- **Title :** `Pranic Healing — Présentiel & à distance | GAIA` — présent et unique parmi les huit pages.
- **Meta description :** « Pranic Healing avec Lauriane : séances en présentiel ou à distance, approche énergétique indépendante ou complémentaire à l’acupuncture. » — présente ; pertinence détaillée ci-dessous.
- **H1 :** 1 — « Pranic Healing ».
- **Heading hierarchy :** H1 → H2 compréhension, origine, réseau, besoins, modalités, CTA ; H3 des modalités, hiérarchie correcte.
- **Sujet / intention :** Intention énergétique explicitée, présentiel et distance lisibles. Modèle aura/chakras distingué de l’anatomie médicale.
- **Canonical :** `https://gaiabylauriane.com/fr/pranic-healing/` — chemin cohérent, origine bloquée par G2.
- **Indexability :** HTTP public 401 (G1) ; aucune meta robots/noindex dans cette page construite. Absence de noindex ≠ garantie d’indexation.
- **Internal links :** Lien externe d’origine identifié, lien vers acupuncture et CTA ; ancres utiles.
- **Alt text / images :** 1 photo, alt descriptif, dimensions, srcset 600/1000 et priorité Hero.
- **OG metadata :** og:title = title, og:description = description, og:url = canonical, og:type = website, og:locale = fr_FR ; Twitter summary_large_image. Image commune portrait-1200.webp, sans og:image:width/height.
- **Language metadata :** html lang=fr. HTML hreflang fr/en auto-référencés et x-default=FR ; paire EN /en/pranic-healing/.

ISSUES
- G1/G2/G3 high ; G4 medium ; G5 low. « Présent dans plus de 126 pays » : source précise/date non fournie, low à medium. Accompagnement de symptômes et travail sur le « physique » : medium pour étayer le périmètre et distinguer modèle énergétique et efficacité clinique ; aucun résultat médical garanti détecté. Disclaimer explicite présent.

### Santé féminine

URL hébergée actuelle : `https://gaia-by-lauriane.vaillantlauriane.chatgpt.site/fr/sante-feminine/`

SEO STATUS
- **Title :** `Santé féminine — Cycles & approche de Lauriane | GAIA` — présent et unique parmi les huit pages.
- **Meta description :** « Santé féminine avec GAIA : le regard de Lauriane sur le cycle menstruel, les sujets qu’elle approfondit et sa spécialisation en développement. » — présente ; pertinence détaillée ci-dessous.
- **H1 :** 1 — « Santé féminine ».
- **Heading hierarchy :** H1 → H2 approche, cycle, sujets, spécialisation, CTA ; pas de H3 nécessaire pour une simple liste de sujets. La phrase manifesto en paragraphe n’est pas un défaut SEO.
- **Sujet / intention :** Axe éditorial/spécialisation en développement clairement annoncé ; sujets féminins nommés naturellement.
- **Canonical :** `https://gaiabylauriane.com/fr/sante-feminine/` — chemin cohérent, origine bloquée par G2.
- **Indexability :** HTTP public 401 (G1) ; aucune meta robots/noindex dans cette page construite. Absence de noindex ≠ garantie d’indexation.
- **Internal links :** Ancre locale vers approche, lien contextuel acupuncture, CTA réservation.
- **Alt text / images :** 1 photo, alt présent, dimensions et srcset.
- **OG metadata :** og:title = title, og:description = description, og:url = canonical, og:type = website, og:locale = fr_FR ; Twitter summary_large_image. Image commune portrait-1200.webp, sans og:image:width/height.
- **Language metadata :** html lang=fr. HTML hreflang fr/en auto-référencés et x-default=FR ; paire EN /en/womens-health/.

ISSUES
- G1/G2/G3 high ; G4 medium ; G5 low. SOPK, endométriose, fertilité sont présentés comme sujets approfondis, pas comme maladies guéries. Les compétences actuelles et en cours de développement gagneraient à être documentées précisément : medium pour la confiance santé. Disclaimer général dans le footer présent.

### À propos

URL hébergée actuelle : `https://gaia-by-lauriane.vaillantlauriane.chatgpt.site/fr/a-propos/`

SEO STATUS
- **Title :** `À propos de Lauriane — Parcours & formations | GAIA` — présent et unique parmi les huit pages.
- **Meta description :** « Découvrez le parcours de Lauriane : voyages en Asie, yoga, formation en acupuncture traditionnelle et naissance de GAIA by Lauriane. » — présente ; pertinence détaillée ci-dessous.
- **H1 :** 1 — « Lauriane ».
- **Heading hierarchy :** Un H1 ; H2 de récit/formation/GAIA/approche, H3 des formations, hiérarchie cohérente.
- **Sujet / intention :** Parcours personnel et formations documentés ; bonne contribution à la confiance et à l’identité de l’autrice.
- **Canonical :** `https://gaiabylauriane.com/fr/a-propos/` — chemin cohérent, origine bloquée par G2.
- **Indexability :** HTTP public 401 (G1) ; aucune meta robots/noindex dans cette page construite. Absence de noindex ≠ garantie d’indexation.
- **Internal links :** Liens vers formations externes, pratiques et réservation ; ancres descriptives.
- **Alt text / images :** 7 photos, toutes avec alt et dimensions ; 6 en lazy, Hero eager. Plus gros fichier référencé : journal-india-1200.webp, 447782 octets (~437 KiB). Noms journal-* peu descriptifs mais pas bloquants.
- **OG metadata :** og:title = title, og:description = description, og:url = canonical, og:type = website, og:locale = fr_FR ; Twitter summary_large_image. Image commune portrait-1200.webp, sans og:image:width/height.
- **Language metadata :** html lang=fr. HTML hreflang fr/en auto-référencés et x-default=FR ; paire EN /en/about/.

ISSUES
- G1/G2/G3 high ; G4 medium ; G5 low. H1 « Lauriane » adapté au récit mais peu précis pour distinguer une professionnelle : low. Identité professionnelle complète et qualifications vérifiables à préciser si souhaité, sans inventer de titre médical. Photos relativement lourdes et sizes tablette parfois sous-estimés : medium performance.

### Prendre rendez-vous

URL hébergée actuelle : `https://gaia-by-lauriane.vaillantlauriane.chatgpt.site/prendre-rendez-vous/`

SEO STATUS
- **Title :** `Prendre rendez-vous — GAIA by Lauriane` — présent et unique parmi les huit pages.
- **Meta description :** « Préparer une rencontre avec Lauriane et découvrir les informations de rendez-vous GAIA. » — présente ; pertinence détaillée ci-dessous.
- **H1 :** 1 — « Prendre rendez-vous. ».
- **Heading hierarchy :** H1 → trois H2 de pratiques, étapes et clôture, hiérarchie correcte.
- **Sujet / intention :** Intention transactionnelle très claire. WhatsApp est le vrai canal, lieux confirmés individuellement.
- **Canonical :** `https://gaiabylauriane.com/prendre-rendez-vous/` — chemin cohérent, origine bloquée par G2.
- **Indexability :** HTTP public 401 (G1) ; aucune meta robots/noindex dans cette page construite. Absence de noindex ≠ garantie d’indexation.
- **Internal links :** Quatre liens de pratiques, deux liens WhatsApp, CTA du header reste sur la page de réservation.
- **Alt text / images :** Aucune image de contenu : pas de manque d’alt.
- **OG metadata :** og:title = title, og:description = description, og:url = canonical, og:type = website, og:locale = fr_FR ; Twitter summary_large_image. Image commune portrait-1200.webp, sans og:image:width/height.
- **Language metadata :** html lang=fr. Réservation uniquement FR, x-default auto-référencé sans paire fr/en ; sélecteur EN vers /en/contact/.

ISSUES
- G1/G2 high ; G4 medium. Sélecteur EN vers /en/contact/ d’attente, pas une réservation traduite : high pour le lancement bilingue. Meta description dupliquée avec /fr/contact/ et peu spécifique à WhatsApp : medium. G5 low.

### /links

URL hébergée actuelle : `https://gaia-by-lauriane.vaillantlauriane.chatgpt.site/links/`

SEO STATUS
- **Title :** `GAIA by Lauriane — Liens` — présent et unique parmi les huit pages.
- **Meta description :** « Reconnexion · Acupuncture · Énergie · Féminin. Retrouvez les pratiques de Lauriane et prenez rendez-vous. » — présente ; pertinence détaillée ci-dessous.
- **H1 :** 1 — « Reconnexion · Acupuncture · Énergie · Féminin ».
- **Heading hierarchy :** Un H1 de positionnement ; pas de H2/H3 nécessaire pour trois actions.
- **Sujet / intention :** Page Instagram utilitaire, courte intentionnellement ; ne doit pas être évaluée comme un article pauvre.
- **Canonical :** `https://gaiabylauriane.com/links/` — chemin cohérent, origine bloquée par G2.
- **Indexability :** HTTP public 401 (G1) ; aucune meta robots/noindex dans cette page construite. Absence de noindex ≠ garantie d’indexation.
- **Internal links :** Exactement trois actions : réservation, acupuncture, accueil ; logo vers accueil. Aucun Journal/WhatsApp direct.
- **Alt text / images :** Photo avec alt et dimensions, eager par défaut et fetchpriority high. 301514 octets (~294 KiB), pas de srcset : medium performance mobile ; ratio déclaré 900×1175 très proche de la photo réelle, impact faible.
- **OG metadata :** Pas de balises OG ni Twitter/X.
- **Language metadata :** html lang=fr. Aucun hreflang HTML ; /fr/links/ utilise le même composant FR et la même canonical.

ISSUES
- G1/G2 high. OG et Twitter absents : medium si partage de cette URL attendu. /fr/links/ est un doublon canonisé vers /links/ mais également listé dans le sitemap : medium. Cluster sitemap EN incohérent : medium. Décider si cette page doit être indexée ; indexation actuelle autorisée dans le HTML, ni obligation de noindex ni besoin automatique de la rendre indexable.

## URL et langues : inventaire exact

Routes principales : `/fr/`, `/fr/acupuncture/`, `/fr/aculift/`, `/fr/pranic-healing/`, `/fr/sante-feminine/`, `/fr/a-propos/`, `/prendre-rendez-vous/`, `/links/`.

Autres routes générées : `/`, `/fr/journal/`, `/fr/contact/`, `/fr/links/`, `/en/`, `/en/acupuncture/`, `/en/aculift/`, `/en/pranic-healing/`, `/en/womens-health/`, `/en/about/`, `/en/journal/`, `/en/contact/`, `/en/links/`.

Les slugs sont courts et compréhensibles. « Aculift » et « Pranic Healing » sont des noms de pratiques conservés entre langues ; ce n’est pas une incohérence de traduction à elle seule. Réservation et links sans préfixe sont des routes globales FR ; ce mélange demande une politique cohérente, pas forcément un renommage.

Trailing slash configuré `always`. Les liens internes et canonicals principaux finissent par `/`. Le comportement de redirection sans slash en production est masqué par le 401 et reste à retester après ouverture.

La racine `/` est déclarée avec Astro.redirect('/fr/',302), mais le build statique contient un document de redirection meta-refresh après 2 secondes, un lien et noindex, pas la preuve d’une réponse serveur 302. Avant lancement, vérifier une vraie redirection HTTP permanente si /fr/ est le choix durable. Le noindex de cette page intermédiaire est intentionnel ; il ne concerne pas les huit pages de contenu.

L’accueil EN contient une traduction réelle. Les pages `/en/acupuncture/`, `/en/aculift/`, `/en/pranic-healing/`, `/en/womens-health/`, `/en/about/` affichent surtout quelques lignes et « This page will be developed… ». Ne pas les présenter comme les équivalents achevés des pages FR. Le header anglais et /en/links/ conduisent aussi vers la réservation FR : expérience partiellement traduite.

`/en/links/` reste un ancien hub avec lien Journal. `/fr/links/` n’a pas de hreflang retour HTML et canonicalise vers /links/, tandis que /en/links/ et le sitemap la déclarent comme équivalent français. Cluster à rationaliser. [Google demande des variantes et liens de retour cohérents](https://developers.google.com/search/docs/specialty/international/localized-versions).

## Sitemap et robots

- sitemap.xml présent dans le build, XML valide, 20 entrées. Les huit pages demandées sont incluses ; fr/en/x-default sont fournis pour les 18 routes préfixées, réservation et /links/ ajoutées séparément.
- Toutes les loc utilisent le domaine non résolu G2.
- Journal FR/EN et Contact FR/EN d’attente inclus. Journal retiré de la navigation primaire FR mais encore découvrable dans le sitemap, et /en/links/ y mène. Ils ne sont donc pas réellement exclus du futur périmètre indexable.
- `/fr/links/` est dans le sitemap alors que sa canonical est `/links/` : double signal inutile. [Google recommande les URL canoniques dans le sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- `/links/` peut rester indexable si l’objectif est une porte d’entrée de marque ; peut être exclue de l’index si seul le trafic Instagram est recherché. Décision éditoriale à prendre, pas anomalie automatique.
- robots.txt existe : User-agent: *, Allow: /, Sitemap: https://gaiabylauriane.com/sitemap.xml. Aucun blocage applicatif accidentel ; aucune exclusion d’attente. Les deux fichiers renvoient 401 sur le site public actuel. Robots ne remplace pas une authentification ni une politique d’indexation.
- Aucun dossier src, fichier de développement ou slot AboutPhoto DEV repéré dans le HTML publié. Les placeholders sont le principal contenu interne exposé par le build.

## Social, données structurées et marque

- Sept pages principales ont toutes les balises OG essentielles et Twitter summary_large_image ; og:title/description propres à chaque page. Même image portrait verticale 1200×1800 environ 98 KiB partout. Fonctionnelle une fois domaine accessible, mais cadrage social horizontal potentiellement moins adapté et contexte service peu distinct.
- /links/ n’a pas de métadonnées sociales. OG URLs et image absolue non accessibles sur le domaine actuellement déclaré.
- Person JSON-LD présent sur les pages Base : name Lauriane, jobTitle praticienne en acupuncture traditionnelle, url page À propos. JSON syntaxiquement valide. Répétition du même Person n’est pas une erreur ; @id stable et identité vérifiée pourraient améliorer les liens entre pages.
- Pas de LocalBusiness/ProfessionalService, WebSite ou BreadcrumbList. Ils peuvent être utiles ultérieurement : WebSite pour identité du site ; BreadcrumbList si un fil de navigation réel est cohérent ; ProfessionalService seulement avec renseignements exacts et activités/lieux vérifiables. Pas d’adresse, horaires, qualifications, avis ou profil à inventer.
- Pas d’Article : approprié puisqu’aucun article réel n’est disponible. Ne pas utiliser de schéma médecin/établissement médical pour une pratique non documentée comme telle. Un schéma ne garantit pas un résultat enrichi.
- Favicon SVG présent et relié aux pages. Pas d’apple-touch-icon ni de manifest trouvé : nice to have, pas blocage d’indexation. Titres de navigateur cohérents GAIA ; racine redirect et placeholders ont leurs propres titres.

## SEO local

Paris, Val-d’Oise et Goa apparaissent naturellement sur accueil, À propos et réservation. La réservation précise des périodes de présence et confirmation individuelle ; pas de contradiction géographique évidente dans les pages principales.

Nom de marque + prénom visibles ; téléphone disponible via lien WhatsApp international, mais pas de bloc NAP complet avec adresse publique et téléphone en clair. Pas d’adresse permanente ni de périodes actuellement publiées. Les lieux sont donc trop généraux pour une implantation locale précise, mais cette prudence vaut mieux qu’une adresse inventée.

La structure peut accueillir des informations Google Business Profile plus tard, mais aucun profil relié/validé ni sameAs Instagram/GBP n’a été identifié. Vérifier l’éligibilité et les lieux réels avant toute fiche locale. Contact d’attente contredit la disponibilité du parcours de réservation : G4 à traiter en priorité avant cette intégration. Ne pas créer des pages locales quasiment identiques uniquement pour multiplier les villes.

## Contenu santé et confiance

Aucune promesse explicite de guérison, aucun résultat garanti ni invitation à remplacer un suivi médical trouvé dans les huit pages. Cela ne valide pas l’efficacité clinique des pratiques.

- Footer général : « Pratiques complémentaires, sans substitution au suivi médical. » présent sur les sept pages Base.
- Acupuncture : disclaimer explicite non-substitution ; étape « Diagnostiquer » décrit un bilan énergétique. Risque de confusion avec diagnostic médical à clarifier/valider, sans conclusion juridique.
- Pranic Healing : disclaimer explicite et distinction modèle aura/chakras vs anatomie médicale. Le lien vers l’organisme explique l’origine, pas une preuve clinique. Chiffre « plus de 126 pays » à sourcer/date ; portée physique/énergétique et accompagnement de symptômes à documenter avec prudence.
- Santé féminine : spécialisation en développement explicitement annoncée. SOPK/endometriose/fertilité sont sujets de formation, pas des cures promises. Documenter qualifications et périmètre actuels.
- Aculift : claims modestes autour de tonicité/éclat/détente ; « naturel » n’équivaut pas à « sans risque ». Pas de promesse permanente/résultat chiffré détectée.
- /links/ : aucun conseil/claim médical, absence de disclaimer local non problématique pour ce simple hub.

L’autrice et les formations sont visibles sur À propos, ce qui aide la confiance. L’identité professionnelle, les formations précises et des références pertinentes seraient plus utiles qu’une augmentation artificielle de mots-clés. [Google accorde une attention accrue à la fiabilité des sujets santé](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Images, performance et Core Web Vitals

- Aucun alt manquant sur les images des huit pages ; motif Aculift alt vide décoratif, SVG majoritairement aria-hidden. Symboles descriptifs acceptables quand informatifs.
- Toutes les images ont width/height. Priorité haute et eager pour les Hero ; lazy pour les images sous le pli. Ratios et cadres fixes limitent le CLS potentiel.
- WebP et srcset déjà présents sur les photos, sauf /links/. Plus grosses ressources effectivement référencées : À propos, journal-india-1200 437 KiB, journal-travel-1200 300 KiB, journal-training-1200 273 KiB ; /links/ photo 294 KiB. Pas de source photo de plusieurs mégaoctets servie dans ces pages.
- sizes sous-estime parfois l’image sur tablette empilée (Aculift 768, Santé féminine 768, archives À propos) en déclarant encore environ 45–50vw. Cela peut servir une image moins définie que nécessaire ; opportunité de qualité/performance, pas défaut d’indexation.
- public/images total environ 4,9 MiB avec anciennes copies about-india/journal-india et autres assets historiques. Tout ce dossier n’est pas téléchargé à chaque page. Nettoyage éventuel des assets inutilisés ne doit pas être présenté comme gain de chargement garanti.
- Deux CSS par page : accueil environ 36 + 52 KiB bruts, pages internes 36 + 64 KiB bruts. CSS partagé de route embarque plusieurs systèmes de pages et règles accumulées : render-blocking et CSS inutilisé potentiels, à mesurer plutôt qu’à refactorer à l’aveugle.
- Fraunces et Instrument Sans WOFF2 préchargés sur les principales pages FR ; Italianno en WOFF2 avec font-display swap. Les multiples @font-face peuvent désigner le même fichier, généralement réutilisé par cache, pas forcément une double requête.
- DM Sans et Cormorant restent pour les pages EN/Contact/Journal legacy, avec anciennes polices TTF présentes dans public/fonts. Leur présence disque ne prouve pas qu’elles sont téléchargées sur les pages FR approuvées. Faire un audit réseau ciblé avant nettoyage.
- JavaScript léger : environ quelques centaines d’octets pour la navigation, pas de grosse application hydratée ni contenu principal dépendant du JS. Données Person statiques.
- Pas de score Lighthouse ni données terrain LCP/INP/CLS obtenus. L’accès privé et domaine non résolu empêchent un audit public représentatif. Il s’agit de readiness, pas d’une certification Core Web Vitals.

## HTTP / indexabilité technique

Toutes les URL hébergées testées — racine, huit pages, sitemap, robots, Journal et URL inexistante — renvoient 401 en anonyme. Le contrôle Sites confirme accès custom avec uniquement le propriétaire. Ce résultat ne démontre pas que les routes sont absentes : elles sont présentes dans dist et déjà servies en local lors de la QA responsive.

Le domaine canonique échoue DNS/NXDOMAIN. Pas de canonical response 200 vérifiable. L’URL inexistante est interceptée par l’authentification avant la 404 applicative : véritable statut 404 public à retester après ouverture. Pas de page 404 spécifique trouvée dans le build. Pas de conclusion de soft-404 de production sans réponse finale.

Les huit pages de contenu n’ont pas de meta noindex ; robots Allow: / ; contenu principal dans HTML static. Seule la page intermédiaire / a noindex et meta-refresh vers /fr/ : intentionnel. Duplication notable /links/ vs /fr/links/ ; le canonical est posé mais le sitemap conserve les deux.

## A. CRITICAL BEFORE LAUNCH

1. Décider le lancement public et rendre les pages crawlables (401 privé actuel).
2. Faire fonctionner le domaine canonique, ou aligner toutes les origines sur le domaine réellement publié ; domaine/DNS/TLS puis canonical, hreflang, sitemap, robots, OG, schema.
3. Ne pas annoncer des variantes EN achevées tant qu’elles sont des placeholders ; corriger l’EN de réservation.
4. Revoir les routes d’attente découvrables (Contact lié, Journal dans sitemap et ancien hub EN) et le cluster /links avant exposition publique. Sévérité high pour la cohérence du lancement, medium pour le sitemap lui-même.

## B. IMPORTANT BEFORE LAUNCH

- Réconcilier Contact d’attente et réservation réelle ; description booking plus précise et distincte.
- Hreflang/canonical/sitemap cohérents pour links, sans paire non canonique ni traduction d’attente.
- Partage /links sans OG ; images sociales absolues à rendre accessibles.
- Documenter périmètre professionnel et sources santé, surtout le terme Diagnostiquer et les affirmations Pranic Healing.
- Préparer des renseignements locaux exacts si le recrutement Paris/Val-d’Oise/Goa est prioritaire.
- Retester vrais statuts 200/redirect/404, slash et accessibilité des assets après changement d’accès/domaine.

## C. NICE TO HAVE

- Images sociales propres aux services, ratio mieux adapté au partage.
- Person enrichi avec identité vérifiée/@id ; WebSite et éventuellement BreadcrumbList/ProfessionalService appropriés.
- Fichiers photo plus descriptifs, srcset links, sizes tablette ajustés.
- Apple touch icon ; manifest uniquement si utile.
- Nettoyage mesuré de CSS/polices/assets legacy ; aucune preuve actuelle de problème JS lourd.

## Ordre exact recommandé pour les corrections

1. Choisir domaine public et audience de lancement, puis vérifier DNS/TLS/accès anonyme.
2. Aligner origine canonique et toutes ses utilisations ; vérifier redirection / → /fr/, trailing slash, 404.
3. Décider le périmètre indexable : pages EN, Contact, Journal, links et doublons ; finaliser ou exclure les pages non prêtes.
4. Reconstituer des clusters hreflang réciproques d’URL canoniques prêtes ; corriger le sélecteur EN de réservation.
5. Mettre sitemap et robots en cohérence avec ces décisions et vérifier leurs réponses publiques.
6. Peaufiner metadata réservation et partage /links ; images OG accessibles puis variantes sociales si souhaitées.
7. Valider les formulations santé, documenter qualifications/sources et informations locales réelles.
8. Ajouter uniquement le schéma pertinent et factuel ; mesurer puis optimiser images/CSS/fonts si nécessaire.
9. Audit HTTP public final et Search Console : sitemap, inspection des URL, indexation, Core Web Vitals terrain quand des données existent.

## Confirmation

Aucun code changé. Aucune metadata changée. Aucune copie réécrite. Aucune route renommée. Aucune image remplacée. Aucun déploiement. Aucun changement d’accès, de DNS, canonical, hreflang, sitemap ou robots. Seuls ce rapport et les relevés d’audit sont créés : audit-only.
