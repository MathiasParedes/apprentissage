# Suivi de progression — Mathias

> **REPRISE RAPIDE** : Tu as redémarré ? Lis la section "Session en cours" ci-dessous. Fais les exercices, sauvegarde, reviens sur Mistral Vibe, dis "on continue", montre-moi ton code.

## Règles du jeu
- **C'est toi qui codes.** Je suis ton prof : je t'explique, je te guide, je te corrige.
- Je ne modifie jamais tes fichiers de code (`index.html`, `style.css`, `script.js`, etc.)
- À chaque session, je mets à jour ce fichier pour noter où on s'arrête
- Tu reprends exactement là la prochaine fois

## Comment me retrouver
- Ouvre VS Code → clique sur l'icône **Mistral Vibe** dans la barre latérale (panneau de chat à gauche)
- La conversation reprend là où tu l'as laissée : elle est sauvegardée sur ton disque (`~/.vibe/logs/session/`)
- Dis « on continue » → je sais où on en est grâce à ce fichier
- Filet de sécurité : même dans une conversation toute neuve, « on continue » + ce fichier = on reprend exactement ici

---

## Trame de formation complète

| Module | Langage | Statut | Objectif |
|--------|---------|--------|----------|
| 1 | HTML | ✅ Terminé | Structure de base, titres, paragraphes, listes |
| 2 | CSS | ✅ Terminé | Mise en forme : couleurs, tailles, espacements, sélecteurs, box model, bordures |
| 3 | JavaScript | 🔵 En cours | Interactivité : boutons, événements, DOM |
| 4 | Python | ⬜ À venir | Bases du langage, scripts, automatisation |
| 5 | Rust | ⬜ À venir | Bases du langage, compilation, ownership |

---

## Session 1 — 2026-10-11 ✅

**Module** : HTML — Les bases

**Ce que tu as fait toi-même** :
- [x] Structure HTML5 de base
- [x] `<h1>Bonjour</h1>`
- [x] `<p>Je suis de Marseille</p>`
- [x] `<ul>` avec 5 `<li>` : html, css, javascript, python, rust

**État final de `index.html`** :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page</title>
</head>
<body>
    <h1>Bonjour</h1>
    <p>Je suis de Marseille</p>
    <ul>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
        <li>python</li>
        <li>rust</li>
    </ul>
</body>
</html>
```

---

## Session 2 — 2026-10-11 ✅

**Module** : Préparation CSS

**Ce qu'on a fait ensemble** :
- [x] Création du fichier `style.css` (vide)
- [x] Ajout de `<link rel="stylesheet" href="style.css">` dans le `<head>` du HTML

**État actuel des fichiers** :

`index.html` :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Bonjour</h1>
    <p>Je suis de Marseille</p>
    <ul>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
        <li>python</li>
        <li>rust</li>
    </ul>
</body>
</html>
```

`style.css` : vide (à remplir par toi)

---

## Session 3 — 2026-10-11 ✅ Terminé le 2026-10-12

> **CE QUE TU DOIS FAIRE MAINTENANT** :
> Ouvre `style.css` → écris 4 blocs CSS → sauvegarde → teste dans le navigateur → montre-moi ton code
>
> 1. `body { background-color: ...; }`
> 2. `h1 { color: ...; }`
> 3. `li { padding: ...px; }`
> 4. `p { font-size: ...px; }`
>
> **Astuce** : utilise les snippets VS Code (tape `c-bg-blue` + Tab, etc.)
> Palette couleurs : `progression/couleurs.md`

**Module** : CSS — Les bases

**Configuration installée (prof)** :
- [x] Prettier installé (extension VS Code) — formatage auto à la sauvegarde
- [x] Snippets CSS créés (`.vscode/css.code-snippets`) — 20+ snippets
- [x] Palette protan documentée (`progression/couleurs.md`)
- [x] `settings.json` global + workspace configurés pour Prettier

**Snippets disponibles** :
- Structure : `css-block`, `css-class`, `css-id`
- Propriétés : `c-font-size`, `c-font-family`, `c-margin`, `c-padding`, `c-radius`, `c-max-width`
- **Deutan — Couleurs texte** : `d-txt-blue`, `d-txt-blue-dark`, `d-txt-orange`, `d-txt-orange-dark`, `d-txt-purple`, `d-txt-black`, `d-txt-gray-dark`
- **Deutan — Fonds** : `d-bg-white`, `d-bg-gray-light`, `d-bg-navy`
- **Deutan — Paires contraste** : `d-pair-bw` (blanc/noir), `d-pair-wb` (blanc/bleu), `d-pair-wo` (blanc/orange), `d-pair-nw` (navy/blanc), `d-pair-gg` (gris/gris foncé), `d-pair-bw2` (bleu/blanc)

**Note daltonisme — Diagnostic** :
- Type identifié : **Deutéranomalie** (affaiblissement du vert)
- Symptômes : voit bien les couleurs vives, confond les nuances proches (vert/jaune, bleu clair/blanc)
- Règle d'or : contraste fort en luminosité + couleurs bien espacées sur la roue chromatique
- À éviter : vert, jaune, beige, pastel, couleurs fades
- Palette adaptée : `progression/couleurs.md` (couleurs deutan-safe)
- Snippets adaptés : préfixes `d-*` (ex: `d-txt-blue`, `d-pair-nw`)

**Problème rencontré et corrigé** :
- L'autocomplétion VS Code était encore active pour le CSS
- Correction : ajout des settings `css.completion.triggerPropertyValueCompletion: false` et `css.validate: false` dans `settings.json`
- Fichier `settings.json` réparé (était cassé : deux blocs JSON au lieu d'un seul)

**Erreur à corriger** :
- `.body` = sélecteur de **classe** (faux)
- `body` = sélecteur de **balise** (correct)

**Ce que tu dois faire TOI-MÊME dans `style.css`** :

### Exercice 1 — Couleur de fond
Cible `body` (sans point) et change `background-color`.
Snippet : tape `css-block`, Tab, puis `c-bg-blue` ou autre couleur.

### Exercice 2 — Couleur du titre
Cible `h1` et change `color`.
Snippet : `css-block`, Tab, `c-txt-blue` ou `c-txt-orange`.

### Exercice 3 — Espacement des éléments de liste
Cible `li` et ajoute `padding`.
Snippet : `css-block`, Tab, `c-padding`.

### Exercice 4 — Taille du texte
Cible `p` et change `font-size`.
Snippet : `css-block`, Tab, `c-font-size`.

### Rappel syntaxe CSS :
```
balise    { propriete: valeur; }
.classe   { propriete: valeur; }
#id       { propriete: valeur; }
```

**Quand tu as terminé** :
1. Sauvegarde `style.css` (Prettier formate automatiquement)
2. Ouvre `index.html` dans ton navigateur (Live Server : clic droit → "Open with Live Server")
3. Copie-colle ton code ici → je te corrige

**Où on s'arrête** : Session 6 en cours (2026-10-12) — JavaScript débutant. `script.js` reçu : exercices 2-3 validés, exercice 4 avec 3 fautes de casse à corriger (`getElementbyId`, `getElementbyID`, `addEventlistener`), exercice 1 (`console.log`) manquant. Mathias corrige, teste, montre son code.

---

**Mise à jour 2026-10-12 — GitHub** :
- Le dossier `apprentissage/` est maintenant un dépôt git relié à GitHub : https://github.com/MathiasParedes/apprentissage
- À chaque session, on publie ta progression : `git add -A`, puis `git commit -m "message"`, puis `git push`
- Ce fichier, `PLAN.md` et tous tes exercices y sont maintenant sauvegardés

**Mise à jour 2026-10-12 — Environnement en français** :
- VS Code : pack de langue française installé, interface en français au prochain redémarrage
- git : installé via Homebrew (2.56.0), les messages s'affichent en français dans le terminal
- GitHub Desktop et macOS : déjà en français (système réglé en fr-FR)
- Restent en anglais : le site github.com et les messages d'erreur de Python/Rust (aucune traduction disponible)

**Mise à jour 2026-10-12 — Autopilotage VS Code désactivé** :
- Cause : Emmet (outil intégré à VS Code) écrivait les blocs CSS tout seul quand on appuyait sur Tab
- Désactivé : Emmet (Tab + fichiers CSS) et les suggestions fantômes (texte gris pendant la frappe)
- Consigne : Mathias tape tout le CSS à la main — les snippets ne se déclenchent plus automatiquement
- Prettier reste actif : il reformate seulement, il n'écrit pas de code
- `progression/couleurs.md` reste la référence pour choisir les couleurs

**Mise à jour 2026-10-12 — Bips sonores désactivés** :
- Cause : signaux sonores d'accessibilité de VS Code (bip quand la ligne où on tape a une erreur — fréquent en écrivant du HTML, balises pas encore fermées)
- Désactivé : 21 signaux sonores liés à l'édition (erreurs, avertissements, sauvegarde, reformatage, diff, etc.)
- Conservé : la cloche du terminal uniquement

**Mise à jour 2026-10-12 — Exercices CSS 1 à 4 validés** :
- Mathias a écrit les 4 règles lui-même dans `style.css` : `body` fond `#f0f0f0`, `h1` texte `#0033cc`, `li` `padding: 10px`, `p` `font-size: 20px`
- Syntaxe correcte, valeurs conformes à la palette deutan (`couleurs.md`) — validé par le prof
- Prochaine session : CSS avancé (classes, id, box model)

**Mise à jour 2026-10-12 — Session 4 lancée (CSS avancé)** :
- Thème : sélecteurs par classe (`.ma-classe`) et par id (`#mon-id`)
- À faire par Mathias : ajouter `class`/`id` dans `index.html`, écrire les règles correspondantes dans `style.css`
- Box model, bordures, border-radius : session suivante

**Mise à jour 2026-10-12 — Session 4 terminée et validée (classes et id)** :
- Mathias a ajouté `class="intro"`, `id="liste-langages"` et `class="favori"` dans `index.html`, et écrit les 3 règles correspondantes dans `style.css`
- Bug attrapé puis corrigé par Mathias : l'id ne correspondait pas entre HTML et CSS — règle apprise : un sélecteur `#id` doit correspondre exactement à l'attribut `id`
- Le commentaire d'aide en haut de `style.css` a été supprimé par Mathias : le fichier ne contient plus que son code
- Prochaine session : CSS avancé suite (box model, bordures, border-radius), puis JavaScript

**Mise à jour 2026-10-12 — Commentaire d'aide restauré** :
- Mathias a demandé la restauration du commentaire pense-bête en haut de `style.css` (palette + snippets) — récupéré dans l'historique git
- Ce n'est pas une mauvaise pratique : les commentaires CSS sont ignorés par le navigateur, garder des notes dans son fichier est utile en apprentissage

**Mise à jour 2026-10-12 — Fin de session (pause)** :
- Sessions 3 et 4 validées : 7 règles CSS écrites par Mathias (sélecteurs balise, classe, id)
- Tout est publié sur GitHub
- Demain : « on continue » → session 5 : box model, bordures, border-radius, puis JavaScript

**Mise à jour 2026-10-12 — Session 5 lancée (box model, bordures, border-radius)** :
- Thème : modèle de boîte (contenu, padding, bordure, marge), `border`, `border-radius`, `max-width`, `box-sizing: border-box`
- Config prof : 4 nouveaux snippets — `c-border` (bordure bleue), `c-border-orange` (bordure orange), `c-border-bottom` (ligne sous un élément), `c-box-sizing`
- À faire par Mathias dans `style.css` (enrichir ses blocs existants, pas en créer de nouveaux) :
  1. `#liste-langages` : `padding: 20px`, `max-width: 400px`, `border-radius: 12px`, `box-sizing: border-box` — la liste devient une carte
  2. `li` : `border: 2px solid #0033cc`, `border-radius: 8px`, `margin-bottom: 10px` — des pilules
  3. `h1` : `border-bottom: 3px solid #0033cc`, `padding-bottom: 10px`, `max-width: 400px` — bandeau sous le titre
  4. `.favori` : `border: 2px solid #ff6600`, `background-color: #ffffff` — le favori encadré
- Couleurs conformes à la palette deutan (`progression/couleurs.md`)
- Suite : Mathias écrit le code, sauvegarde, teste dans le navigateur, montre son CSS au prof pour validation. Prochaine session : JavaScript

**Mise à jour 2026-10-12 — Session 5 terminée et validée (box model, bordures, border-radius)** :
- Mathias a enrichi ses 4 blocs existants dans `style.css` : carte `#liste-langages` (padding 20px, max-width 400px, radius 12px, box-sizing border-box), pilules `li` (bordure bleue, radius 8px, margin-bottom 10px), bandeau `h1` (border-bottom, padding-bottom, max-width 400px), favori `.favori` (bordure orange, fond blanc)
- 4/4 exercices validés par le prof : syntaxe correcte, valeurs conformes à la palette deutan, blocs existants enrichis sans doublon
- Question de Mathias sur les nouveaux snippets (`c-border`, `c-border-orange`, `c-border-bottom`, `c-box-sizing`) : concept réexpliqué (raccourci VS Code : préfixe + Tab, rien d'automatique)
- Module 2 (CSS) terminé. Prochaine session : JavaScript (module 3) — variables, DOM, événements, premier bouton interactif

**Mise à jour 2026-10-12 — Session 6 lancée (JavaScript débutant)** :
- Thème : JavaScript dans le navigateur — variables (`let`/`const`), `console.log`, DOM (`querySelector`, `getElementById`), `textContent`, `style`, événements (`click`)
- Mathias a confirmé avoir vu le rendu CSS dans le navigateur (carte, pilules, favori encadré) — satisfait
- Config prof : 9 nouveaux snippets JS créés (`.vscode/javascript.code-snippets`, JSON validé) — `js-const`, `js-let`, `js-log`, `js-fonction`, `js-getid`, `js-query`, `js-click`, `js-texte`, `js-couleur`
- À faire par Mathias (le prof ne touche ni à `script.js` ni à `index.html`) :
  1. Créer `script.js` (vide) et ajouter `<script src="script.js"></script>` avant `</body>` dans `index.html`
  2. Exercice 1 : `console.log(...)` + vérifier le message dans la console (F12, onglet Console)
  3. Exercice 2 : changer le texte du `h1` (« Salut ! ») via `querySelector` + `textContent`
  4. Exercice 3 : passer `.intro` en orange `#ff6600` via `style.color`
  5. Exercice 4 : compteur cliquable — ajouter `<button id="bouton-compteur">` + `<p id="compteur">` dans le HTML, `addEventListener('click', ...)` dans le JS, `let compte = 0`
- Suite : Mathias montre `script.js` et les lignes HTML ajoutées → validation. Puis sessions 7-8 : Python

**Mise à jour 2026-10-12 — Session 6 en cours (JavaScript) — retours de Mathias** :
- Bug corrigé par Mathias : balise `<script>` déplacée du `<head>` vers avant `</body>` dans `index.html` (le script tournait avant l'existence du DOM)
- Bouton et compteur ajoutés dans `index.html` : `<button id="bouton-compteur">` + `<p id="compteur">0</p>` — ids conformes au JS
- Clavier Logitech Craft : pas de touche Option ; F12 a une double fonction (son) — utiliser Fn+F12, ou clic droit → « Inspecter » → Console ; Cmd+Opt+I devient Cmd+Alt+I
- Config prof : Prettier réglé sur simple quote (`"prettier.singleQuote": true` dans `.vscode/settings.json`, JSON validé) — préférence Mathias ; par défaut Prettier met des double quotes en JS
- `script.js` reçu (12 lignes) : exercices 2 (h1 → « Salut ! ») et 3 (.intro → `#ff6600`) corrects ; exercice 4 : 3 fautes de casse — `getElementbyId`, `getElementbyID`, `addEventlistener` (correct : `getElementById`, `getElementById`, `addEventListener`) ; exercice 1 (`console.log`) manquant
- Règle enseignée : JavaScript est sensible à la casse (camelCase) — l'erreur console « ... is not a function » indique la ligne en cause ; les snippets `js-getid` / `js-click` écrivent les noms correctement
- Suite : Mathias corrige les 3 lignes, ajoute `console.log`, resauvegarde (Prettier repasse en simple quote), teste, montre son code → validation

## Prochaines sessions (à venir)

### Session 4 — CSS avancé (terminée le 2026-10-12)
- Sélecteurs par classe (`.ma-classe`)
- Sélecteurs par id (`#mon-id`)

### Session 5 — CSS avancé, suite (terminée le 2026-10-12)
- Modèle de boîte (box model)
- Bordures, border-radius
- Largeur, marges, box-sizing

### Session 6 — JavaScript débutant (en cours)
- Variables, types, fonctions
- Manipulation du DOM
- Événements (click, input)
- Premier projet : bouton interactif

### Session 7-8 — Python
- Installation, syntaxe de base
- Variables, conditions, boucles
- Fonctions, listes, dictionnaires
- Premier script

### Session 9-10 — Rust
- Installation (rustup, cargo)
- Syntaxe de base, ownership
- Variables, fonctions, conditions
- Premier programme compilé

---
