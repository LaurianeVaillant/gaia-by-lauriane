# GAIA — audit final de la homepage

La structure, les paragraphes, les titres, les images, la palette et le rythme vertical approuvés sont conservés. Les textes visibles ont été comparés avant/après pour les versions FR et EN : aucune modification. La seule modification rédactionnelle concerne la meta description française, explicitement fournie dans ce dernier brief.

## Corrections techniques effectuées

- Instrument Sans et Italianno utilisent des fichiers WOFF2 locaux : 418 044 → 55 196 octets pour ces deux polices, soit 86,8 % de réduction. Familles et poids visuels conservés ; licences OFL conservées.
- Préchargement des fichiers Fraunces et Instrument Sans utilisés au premier affichage. `font-display: swap` conserve du texte visible pendant le chargement.
- La homepage ne télécharge effectivement que Fraunces, Instrument Sans et Italianno. Les anciennes familles des pages internes ne sont pas téléchargées par la homepage. Aucune requête doublonnée pour une police dans le contrôle réseau.
- Les attributs `sizes` des photographies suivent désormais les seuils réels de mise en page, en particulier le hero qui devient pleine largeur à 900 px et les photographies sous le hero qui se superposent sur tablette.
- Images WebP, `srcset`, dimensions intrinsèques et textes alternatifs conservés. Hero `eager`/priorité haute ; images inférieures `lazy`. Les fichiers photographiques n’ont pas été remplacés ni retouchés.
- Liens desktop et footer : cible verticale minimale de 44 px. CTA primaires : 48 px, style commun et focus visible.
- Navigation mobile nommée pour les technologies d’assistance ; relation entre le résumé du menu et la navigation explicitée. Menu natif `details` conservé, sans JavaScript supplémentaire.
- Nom accessible du lien d’accueil adapté à la langue. Indication FR/EN conservée sans réclamer un poids de police supplémentaire.
- Meta description française mise à jour et réutilisée pour les aperçus Open Graph et Twitter.

## Typographie et lisibilité

Les six grands titres partagent exactement Fraunces, poids 700 et réglages identiques. Féminité garde le violet et son soulignement orange. The/Project restent violets et GAIA orange ; le point de RECONNECT est orange.

Instrument Sans porte les paragraphes, labels et boutons. Italianno reste réservé à la signature ; le mot-symbole Gaia conserve son traitement. Paragraphes : 18 px à 1440, 17 px sur laptop/tablette, 16 px sur mobile, interligne 1,6. Les colonnes restent limitées à 60ch et utilisent le même axe de contenu. Le gras reste limité à 1 passage pour le manifeste et 2 passages pour chacune des sections santé féminine et parcours.

## Hiérarchie validée

- H1 unique : Lauriane — Praticienne en acupuncture traditionnelle
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

Les paragraphes et les liens restent dans le HTML statique. Aucun contenu important n’attend une interaction JavaScript. Les éléments graphiques décoratifs sont ignorés par les lecteurs d’écran ; le réseau garde une description accessible.

## Métadonnées françaises

**Title unique** : GAIA by Lauriane | Acupuncture traditionnelle, Aculift & Pranic Healing

**Description unique** : Découvrez GAIA by Lauriane : acupuncture traditionnelle, Aculift et Pranic Healing, dans une approche qui relie le corps, l’énergie et nos différents fonctionnements.

**Lang** : fr. Version anglaise : en, avec ses métadonnées distinctes.

**Canonical français** : https://gaiabylauriane.com/fr/

**Hreflang** : fr, en, x-default ; alternates réciproques. Sitemap : 18 routes réelles FR/EN, avec ces trois alternates par entrée. `robots.txt` autorise l’exploration ; aucune balise HTML `noindex` accidentelle.

**Données structurées** : Person, nom Lauriane, titre professionnel existant et lien À propos. Aucune adresse, aucun LocalBusiness ni lieu permanent inventé.

## Navigation, liens et clavier

Les liens de chaque pratique mènent à la bonne page, ainsi que les liens approche, santé féminine et parcours. Les CTA rendez-vous/disponibilités mènent à Contact. Les destinations locales répondent sans erreur ; aucun lien vide ou `href="#"`.

Le premier lien au clavier est « Aller au contenu ». Le menu mobile s’ouvre avec Entrée ; Tab conduit à son premier lien. Le focus visible est contrôlé. Les liens de navigation sont de véritables ancres.

Les trois pratiques gardent des dimensions de pictogrammes identiques, une grille équilibrée et des CTA alignés sur desktop. Les ordres mobiles sont conservés : texte puis diagramme ; santé féminine texte puis image ; parcours texte puis image ; Power texte/concepts puis symbole ; projet titre puis contenu ; conclusion titre, bouton, phrase.

## Responsive et vérification visuelle

Contrôles à 1440, 1280, 1024, 768, 430, 390 et 360 px. Captures complètes conservées pour chaque largeur ; captures individuelles des dix sections desktop également produites et inspectées. Les compositions mobile ont été inspectées par portions pour garder les textes lisibles pendant la vérification.

Aucun défilement horizontal, titre tronqué, collision dans le header ou CTA hors écran détecté. Les dimensions, masques et cadrages des images sont conservés. Les frontières courbes restent les frontières de section : aucun séparateur droit ajouté.

Les labels du réseau mesurent environ 16,6 à 20,8 px à l’écran selon la largeur. Corps/Esprit/Émotions restent visibles et séparés du dessin. Les six titres ont le même système de police/poids à chaque largeur.

## Mesures locales de performance

Chrome, cache désactivé, débit descendant 200 000 octets/s, latence 150 ms, CPU ralenti ×4, viewport haut de 1000 px. Une mesure par format ; données locales de laboratoire, pas mesures des visiteurs ni scores Lighthouse.

| Format | LCP observé | CLS observé | Polices téléchargées |
| --- | --- | --- | --- |
| Desktop 1440 | 2,044 s | 0,00051 | 3 fichiers, 91 816 octets |
| Mobile 390 | 1,828 s | 0,00043 | 3 fichiers, 91 816 octets |

Le hero choisit le WebP 1200 px sur desktop et 640 px sur mobile à densité d’écran 1. Aucun fichier JavaScript externe chargé ; seul le petit script existant de sélection du masque est conservé. Les images inférieures ne sont pas téléchargées immédiatement avant le défilement. L’INP et les Core Web Vitals des visiteurs ne sont pas certifiés par ces contrôles locaux.

## Points restant à régler avant ouverture publique

1. **Contraste orange sur jaune** : #FF5A1F sur #FFF6CC = environ 2,87:1 ; sur le jaune final = environ 2,80:1. Ces contrastes restent insuffisants pour du texte ordinaire, même grand. Ils concernent notamment « reconnecter » et GAIA dans le titre du projet. Palette conservée conformément au brief ; aucune conformité AA globale n’est revendiquée. Le texte noir et le violet sur les fonds clairs passent les contrôles de contraste calculés. Les logos et décorations ont un statut différent du texte ordinaire. Référence : [WCAG 2.2 — contraste minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
2. **Réservation** : les liens sont corrects, mais Contact affiche encore « Informations à venir ». Aucun numéro WhatsApp, email ou calendrier de réservation n’a été fourni/confirmé. Un visiteur ne peut pas encore réserver réellement.
3. **Publication et domaine** : la preview reste privée, conformément à son accès existant. Le HTML autorise l’indexation, mais l’indexation publique nécessite l’ouverture du site et la mise en service du domaine canonique gaiabylauriane.com. Canonicals, sitemap, images sociales et données structurées doivent rester cohérents avec le domaine final ; aucun basculement de domaine ou d’accès n’a été effectué dans cette passe.
4. **Anglais interne** : la homepage anglaise existe, avec son URL, sa langue et ses métadonnées propres. Certaines pages internes anglaises sont encore des premières ébauches ; elles doivent être finalisées avant de présenter tout le site comme entièrement traduit. Aucune traduction approuvée n’a été réécrite ici.

Cet audit porte sur les contrôles décrits, et ne constitue pas une certification exhaustive de conformité WCAG. Les points restants sont explicitement signalés plutôt que corrigés en modifiant les décisions de marque ou en inventant des coordonnées.
