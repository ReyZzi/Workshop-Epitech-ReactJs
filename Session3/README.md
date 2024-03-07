# 🚦 Session 3 : Routing et gestion avancée de l'état avec Redux

Bienvenue dans notre dernière session, où nous explorons le routing avec `react-router-dom` et découvrons Redux pour une gestion avancée et centralisée de l'état de nos applications React.

## 🎯 Objectifs

- Introduire le routing dans vos applications React pour une navigation fluide entre différentes vues.
- Comprendre et appliquer les principes de Redux pour gérer l'état global de manière prévisible.


## 🏁 Pour commencer

Assurez-vous d'avoir initialisé un nouveau projet React pour cette session. Préparez votre environnement de développement et assurez-vous que tout est en place pour commencer à coder. voir readme session 1

## 📚 Exercices

### 🧭 Exercice 1 : Mise en place du Routing

Intégrez `react-router-dom` pour créer un système de navigation entre les pages "Accueil", "À propos" et "Contact" de votre application.

### 📖 Exercice 2 : Paramètres de Route

Utilisez les paramètres de route pour afficher le contenu spécifique d'une page, comme les détails d'un produit identifié par son ID dans l'URL.

### 🔗 Exercice 3 : Navigation

Mettez en place une barre de navigation permettant de se déplacer aisément entre les sections de votre application grâce à `Link` ou `NavLink`.

### 🔄 Exercice 4 : Context API pour un thème global

Implémentez un thème global pour votre application en utilisant Context API, permettant aux utilisateurs de basculer entre un thème clair et sombre.

### 🛠 Exercice 5 : Introduction à Redux pour la gestion de l'état

**Objectif :** Implémenter Redux pour créer un magasin d'état global pour votre application, en commençant par une fonctionnalité simple comme un compteur.

#### Étapes détaillées :

1. **Installation et configuration :**
   - Installez Redux et React Redux dans votre projet avec `npm install redux react-redux`.
   - Configurez le store Redux en créant un fichier `store.js` à la racine de votre projet.

2. **Création d'un réducteur de compteur :**
   - Dans un nouveau dossier `reducers`, créez un fichier `counterReducer.js`.
   - Définissez un état initial pour votre compteur (par exemple, `0`) et créez une fonction réducteur qui gère les actions `INCREMENT` et `DECREMENT`.

3. **Mise en place du Provider :**
   - Englobez votre application (`App.js`) dans le composant `Provider` de React Redux, en passant votre store comme prop.

4. **Utilisation de Redux dans un composant :**
   - Créez un composant `Counter` qui affiche le compteur et des boutons pour l'incrémenter et le décrémenter.
   - Utilisez `useSelector` pour accéder à l'état du compteur dans le store Redux et `useDispatch` pour dispatcher les actions `INCREMENT` et `DECREMENT`.

#### Code de base pour le réducteur de compteur :

```javascript
// Dans counterReducer.js
const initialState = 0;

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
```
## 🆘 Besoin d'aide ?

Aborder le routing avec `react-router-dom` et la gestion de l'état avec Redux peut parfois sembler complexe. Voici quelques ressources pour vous guider :

- **React Router** : Pour débuter avec le routing dans vos applications React, la [documentation officielle de React Router](https://reactrouter.com/web/guides/quick-start) 
- **Redux** : Si vous souhaitez approfondir votre compréhension de Redux pour la gestion de l'état, consultez [les tutoriels et guides officiels de Redux](https://redux.js.org/introduction/getting-started).
- **Context API** : Pour Context API, partager l'état à travers les composants, la [section Context de la documentation officielle de React](https://fr.reactjs.org/docs/context.html) est très instructive.
