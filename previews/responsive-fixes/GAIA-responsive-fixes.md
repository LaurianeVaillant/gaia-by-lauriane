# GAIA — Corrections responsive du 9 octobre 2026

## Corrections partagées
- Header desktop : liens directs avec zone interactive de 44 px, texte et hauteur du header conservés.
- Footer interne : Contact et Liens avec zone interactive de 44 px, sans agrandir la typographie ni les marges du footer.
- Groupes de mots protégés dans les seuls titres signalés : ponctuation liée au mot précédent, rendez-vous insécable ; aucune modification du wording.

## Corrections par page
- Accueil : reconnecter et GAIA du titre de projet en orange textuel #B63A12.
- Santé féminine : Hero empilé texte puis photo à <=800 px ; cadrage tablette plus ouvert. « Comprendre ses rythmes » violet ; « à son cycle » reste ensemble.
- Aculift : image tablette 3/2 plafonnée à 420 px ; portrait mobile conservé. Ponctuation de séance et rendez-vous protégés.
- À propos : Rencontres empilée à <=800 px, texte avant archive, collage conservé. Retrait du saut forcé à ces largeurs et équilibrage du titre ; légendes mobiles 14 px. GAIA et « D’abord : sa puissance. » en pêche clair sur violet.
- Acupuncture : ponctuation protégée dans les deux titres de consultation/séance.
- Pranic Healing : titres équilibrés, groupes Pranic Healing et de l’acupuncture protégés ; point existant de la section origine intégré au titre ; rendez-vous protégé.
- Réservation : seules les corrections partagées du header/footer.
- /links : aucun changement, HTML construit strictement identique avant/après.

## Contraste avant / après
| Texte | Avant | Après |
|---|---|---|
| reconnecter / GAIA sur crème | #FF6230, 2,70:1 | #B63A12, 5,28:1 |
| Comprendre ses rythmes sur blanc chaud | #FF6230, 2,93:1 | #5E1AF4, 7,05:1 |
| GAIA / D’abord : sa puissance. sur violet | #FF6230, 2,40:1 | #FFC6A4, 4,73:1 |

L’orange graphique #FF6230 est conservé pour les illustrations, courbes, points, flèches et la signature de marque.

## Conservation
Les textes rendus comparés avant/après sont identiques après normalisation des espaces. Les assets images sont identiques octet par octet. Aucun contenu, ordre de section, réservation WhatsApp ou architecture de navigation changé. Aucun redesign.

## Vérification
Chrome local, version finale construite. Largeurs 1440 / 1280 / 1024 / 768 / 430 / 390 / 360 px sur les huit pages françaises. Détails mesurés dans audit.json. Cette validation ne remplace pas les tests sur de vrais appareils Safari/iOS/Android.

## Audit de régression final

| Page | 1440 | 1280 | 1024 | 768 | 430 | 390 | 360 |
|---|---|---|---|---|---|---|---|
| home | OK | OK | OK | OK | OK | OK | OK |
| acupuncture | OK | OK | OK | OK | OK | OK | OK |
| aculift | OK | OK | OK | OK | OK | OK | OK |
| pranic | OK | OK | OK | OK | OK | OK | OK |
| women | OK | OK | OK | OK | OK | OK | OK |
| about | OK | OK | OK | OK | OK | OK | OK |
| booking | OK | OK | OK | OK | OK | OK | OK |
| links | OK | OK | OK | OK | OK | OK | OK |

OK : pas de débordement horizontal, images chargées, titres dans leurs conteneurs. Menus desktop et mobile contrôlés, dropdown dans le viewport, fermeture Échap sur desktop validée. Cibles footer/header corrigées à 44 px. Les liens FR/EN et réservation conservent leurs destinations ; données et lien WhatsApp inchangés. Les huit pages ont été retestées aux sept largeurs.
