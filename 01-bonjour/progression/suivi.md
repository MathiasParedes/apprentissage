# Suivi de progression — Mathias

> **REPRISE RAPIDE** : Tu as redémarré ? Lis la section "Session en cours" ci-dessous. Fais les exercices, sauvegarde, reviens sur Mistral Vibe, dis "on continue", montre-moi ton code.

## Règles du jeu
- **C'est toi qui codes.** Je suis ton prof : je t'explique, je te guide, je te corrige.
- Je ne modifie jamais tes fichiers de code (`index.html`, `style.css`, `script.js`, etc.)
- À chaque session, je mets à jour ce fichier pour noter où on s'arrête
- Tu reprends exactement là la prochaine fois

## Comment me retrouver
- Reviens sur cette conversation (Mistral Vibe)
- Dis "on continue" → je sais où on en est grâce à ce fichier

---

## Trame de formation complète

| Module | Langage | Statut | Objectif |
|--------|---------|--------|----------|
| 1 | HTML | ✅ Terminé | Structure de base, titres, paragraphes, listes |
| 2 | CSS | 🔵 En cours | Mise en forme : couleurs, tailles, espacements, sélecteurs |
| 3 | JavaScript | ⬜ À venir | Interactivité : boutons, événements, DOM |
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

**Où on s'arrête** : Session 4 en cours (2026-10-12) — CSS avancé : sélecteurs par classe et par id. (Exercices 1 à 4 de la session 3 : validés.)

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

## Prochaines sessions (à venir)

### Session 4 — CSS avancé
- Sélecteurs par classe (`.ma-classe`)
- Sélecteurs par id (`#mon-id`)
- Bordures, ombres, border-radius
- Modèle de boîte (box model)

### Session 5 — JavaScript débutant
- Variables, types, fonctions
- Manipulation du DOM
- Événements (click, input)
- Premier projet : bouton interactif

### Session 6-7 — Python
- Installation, syntaxe de base
- Variables, conditions, boucles
- Fonctions, listes, dictionnaires
- Premier script

### Session 8-9 — Rust
- Installation (rustup, cargo)
- Syntaxe de base, ownership
- Variables, fonctions, conditions
- Premier programme compilé

---
