# Palette couleurs — Deutéranomalie (trouble du vert)

> Tu vois bien les couleurs vives. Le problème : les nuances proches, les couleurs fades.
> **Règle d'or** : contraste fort en luminosité + couleurs bien espacées.

---

## À UTILISER (fort contraste, bien distinct)

| Nom | Hex | Usage | Snippet |
|-----|-----|-------|---------|
| Bleu vif | `#0033cc` | Titres, accents, liens | `d-txt-blue` |
| Bleu foncé | `#001a66` | Texte sur fond clair | `d-txt-blue-dark` |
| Orange vif | `#ff6600` | Alertes, boutons, CTA | `d-txt-orange` |
| Orange foncé | `#cc3300` | Texte, hover | `d-txt-orange-dark` |
| Violet | `#6600cc` | Accents secondaires | `d-txt-purple` |
| Noir | `#000000` | Texte principal | `d-txt-black` |
| Gris foncé | `#333333` | Texte secondaire | `d-txt-gray-dark` |
| Blanc pur | `#ffffff` | Fond | `d-bg-white` |
| Gris très clair | `#f0f0f0` | Fond alternatif | `d-bg-gray-light` |
| Bleu très foncé | `#0a1929` | Fond sombre | `d-bg-navy` |

## Paires sûres (contraste garanti)

| Fond | Texte | Contraste | Snippet |
|------|-------|-----------|---------|
| `#ffffff` blanc | `#000000` noir | 21:1 (max) | `d-pair-bw` |
| `#ffffff` blanc | `#0033cc` bleu vif | 12:1 | `d-pair-wb` |
| `#ffffff` blanc | `#ff6600` orange vif | 4.5:1 | `d-pair-wo` |
| `#0a1929` navy | `#ffffff` blanc | 18:1 | `d-pair-nw` |
| `#f0f0f0` gris clair | `#333333` gris foncé | 12:1 | `d-pair-gg` |
| `#0033cc` bleu vif | `#ffffff` blanc | 12:1 | `d-pair-bw2` |

---

## À ÉVITER (tu confonds)

| Couleur | Hex | Problème |
|---------|-----|----------|
| Vert clair | `#90ee90` | Proche du jaune pâle, du beige |
| Vert | `#00cc00` | Proche du jaune vif dans ta perception |
| Jaune pâle | `#ffffcc` | Proche du blanc, du beige |
| Beige | `#f5f5dc` | Proche du jaune, du vert pâle |
| Bleu très clair | `#add8e6` | Proche du blanc, du gris clair |
| Rose pâle | `#ffcccc` | Proche du beige, du gris |
| Marron clair | `#d2b48c` | Proche du vert pâle, du beige |
| Turquoise clair | `#afeeee` | Proche du bleu clair, du blanc |

## Pourquoi éviter le vert et le jaune

Sur la roue chromatique, le vert et le jaune sont **adjacents**. Avec la deutéranomalie, ton cerveau perçoit le vert comme plus proche du jaune/beige. Résultat : tu ne distingues plus la frontière entre les deux.

**Solution** : saute le vert et le jaune. Utilise le **bleu** et l'**orange** à la place — ils sont de l'autre côté de la roue, bien distincts.

---

## Snippets disponibles (tape préfixe + Tab)

| Préfixe | Résultat |
|---------|----------|
| `d-txt-blue` | `color: #0033cc;` |
| `d-txt-blue-dark` | `color: #001a66;` |
| `d-txt-orange` | `color: #ff6600;` |
| `d-txt-orange-dark` | `color: #cc3300;` |
| `d-txt-purple` | `color: #6600cc;` |
| `d-txt-black` | `color: #000000;` |
| `d-txt-gray-dark` | `color: #333333;` |
| `d-bg-white` | `background-color: #ffffff;` |
| `d-bg-gray-light` | `background-color: #f0f0f0;` |
| `d-bg-navy` | `background-color: #0a1929;` |
| `d-pair-bw` | Blanc + texte noir |
| `d-pair-wb` | Blanc + texte bleu vif |
| `d-pair-wo` | Blanc + texte orange vif |
| `d-pair-nw` | Fond navy + texte blanc |
| `d-pair-gg` | Gris clair + texte gris foncé |
| `d-pair-bw2` | Bleu vif + texte blanc |

## Pour tes exercices CSS

| Exercice | Sélecteur | Propriété | Snippet suggéré |
|----------|-----------|-----------|-----------------|
| 1. Fond page | `body` | `background-color` | `d-bg-gray-light` ou `d-bg-white` |
| 2. Couleur titre | `h1` | `color` | `d-txt-blue` ou `d-txt-orange-dark` |
| 3. Espacement liste | `li` | `padding` | `c-padding` |
| 4. Taille texte | `p` | `font-size` | `c-font-size` |
