# Fastfoodborne

## 🛠️ Installation

Avant de lancer le projet **macDoberman**, assurez-vous d’avoir les outils suivants installés sur votre machine :

### 1. Prérequis

- **[Node.js](https://nodejs.org/)** (version 20 ou supérieure)  
  > Vérifiez la version installée :  
  ```bash
  node -v
  ```

- **[Git](https://git-scm.com/)**  
  > Vérifiez la version installée :  
  ```bash
  git --version
  ```

- **[Visual Studio Code](https://code.visualstudio.com/)**  
  Recommandé pour le développement avec les extensions *Angular Essentials*, *Prettier* et *ESLint*.

- **Angular CLI**  
  Installez l’outil globalement si ce n’est pas déjà fait :  
  ```bash
  npm install -g @angular/cli
  ```

### 2. Cloner le projet

```bash
git clone https://github.com/AvistoTelecom/FastFoodBorne.git
cd macDoberman
```


### 3. Installer les dépendances

```bash
npm install
```

Cette commande télécharge toutes les dépendances nécessaires au projet (Angular, RxJS, Tailwind, etc.).

### 4. Lancer le serveur de développement

```bash
npm run start
```

Puis ouvrez votre navigateur à l’adresse :  
👉 [http://localhost:4200](http://localhost:4200)


### 🧩 Extensions Visual Studio Code

Le projet **macDoberman** inclut un dossier `.vscode` configuré avec une sélection d’extensions recommandées pour améliorer la productivité et la qualité du code.  
Lors de l’ouverture du projet dans **VS Code**, l’éditeur vous proposera automatiquement d’installer ces extensions si elles ne sont pas encore présentes.

### 📦 Liste des extensions recommandées

| Extension                       | Identifiant                  | Description                                                                                                     |
| ------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 🅰️ **Angular Language Service**  | `angular.ng-template`        | Fournit l’autocomplétion, les diagnostics et l’analyse des templates Angular directement dans VS Code.          |
| ✅ **ESLint**                    | `dbaeumer.vscode-eslint`     | Analyse statiquement le code TypeScript pour détecter les erreurs et appliquer les règles de style configurées. |
| 🎨 **Prettier - Code Formatter** | `esbenp.prettier-vscode`     | Formateur de code automatique pour garder un style cohérent dans tout le projet.                                |
| 💡 **Error Lens**                | `usernamehw.errorlens`       | Met en évidence les erreurs et avertissements directement dans le code pour un débogage plus rapide.            |
| 💅 **Stylelint**                 | `stylelint.vscode-stylelint` | Vérifie la qualité et la cohérence des fichiers CSS/SCSS avec les règles Stylelint.                             |
| 🧱 **Material Icon Theme**       | `PKief.material-icon-theme`  | Améliore la lisibilité de l’explorateur de fichiers avec des icônes modernes et thématiques.                    |


### ⚙️ Installation automatique

Lorsque vous ouvrez le dossier du projet dans **VS Code**, l’éditeur détecte automatiquement le fichier extension.json

Ce fichier contient la liste des extensions recommandées par l’équipe du projet.  
VS Code affichera alors une notification en bas à droite de l’écran vous proposant d’installer les extensions manquantes.

> 💡 Vous n’avez rien à configurer manuellement :  
> il suffit d’accepter la suggestion “**Installer les extensions recommandées pour ce workspace**”.

Une fois cette étape validée, VS Code télécharge et installe toutes les extensions définies dans le fichier `.vscode/extensions.json`.  
Elles seront ensuite activées automatiquement à chaque ouverture du projet.

### 🔁 Si l’installation automatique ne se lance pas

Si VS Code ne propose pas l’installation automatiquement, vous pouvez lancer la commande suivante dans un terminal :

```bash
code --install-extension angular.ng-template
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension usernamehw.errorlens
code --install-extension stylelint.vscode-stylelint
code --install-extension PKief.material-icon-theme
```


## 🗂️ Structure du projet

Voici l’organisation des dossiers du projet **macDoberman**.

### **Clé de lecture**

- **[nom du dossier]** → représente un répertoire  
- **"nom_du_fichier"** → représente un fichier  

---

```bash
|
├── [src]
|   |   dossier source principal
|   ├── [app]
|   |   |   contient toute la logique de l’application et les modules principaux
|   |   ├── [core]
|   |   |   |   logique partagée, services, configuration et composants de base
|   |   |   ├── [config]
|   |   |   |       fichier de logique pour récupérer les données de config
|   |   |   ├── [models]
|   |   |   |       interfaces TypeScript et définitions d’entités
|   |   |   ├── [services]
|   |   |   |       services réutilisables partagés dans toute l’application
|   |   |   ├── [value-object]
|   |   |   |       objets métiers encapsulant la logique et la validation des entités
|   |   |   ├── [components]
|   |   |   |       composants globaux utilisés à la fois dans les pages et les modales
|   |   |
|   |   ├── [modal]
|   |   |   |   contient la mise en page des modales et leurs composants spécifiques
|   |   |
|   |   ├── [pages]
|   |   |   |   toutes les pages principales (vues liées aux routes)
|   |   |   ├── [Home]
|   |   |   |       page d’accueil de l’application
|   |   |
|   |   └── "app.component.ts"  
|   |       "app.routes.ts"
|   |
|   ├── [assets]
|   |   |   fichiers statiques tels que les images, icônes
|   |
|   └── "index.html"
|
├── "angular.json"
├── "package.json"
├── "tsconfig.json"
└── "README.md"
```

### 🧠 Explications

- **core/** → logique fondamentale partagée dans toute l’application (config, modèles, services, composants de base).  
- **modal/** → contient les dispositions et composants réutilisables des modales.  
- **pages/** → regroupe les principales vues et routes de l’application.  
- **assets/** → contient les ressources statiques comme les images, icônes et fichiers de traduction.  

Cette structure assure une **claire séparation des responsabilités** et permet aux développeurs de retrouver facilement les composants, services et fichiers de configuration à travers le projet.

## 🚀 Aller plus loin

Félicitations 🎉  
Vous êtes arrivé au bout du TP **macDoberman** et vous percevez désormais les bases essentielles d’un projet Angular 20 moderne :  
gestion des composants, routing, signaux réactifs, services, et logique métier.

Mais ce n’est qu’un début 👇  


### 🌟 Pour aller plus loin

Voici quelques pistes d’amélioration pour approfondir vos compétences et rendre **macDoberman** encore plus immersif :

#### 🛒 Améliorer la page des produits
- Ajoutez une **fiche produit complète** avec la gestion des variantes (taille, supplément, sauce, etc.).  
- Intégrez un **système de filtres et de recherche** pour naviguer facilement entre les catégories.  
- Gérez la **disponibilité dynamique** des produits selon l’heure ou les stocks.

#### 💬 Enrichir l’expérience utilisateur (UX / UI)
- Créez de **nouvelles modales interactives** :  
  - Confirmation de commande.  
  - Message d’erreur ou de succès.  
  - Suggestions de produits complémentaires (“Vous aimerez aussi…”).  

## 📚 Glossaire

Ce glossaire regroupe les principaux concepts utilisés dans le projet **macDoberman**, selon une approche Angular 20 moderne.  
La troisième colonne est laissée vide pour que vous puissiez y insérer des liens utiles (documentation, articles, etc.).

| 🧩 Concept                         | 💬 Définition                                                                                                                                                                                                                                                                         | 🔗 Liens                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| **Router**                        | Le **Router Angular** permet de gérer la navigation entre les pages d’une SPA. Il repose sur des routes déclaratives et utilise le module `RouterModule` pour relier des chemins (`path`) à des composants. Les routes peuvent être **lazy-loaded** pour optimiser les performances. | https://angular.dev/guide/routing                                                             |
| **SPA (Single Page Application)** | Une **application monopage** charge une seule fois le code principal (HTML, CSS, JS) et met à jour dynamiquement le contenu sans rechargement complet du navigateur. Angular gère ce comportement grâce à son système de routing et de détection des changements.                    | https://developer.mozilla.org/en-US/docs/Glossary/SPA                                         |
| **Service**                       | Un **service Angular** est une classe injectable utilisée pour centraliser la logique métier ou les accès aux données. Elle permet de partager des fonctionnalités entre plusieurs composants via le système d’injection de dépendances (DI).                                        | https://v17.angular.io/guide/architecture-services                                            |
| **Signal**                        | Les **signals** (introduits en Angular 16) sont un nouveau mécanisme réactif permettant de suivre et propager des changements d’état sans RxJS. Un signal représente une valeur réactive, qui notifie automatiquement les composants dépendants lors d’une mise à jour.              | https://angular.dev/guide/signals                                                             |
| **Computed**                      | Les **computed signals** dérivent automatiquement leur valeur d’autres signals. Ils s’actualisent dès que l’un des signaux source change, sans nécessiter de gestion manuelle des abonnements. Idéal pour calculer des états dérivés.                                                | https://angular.dev/guide/signals#computed-signals                                            |
| **Composant**                     | Le **composant Angular** est l’unité de base de l’interface utilisateur. Il combine un **template HTML**, une **classe TypeScript** et un **style**. En Angular 20, les **Standalone Components** permettent de se passer des `NgModule`.                                            | https://medium.com/@arqex/what-is-component-driven-development-and-why-to-use-it-e3e57abbc449 |
| **Value-Object**                  | Un **Value Object** est un objet métier immuable représentant une valeur cohérente (ex : prix, coordonnées, quantité). Il encapsule la logique de validation et de transformation, favorisant la robustesse et la maintenabilité du code.                                            | https://en.wikipedia.org/wiki/Value_object                                                    |
| **Control flow (@if, @for)**      | Les  **control flow** Angular (`@if`, `@for`, `@switch`). Plus performants et plus lisibles, ils améliorent la clarté et la compilation du DOM.                                                                                                                                      | https://angular.dev/guide/templates/control-flow                                              |
| **Event Binding**                 | L’**Event Binding** (`(event)="handler()"`) relie un événement du DOM (clic, saisie, etc.) à une méthode du composant. Angular gère la synchronisation entre le modèle et la vue en toute sécurité.                                                                                  | https://v17.angular.io/guide/event-binding                                                    |
| **CLI (Command Line Interface)**  | La **CLI Angular** (`@angular/cli`) est l’outil officiel pour créer, développer, tester et déployer des applications Angular. Elle automatise les tâches courantes comme la génération de composants, la compilation ou le linting.                                                  | https://angular.dev/tools/cli    
| **Function js**  | En js, pour la lisibilité du code on utilisera plutot les functions map, filter et reduce au détriment de for et foreach.| https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d |
