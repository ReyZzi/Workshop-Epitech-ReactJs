
# 🚀 Session 1 : Fondations de React, TypeScript, et Tailwind

Bonjour et bienvenue dans cette première session ! 👋 Aujourd'hui, nous allons plonger dans les fondamentaux de React, explorer TypeScript, et apprendre à styliser nos applications avec Tailwind CSS.

## Objectifs 🎯

- Comprendre les composants React et JSX.
- Initiation à TypeScript dans les projets React.
- Découvrir le styling efficace avec Tailwind CSS.

## Pour commencer 🏁
## Setupe project

#### Installer pnpnm

https://pnpm.io/installation

#### Créer un projet avec vite

```bash
  pnpm create vite@latest
```
- project name : Session1

- framework : React

- variant : Typescript

```bash
  cd Session1
  pnpm i
```
#### Ajouter Tailwind au projet
https://tailwindcss.com/docs/guides/vite

!pnpm pnpx pas npm npx
#### Run le projet

```bash
  npm run dev
```


## Exercices 📚

### Exercice 1 : Composant `Button` avec TypeScript

**Objectif :** Créez un bouton réutilisable qui accepte un label et une action de clic comme props.

1. **Définir les Props :** Commencez par créer une interface `ButtonProps` dans un nouveau fichier `Button.tsx`. Cette interface doit inclure `label` (string) et `onClick` (fonction).

2. **Créer le Composant :** Utilisez l'interface `ButtonProps` pour typer les props de votre composant fonctionnel `Button`. Renvoyez un élément bouton (`<button>`) qui utilise ces props.

3. **Styliser avec Tailwind :** Appliquez des classes Tailwind au bouton pour le styliser. Par exemple, utilisez `className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"` pour un joli effet.

### Exercice 2 : Layout de base avec Tailwind

**Objectif :** Construisez un layout simple avec un header, un contenu principal, et un footer.

1. **Créer les Composants :** Définissez trois composants séparés : `Header`, `Main`, et `Footer`. Chaque composant doit renvoyer un élément HTML de base contenant un texte représentatif.

2. **Assembler le Layout :** Dans votre composant `App`, importez et utilisez `Header`, `Main`, et `Footer` pour créer le layout de l'application.

3. **Styliser avec Tailwind :** Utilisez Tailwind CSS pour appliquer un style de base à votre layout. Par exemple, ajoutez des marges, des paddings, et choisissez des couleurs de fond.

### Exercice 3 : Composant `List` avec TypeScript

**Objectif :** Affichez une liste d'éléments passés en props, en utilisant TypeScript pour typer vos props.

1. **Définir les Props :** Dans un nouveau fichier `List.tsx`, créez une interface `ListProps` qui contient un tableau `items` de strings.

2. **Créer le Composant :** Implémentez le composant `List` qui prend `items` en props et les affiche dans une liste (`<ul>`).

3. **Styliser avec Tailwind :** Utilisez les utilitaires de Tailwind pour styliser la liste. Par exemple, utilisez `className="list-disc space-y-2"` pour les éléments de liste.

### Exercice 4 : Composant `Card`

**Objectif :** Créer un composant `Card` pour afficher une image, un titre et une description.

1. Définissez un nouveau composant `Card.tsx`.

2. Le composant doit accepter des props pour une image (URL), un titre et une description.

3. Utilisez TypeScript pour typer les props correctement.

4. Stylisez le composant avec Tailwind CSS pour qu'il soit attrayant et réactif.

## Besoin d'aide ? 🆘

Si vous rencontrez des difficultés, n'hésitez pas à consulter la documentation officielle de [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/docs/), et [Tailwind CSS](https://tailwindcss.com/).

Bonne chance ! 🚀

