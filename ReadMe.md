# Quotations App

Application web simple permettant d'ajouter et d'afficher ses citations
favorites avec leur auteur ou autrice.

Ce projet a été réalisé dans le cadre d'un kata d'apprentissage du
développement web afin de pratiquer les bases de **HTML, CSS, JavaScript
et Git**.

------------------------------------------------------------------------

# Objectifs pédagogiques

Ce projet permet de travailler les compétences suivantes :

-   Initialiser un répertoire Git et le lier à un dépôt distant sur
    GitHub
-   Effectuer des commits régulièrement
-   Déclarer et initialiser des variables en respectant les conventions
    de nommage
-   Déclarer et utiliser des fonctions (avec et sans arguments)
-   Comprendre la portée des variables dans les fonctions
-   Appeler et organiser du code via des fonctions
-   Structurer une page HTML avec les balises principales :
    -   html
    -   head
    -   body
    -   h1
    -   p
    -   a
    -   img
    -   div
-   Utiliser les attributs HTML (id, class, href, src, etc.)
-   Styliser une page avec CSS
-   Manipuler le DOM avec JavaScript
-   Ajouter, supprimer et modifier des éléments HTML dynamiquement
-   Gérer les événements utilisateur
-   Modifier les styles CSS via JavaScript

------------------------------------------------------------------------

# Description du projet

L'application permet de :

-   saisir une citation
-   indiquer son auteur ou autrice
-   afficher les citations dans une liste
-   compter le nombre de citations enregistrées

L'interface contient :

-   un titre de page
-   un compteur de citations
-   un formulaire d'ajout
-   une liste de citations

------------------------------------------------------------------------

# Structure du projet

quotations-app │ ├── index.html ├── style.css ├── script.js └──
README.md

-   index.html : structure de la page
-   style.css : mise en forme
-   script.js : logique JavaScript et manipulation du DOM

------------------------------------------------------------------------

# Fonctionnalités

✔ Ajouter une citation\
✔ Ajouter le nom de l'auteur/autrice\
✔ Afficher les citations dans la page\
✔ Mettre à jour automatiquement le compteur de citations

------------------------------------------------------------------------

# Installation

1.  Cloner le repository :

git clone https://github.com/votre-username/quotations-app.git

2.  Ouvrir le dossier :

cd quotations-app

3.  Ouvrir index.html dans un navigateur.

------------------------------------------------------------------------

# Exemple de citation

> "On ne naît pas femme, on le devient."

**Simone de Beauvoir**

------------------------------------------------------------------------

# Bonus (optionnel)

Amélioration possible : sauvegarde des citations avec le Local Storage.

Exemple d'objet JSON :

const citation = { author: "Simone de Beauvoir", text: "On ne naît pas
femme, on le devient." }

Objectifs du bonus :

-   stocker les citations dans un tableau
-   sauvegarder ce tableau dans le localStorage
-   recharger les citations lors de l'ouverture de la page

------------------------------------------------------------------------

# Technologies utilisées

-   HTML5
-   CSS3
-   JavaScript
-   Git / GitHub

------------------------------------------------------------------------

# Auteur

Projet réalisé dans le cadre d'un exercice d'apprentissage du
développement web.
