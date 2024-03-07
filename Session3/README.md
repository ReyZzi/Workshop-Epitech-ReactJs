# 🎣 Session 3 : Hooks et requêtes API

Plongeons plus profondément dans le monde des Hooks avec React et découvrons comment intégrer des données dynamiques dans nos applications grâce aux requêtes API. 🚀

## 🎯 Objectifs

- Exploiter `useEffect` pour exécuter des effets secondaires.
- Apprendre à récupérer des données depuis une API externe avec `fetch` et à les afficher dans nos composants React.

## 📚 Exercices

### 📖 Exercice 1 : Liste de publications

**Objectif :** Afficher une liste de publications en utilisant l'API JSONPlaceholder.

#### Étapes :

1. Utilisez `useEffect` pour effectuer une requête GET à `https://jsonplaceholder.typicode.com/posts`.
2. Stockez les résultats dans un état local avec `useState`.
3. Affichez ces publications dans votre composant sous forme de liste.

### 📝 Exercice 2 : Détails de publication

**Objectif :** Montrer les détails d'une publication lorsque l'utilisateur sélectionne un titre.

#### Étapes :

1. Ajoutez une fonctionnalité de sélection pour chaque titre de publication.
2. Faites une requête à `https://jsonplaceholder.typicode.com/posts/{id}` pour obtenir plus de détails.
3. Affichez ces détails dans une vue détaillée au sein de votre application.

### ➕ Exercice 3 : Ajouter une publication

**Objectif :** Offrir à l'utilisateur la possibilité de soumettre une nouvelle publication via un formulaire.

#### Étapes :

1. Créez un formulaire avec des champs pour le titre et le corps de la publication.
2. Envoyez les données saisies vers `https://jsonplaceholder.typicode.com/posts` en utilisant la méthode `POST`.
3. Confirmez visuellement l'ajout de la publication.

### 🔍 Exercice 4 : Recherche filtrée

**Objectif :** Ajouter une barre de recherche pour filtrer les publications par leur titre.

#### Étapes :

1. Intégrez un champ de saisie pour la recherche au-dessus de la liste des publications.
2. Utilisez un état pour contrôler la valeur de recherche et filtrez la liste des titres affichés selon cette valeur.

### 🔄 Exercice 5 : Rafraîchissement de la liste

**Objectif :** Ajouter un bouton pour rafraîchir la liste des publications affichées.

#### Étapes :

1. Intégrez un bouton "Rafraîchir" au-dessus de votre liste de publications.
2. Lorsqu'il est cliqué, refaites une requête à l'API pour obtenir les dernières publications et mettez à jour l'état qui contient les publications.

## 🏁 Pour commencer

Assurez-vous d'avoir initialisé un nouveau projet React pour cette session. Préparez votre environnement de développement et assurez-vous que tout est en place pour commencer à coder. voir readme session 1

## 🆘 Besoin d'aide ?

Si vous rencontrez des difficultés avec les requêtes API ou les Hooks, pensez à consulter les ressources suivantes :
- [Documentation officielle de React sur les Hooks](https://fr.reactjs.org/docs/hooks-intro.html) pour une immersion dans `useState` et `useEffect`.
- [JSONPlaceholder documentation](https://jsonplaceholder.typicode.com/guide/) pour des exemples d'utilisation de l'API.

💡 N'oubliez pas, la pratique est la clé ! Et notre communauté est là pour vous soutenir à chaque étape. N'hésitez pas à partager vos questions et progrès.

