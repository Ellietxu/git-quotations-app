//! Declaration des constantes

const citationForm = document.getElementById("citationForm");
const citationInput = document.getElementById("citationInput");
const authorInput = document.getElementById("authorInput");
const quoteList = document.getElementById("quote-list");

// on écoute le submit du form
citationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // empêche le rechargement de la page
  //* on recupere le contenu des inputs et on les stock dans des variables
  const textForm = citationInput.value;
  const authorForm = authorInput.value;
  addQuote(textForm, authorForm);
  citationInput.value = "";
  authorInput.value = "";
});

function addQuote(quote, author) {
  const quoteAdd = document.createElement("p");
  quoteAdd.classList.add("text");
  quoteAdd.textContent = `Citation : "${quote}"`;

  const authorAdd = document.createElement("p");
  authorAdd.classList.add("author");
  authorAdd.textContent = `Autrice/auteur : ${author}`;

  const divQuote = document.createElement("div");
  divQuote.classList.add("quote");
  quoteList.appendChild(divQuote);
  divQuote.appendChild(quoteAdd);
  divQuote.appendChild(authorAdd);
}

//     mettre le texte de quote dans le paragraphe citation
//     mettre le texte de author dans le paragraphe auteur

// Fonctionnalités JS à utiliser :

// créer un élément → document.createElement()

// ajouter une classe → element.classList.add()

// ajouter du texte → element.textContent
