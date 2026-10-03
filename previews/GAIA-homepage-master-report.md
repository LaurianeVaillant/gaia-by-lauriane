# GAIA — passe structure, textes et responsive

La homepage française utilise intégralement le nouveau texte approuvé du brief. Aucun paragraphe n’a été paraphrasé ; aucun texte fourni n’a dû être omis ou modifié. Les anciens textes ont été remplacés par ceux du nouveau brief. La version anglaise conserve ses textes actuels, sans traduction improvisée. La structure bilingue reste en place.

## Hiérarchie sémantique finale

- H1 : Lauriane — Praticienne en acupuncture traditionnelle
- H2 : Nothing works in silos.
- H2 : Your body is a network.
- H2 : AUJOURD’HUI, JE VOUS ACCOMPAGNE À TRAVERS CES PRATIQUES
  - H3 : Acupuncture traditionnelle
  - H3 : Aculift
  - H3 : Pranic Healing
- H2 : Vivre sa féminité, pas la subir.
- H2 : I WAS LOOKING FOR A WAY TO CONNECT THE DOTS.
- H2 : Power & Softness
- H2 : The GAIA Project
- H2 : OÙ ME TROUVER
- H2 : RECONNECT.

La phrase visuelle du hero reste plus grande que le H1. Les libellés sont de véritables titres lorsque leur rôle est de présenter une section. Le titre, la description, les aperçus sociaux, le canonical, les hreflang FR/EN/x-default, le sitemap et les données structurées sont présents.

## Typographie

Le mot-symbole Gaia et la signature Italianno restent inchangés. Fraunces porte les titres expressifs ; Instrument Sans porte les textes, liens et libellés.

| Rôle | Desktop | Mobile |
| --- | --- | --- |
| Phrase du hero | 46–60 px | 32–42 px |
| H1 professionnel | 17–18 px | 16 px |
| Titres expressifs | 52–68 px | 36–48 px |
| RECONNECT. | 72–96 px | 40–56 px |
| Titres des pratiques | 28–36 px | 28 px |
| Libellés éditoriaux | 13–15 px | 13 px |
| Paragraphes | 17–18 px, interligne 1,6 | 16 px, interligne 1,6 |
| CTA | 16 px, hauteur minimum 48 px | 16 px, hauteur minimum 48 px |
| Phrase de conclusion | 20–24 px | 20 px |

Les tailles intermédiaires évoluent avec `clamp()`. Les titres peuvent revenir à la ligne pour rester lisibles.

## Grille et espacements

- Largeur maximale du contenu : 1280 px, centrée dans les sections à fond pleine largeur.
- Marges latérales : 64–80 px desktop, 48 px tablette, 20–24 px mobile.
- Paragraphes limités à 60 caractères environ par ligne (`60ch` maximum), ou à leur colonne lorsque celle-ci est plus étroite.
- Échelle d’espacement : 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px.
- Espacement entre paragraphes : 24 px ; titre vers texte : 32 px ; texte vers lien : environ 32 px.
- Padding des sections : 96–120 px desktop, 72–96 px tablette, 56–72 px mobile.
- Conclusion : 128 px desktop, 72 px mobile.
- Deux colonnes : parts égales, écart 64–96 px desktop et 48 px tablette.

## Responsive

À 1100 px, marges, écarts et titres deviennent plus compacts. Le menu compact reste activé à 1050 px. À 900 px, les compositions qui deviendraient trop étroites passent en une colonne ; le hero présente le texte puis la photo. À 700 px, les tailles et espacements mobiles prennent le relais.

Les contrôles FR/EN couvrent 1440, 1280, 1024, 768, 430, 390 et 360 px : largeur de page, textes, images, chargement des polices, menu compact, CTA et hiérarchie. Les quatre captures livrées représentent la version française.

Les photographies, pictogrammes, couleurs et transitions organiques sont conservés. Aucune décoration ni animation supplémentaire. Les images restent responsives et les images sous le hero sont chargées de façon différée.
