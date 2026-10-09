# GAIA — Audit responsive, 9 octobre 2026

Audit en lecture seule de la version construite locale correspondant à la dernière source publiée. Chrome, largeurs CSS ; hauteurs 900 px sur desktop, 1024 px sur tablette, 844 px sur mobile. 56 rendus testés. Ce contrôle ne remplace pas un essai matériel Safari/iPhone/Android.

Aucun débordement horizontal de page, aucune image manquante ou étirée détectée, aucune navigation bloquante. Menus click/keyboard, Enter/Space et Escape vérifiés. Les menus mobiles ouverts restent dans le viewport et les liens sont accessibles. Aucun problème significatif d’obstruction de texte par les SVG.

## Problèmes partagés

G1 — Footer partagé des pages internes : Contact et Liens ont une zone de lien haute de 19 px environ, sous l’objectif de 44 px demandé. Low desktop, medium tactile. Le footer de l’accueil a déjà des liens de 44 px. Le texte légal en 13,6 px reste lisible ; il n’est pas traité comme une anomalie à lui seul.

G2 — Header partagé des pages internes : Santé féminine et À propos mesurent environ 24–26 px de haut en navigation desktop, contrairement à Pratiques et au CTA. Low ; ne bloque pas la souris mais incohérent avec l’objectif de cibles de 44 px. Menu mobile : cibles >=44 px.

G3 — Contraste des mots orange porteurs de sens : #FF6230 sur crème #FFF4C7 ≈2,70:1 ; sur violet #5E1AF4 ≈2,40:1 ; sur warm white #FFFDF7 ≈2,93:1. Concerne notamment « reconnecter », « GAIA », « Comprendre ses rythmes » et « D’abord : sa puissance. ». Medium, toutes largeurs ; ces ratios restent sous 3:1 pour du grand texte, 4,5:1 pour du texte normal. Les courbes, points et flèches purement décoratifs ne sont pas classés comme texte illisible.

Les retours naturels entre « Acupuncture » et « traditionnelle » ou entre « Pranic » et « Healing » ne sont pas des défauts en eux-mêmes. Les ponctuations seules et mots courts orphelins sont signalés séparément.

## Accueil

### 1440
- G3 : mots orange sur crème (reconnecter, GAIA). — medium

### 1280
- G3 : mots orange sur crème (reconnecter, GAIA). — medium

### 1024
- G3 : mots orange sur crème (reconnecter, GAIA). — medium

### 768
- G3 : mots orange sur crème (reconnecter, GAIA). — medium

### 430
- G3 : mots orange sur crème (reconnecter, GAIA). — medium

### 390
- G3 : mots orange sur crème (reconnecter, GAIA). — medium

### 360
- G3 : mots orange sur crème (reconnecter, GAIA). — medium

## Acupuncture traditionnelle

### 1440
- G1 + G2 — low

### 1280
- G1 + G2 — low

### 1024
- G1 — low

### 768
- G1 — medium

### 430
- G1 — medium

### 390
- G1 — medium

### 360
- G1 ; « ? » seul dans deux titres. — medium

## Aculift

### 1440
- G1 + G2 — low

### 1280
- G1 + G2 — low

### 1024
- G1 — low

### 768
- G1 ; photo Hero très haute après empilement. — medium

### 430
- G1 — medium

### 390
- G1 ; CTA final coupé après « rendez- ». — medium

### 360
- G1 ; « ? » isolé dans le titre de séance. — medium

## Pranic Healing

### 1440
- G1 + G2 ; accent ponctuation isolé sous le titre d’origine. — low

### 1280
- G1 + G2 ; même accent isolé. — low

### 1024
- G1 ; accent isolé. — low

### 768
- G1 ; quelques derniers mots isolés dans les titres. — medium

### 430
- G1 ; accent isolé sous le titre d’origine. — medium

### 390
- G1 ; CTA final coupé après « rendez- ». — medium

### 360
- G1 ; titre modalités sur quatre lignes, mots finaux isolés. — medium

## Santé féminine

### 1440
- G1 + G2 + G3 — medium

### 1280
- G1 + G2 + G3 — medium

### 1024
- G1 + G3 — medium

### 768
- G1 + G3 ; Hero encore en deux colonnes : H1 sur deux lignes, cadrage visage très serré ; « cycle » seul. — medium

### 430
- G1 + G3 — medium

### 390
- G1 + G3 — medium

### 360
- G1 + G3 ; « cycle » seul dans le titre. — medium

## À propos

### 1440
- G1 + G2 + G3 — medium

### 1280
- G1 + G2 + G3 — medium

### 1024
- G1 + G3 — medium

### 768
- G1 + G3 ; texte Rencontres étroit, « rencontres… » isolé dans le titre. — medium

### 430
- G1 + G3 ; légendes en 13 px, longueur importante de la page. — medium

### 390
- G1 + G3 ; mêmes observations. — medium

### 360
- G1 + G3 ; mêmes observations, titre Rencontres sur trois lignes. — medium

## Prendre rendez-vous

### 1440
- G1 + G2 — low

### 1280
- G1 + G2 — low

### 1024
- G1 — low

### 768
- G1 — medium

### 430
- G1 — medium

### 390
- G1 — medium

### 360
- G1 — medium

## /links

### 1440
- No significant responsive issue.

### 1280
- No significant responsive issue.

### 1024
- No significant responsive issue.

### 768
- No significant responsive issue.

### 430
- No significant responsive issue.

### 390
- No significant responsive issue.

### 360
- No significant responsive issue.

## Priorités

A. CRITICAL ISSUES : aucun problème bloquant de contenu ou d’utilisation constaté dans les environnements testés.

B. IMPORTANT ISSUES : cibles tactiles du footer commun ; contraste des textes orange ; Hero Santé féminine à 768 ; longueur de l’image Aculift à 768 ; largeur des colonnes narratives À propos à 768.

C. MICRO-POLISH : points d’interrogation isolés à 360 ; accent ponctuation isolé dans le bloc origine Pranic Healing ; ruptures de « rendez-vous » dans certaines clôtures mobiles ; cibles du header desktop ; légendes À propos petites. La signature 11 px de /links est volontairement secondaire et n’affecte pas les trois actions.

Ordre recommandé : (1) composants partagés et contrastes ; (2) Hero/grilles à 768 ; (3) titres et ponctuation à 360 ; (4) rythme de lecture et légendes ; (5) retest 56 formats et appareils réels. /links et réservation ne nécessitent pas de refonte responsive.

## Captures

Chaque page dispose de JPEG complets à 1440 et 390 px. Captures supplémentaires pour les cas identifiés : Santé féminine et À propos à 768 ; Acupuncture, Aculift et Pranic Healing à 360. Les planches de contact ne sont que des outils d’inspection, pas des captures de pages modifiées.

## Confirmation

Aucun code modifié. Aucun texte changé. Aucune image du site remplacée. Aucune structure de page altérée. Aucun déploiement effectué. Seuls des fichiers de rapport/capture ont été créés ; audit uniquement.
