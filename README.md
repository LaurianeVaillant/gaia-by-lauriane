# GAIA by Lauriane

Première passe locale : homepage bilingue complète, pages internes préparées, sans publication. Astro + TypeScript, HTML statique et CSS ; aucun framework JavaScript côté client.

## Démarrer

Avec Node.js 22 et pnpm installés :

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Le serveur affiche son URL locale. `/` redirige vers `/fr/`.

## Modifier le site avec Codex

- `src/data/home.ts` : tous les textes FR/EN de la homepage.
- `src/components/Home.astro` : sections et composition de la homepage.
- `src/data/site.ts` : marque, domaine, contact, liens, navigation, traductions des routes et descriptions SEO.
- `src/styles/global.css` : tokens de marque, typographie et mise en page responsive.
- `src/layouts/Base.astro` : structure commune, navigation, langues, pied de page et métadonnées.
- `src/components/Photo.astro` : images responsive réutilisables.
- `src/pages/[lang]/[slug].astro` : bases des pages internes. À développer après validation de la homepage.
- `public/images/` : photos WebP optimisées issues des photos fournies. Garder les originaux hors du site.

### Remplacer une photo

Exporter les versions 640 et 1200 px (et 1800 pour le hero) en WebP sous les mêmes noms, ou modifier `name` dans Home.astro. Mettre à jour le texte alternatif FR/EN et le cadrage CSS si nécessaire. Aucun portrait généré n’est utilisé.

### CTA et coordonnées

Renseigner `bookingUrl`, `email`, `instagramUrl`, `whatsappUrl` dans `src/data/site.ts`, puis connecter les boutons dans Base.astro et la page contact. Pour l’instant les CTA mènent à la page contact, qui annonce clairement que les informations sont à venir. Aucun compte ou lien fictif.

### Ajouter un lieu / service

Les lieux de la homepage sont dans Home.astro et les textes dans src/data/home.ts ; ajouter uniquement des dates/adresses confirmées, puis centraliser ces données dans site.ts quand disponibles. Le futur lieu d’Auvers-sur-Oise est explicitement présenté comme en développement.
Pour un service, ajouter ses routes et labels FR/EN dans site.ts, puis sa présentation dans les composants. L’architecture n’impose aucun nombre fixe de services.

### Journal

Collection prête dans `src/content.config.ts`. Créer deux fichiers Markdown dans `src/content/journal/fr/` et `en/`, avec le même `translationKey`. Champs requis : lang, translationKey, title, description, date, category, heroImage, heroAlt ; optionnels : seoTitle, relatedServices, draft. Aucune fausse publication ajoutée. La prochaine étape doit ajouter le template article, le routage des articles, leur liste et Article/BreadcrumbList, puis inclure les articles dans le sitemap.

## SEO et publication

Chaque route possède title, description, canonical, hreflang FR/EN/x-default, Open Graph et Twitter. Sitemap à `/sitemap.xml`, robots à `/robots.txt`. Person JSON-LD uniquement ; pas d’adresse ni de zone de service inventée. Polices servies localement, photos responsive, chargement différé hors hero.
Le domaine cible est configuré dans astro.config.mjs et site.ts. Le domaine n’est pas connecté. Pour publier, générer `dist/` avec `pnpm build` et le déployer chez l’hébergeur choisi. Confirmer le domaine, les coordonnées, les textes et mentions légales avant ouverture. Ajouter le domaine dans Google Search Console et envoyer le sitemap après connexion.

## Limites de cette passe

Les pages internes sont des bases transparentes, pas des pages finalisées. Pas de réservation réelle, de formulaire, de faux témoignage ou de données locales inventées. Performance Lighthouse à mesurer sur la version finale hébergée ; aucun score prétendu.

## Page Acupuncture FR

Textes : `src/data/acupuncture-fr.ts`. Mise en page : `src/components/Acupuncture.astro`. Photo fournie : `public/images/acupuncture-*.webp` (remplaçable comme les autres photos). Graphique partagé : `src/components/NetworkGraphic.astro`. La version anglaise reste une base en attente de validation et de traduction.

## Page Santé féminine FR — V1

Textes : `src/data/womens-health-fr.ts`. Composition : `src/components/WomensHealth.astro`. Photo réelle existante : `softness-*.webp`. La spécialisation est explicitement en développement. La version anglaise reste en attente de validation.

Les sujets possèdent des clés stables et des ancres `sujet-cycle-menstruel`, `sujet-endometriose`, `sujet-sopk`, `sujet-fertilite`, etc. Ils ne sont pas des liens vers de fausses pages. Lorsque de vrais contenus éducatifs seront validés, ajouter une destination optionnelle dans ces données pour les relier aux pages ou au Journal. Aucun article ni contenu médical détaillé n’est créé en V1.

## À propos FR — V1

Textes : `src/data/about-fr.ts`. Composition : `src/components/About.astro`. Quatre photos : `about-portrait`, `about-india`, `about-yoga`, `about-practice`, optimisées en WebP. Les formations reprennent uniquement les informations fournies par Lauriane ; aucun diplôme, certification ou date ajoutés. Anglais en attente de validation.
