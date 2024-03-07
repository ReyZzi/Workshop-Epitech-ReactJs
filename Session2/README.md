# Session 2 : Gestion d'état et événements

Bienvenue dans la Session 2 de notre parcours d'apprentissage React pour débutants. Dans cette session, nous nous concentrerons sur la gestion d'état avec `useState` et sur la manipulation des événements, deux piliers pour créer des applications dynamiques et interactives.

## 🎯 Objectifs

- Apprendre à utiliser le Hook `useState` pour gérer l'état local des composants.
- Comprendre et appliquer la gestion des événements pour interagir avec l'utilisateur.

## 📚 Exercices

### Exercice 1 : Compteur

**Objectif :** Créer un composant `Counter` qui permet à l'utilisateur d'incrémenter, de décrémenter et de réinitialiser un compteur.

#### Étapes :

1. Initialisez un état local `count` dans votre composant `Counter` avec une valeur de départ de 0.
2. Ajoutez un affichage du compteur dans le JSX du composant.
3. Créez trois boutons : un pour incrémenter `count`, un pour le décrémenter, et un dernier pour le réinitialiser.
4. Utilisez `setCount` pour modifier l'état du compteur lorsque les boutons sont cliqués.

### Exercice 2 : Formulaire de feedback

**Objectif :** Développer un composant `FeedbackForm` pour collecter un retour utilisateur avec des champs pour le nom, l'email, et un message.

#### Étapes :

1. Créez un état local `feedback` pour gérer les valeurs des champs du formulaire.
2. Mettez en place un formulaire avec des `<input>` pour le nom et l'email, ainsi qu'une `<textarea>` pour le message.
3. Ajoutez une fonction `handleInputChange` qui met à jour l'état `feedback` avec les valeurs saisies par l'utilisateur.
4. Créez un bouton de soumission qui affiche les valeurs de l'état `feedback` dans la console lorsque le formulaire est soumis.

### Exercice 3 : Toggle Theme

**Objectif :** Ajouter un commutateur dans votre application qui permet à l'utilisateur de basculer entre un thème clair et sombre.

#### Étapes :

1. Initialisez un état local `theme` pour stocker le thème actuel.
2. Ajoutez un bouton qui, lorsque cliqué, bascule la valeur de `theme` entre 'light' et 'dark'.
3. Utilisez l'état `theme` pour conditionnellement changer les classes CSS du composant et appliquer différents styles selon le thème.

### Exercice 4 : Liste de Tâches

**Objectif :** Créer une simple application de liste de tâches où les utilisateurs peuvent ajouter et supprimer des tâches.

#### Étapes :

1. Utilisez `useState` pour gérer un tableau de tâches.
2. Créez un champ de saisie où les utilisateurs peuvent écrire le nom d'une nouvelle tâche.
3. Ajoutez un bouton pour soumettre la nouvelle tâche, en l'ajoutant au tableau des tâches.
4. Affichez la liste des tâches et fournissez un moyen de les supprimer individuellement.

### Exercice 5 : Composant d'Alerte

**Objectif :** Construire un composant `Alert` qui s'affiche avec un message spécifique en fonction d'une certaine condition.

#### Étapes :

1. Créez un composant `Alert` qui accepte un prop `message`.
2. Dans un autre composant, utilisez `useState` pour gérer une condition qui déterminera si l'alerte doit être affichée.
3. Affichez le composant `Alert` avec un message lorsque la condition est remplie.

## 🏁 Pour commencer

Assurez-vous que votre environnement de développement est configuré avec Node.js et npm/yarn. Clonez le dépôt de démarrage si nécessaire, installez les dépendances et lancez votre projet React.

## Besoin d'aide ? 🆘

Si vous avez des questions ou rencontrez des difficultés, la documentation officielle de [React](https://reactjs.org/docs/hooks-state.html) sur les Hooks d'état et la gestion des événements est une excellente ressource. Pour le styling, n'oubliez pas de consulter [Tailwind CSS](https://tailwindcss.com/).

Heureux codage ! 🌈

