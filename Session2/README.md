# Session 2 : Gestion d'état, Hookds et requetes API

Bienvenue dans la Session 2 des workshops ReactJs. Dans cette session, nous nous concentrerons sur la gestion d'état avec `useState` et sur la manipulation des événements, deux piliers pour créer des applications dynamiques et interactives.

## 🎯 Objectifs

- Apprendre à utiliser le Hook `useState` pour gérer l'état local des composants.
- Comprendre et appliquer la gestion des événements pour interagir avec l'utilisateur.

## 🏁 Pour commencer

Assurez-vous d'avoir initialisé un nouveau projet React pour cette session. Préparez votre environnement de développement et assurez-vous que tout est en place pour commencer à coder. voir readme session 1

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

### Exercice 3 : Liste de Tâches

**Objectif :** Créer une simple application de liste de tâches où les utilisateurs peuvent ajouter et supprimer des tâches.

#### Étapes :

1. Utilisez `useState` pour gérer un tableau de tâches.
2. Créez un champ de saisie où les utilisateurs peuvent écrire le nom d'une nouvelle tâche.
3. Ajoutez un bouton pour soumettre la nouvelle tâche, en l'ajoutant au tableau des tâches.
4. Affichez la liste des tâches et fournissez un moyen de les supprimer individuellement.

### Exercice 4 : Composant d'Alerte

**Objectif :** Construire un composant `Alert` qui s'affiche avec un message spécifique en fonction d'une certaine condition.

#### Étapes :

1. Créez un composant `Alert` qui accepte un prop `message`.
2. Dans un autre composant, utilisez `useState` pour gérer une condition qui déterminera si l'alerte doit être affichée.
3. Affichez le composant `Alert` avec un message lorsque la condition est remplie.

### 📖 Exercice 5 : Liste de publications

**Objectif :** Afficher une liste de publications en utilisant l'API JSONPlaceholder.

#### Étapes :

1. Utilisez `useEffect` pour effectuer une requête GET à `https://jsonplaceholder.typicode.com/posts`.
2. Stockez les résultats dans un état local avec `useState`.
3. Affichez ces publications dans votre composant sous forme de liste.

### 📝 Exercice 6 : Détails de publication

**Objectif :** Montrer les détails d'une publication lorsque l'utilisateur sélectionne un titre.

#### Étapes :

1. Ajoutez une fonctionnalité de sélection pour chaque titre de publication.
2. Faites une requête à `https://jsonplaceholder.typicode.com/posts/{id}` pour obtenir plus de détails.
3. Affichez ces détails dans une vue détaillée au sein de votre application.

### ➕ Exercice 7 : Ajouter une publication

**Objectif :** Offrir à l'utilisateur la possibilité de soumettre une nouvelle publication via un formulaire.

#### Étapes :

1. Créez un formulaire avec des champs pour le titre et le corps de la publication.
2. Envoyez les données saisies vers `https://jsonplaceholder.typicode.com/posts` en utilisant la méthode `POST`.
3. Confirmez visuellement l'ajout de la publication.

## 🆘 Besoin d'aide ?

Si vous rencontrez des difficultés ou avez des questions sur la gestion de l'état et les événements dans React, voici quelques ressources qui pourraient vous être utiles :

- **Gestion de l'état avec useState** : Pour une meilleure compréhension du Hook useState, consultez [la documentation officielle de React sur useState](https://fr.reactjs.org/docs/hooks-state.html).
- **Gestion des événements** : Pour en savoir plus sur la manière de gérer les événements dans vos composants React, visitez [la documentation officielle de React sur la gestion des événements](https://fr.reactjs.org/docs/handling-events.html).



