//! Declaration des constantes

const citationForm = document.getElementById("citationForm");
const citationInput = document.getElementById("citationInput");
const authorInput = document.getElementById("authorInput");
const quoteList = document.getElementById("quote-list");
let quoteCount = 0;

//! déclaration JSON dans script.js

//* objet json : const x = {clé1 : valeur, clé2: valeur...}
//* ajout [] autour des {} du json pour transformer en tableau et ainsi ajouter d'autres objets
const data = [
  {
    author: "Simone de Beauvoir",
    text: "On ne naît pas femme, on le devient.",
  },
];
// console.log(data[0].author); // accéder au clés grâce à l'index

//! on écoute le submit du form

citationForm.addEventListener("submit", (event) => {
  // ici fonction fléchée
  event.preventDefault(); // empêche le rechargement de la page
  //* on recupere le contenu des inputs et on les stock dans des variables
  const textForm = citationInput.value;
  const authorForm = authorInput.value;
  addQuote(textForm, authorForm);
});

function addQuote(quote, author) {
  const quoteAdd = document.createElement("p");
  quoteAdd.classList.add("text"); // possibilité = quoteAdd.className = "text"
  quoteAdd.textContent = `🗨️ "${quote}"`;

  const authorAdd = document.createElement("p");
  authorAdd.classList.add("author");
  authorAdd.textContent = `🐰 ${author}`;

  const divQuote = document.createElement("div");
  divQuote.classList.add("quote");
  quoteList.appendChild(divQuote);
  divQuote.appendChild(quoteAdd);
  divQuote.appendChild(authorAdd);

  quoteCount += 1;
  const count = document.getElementById("count");
  count.innerText = `${quoteCount} citations`;
}

//! vérifier si il y a quelque chose dans localStorage

//* récupérer le tableau depuis localStorage
const storedData = localStorage.getItem("citations");

//* vérifier son existence (possibilité d'utiliser try/cash)

if (storedData) {
  citations = JSON.parse(storedData);
} else {
  citations = [];
}

//* sauvegarder nouvelle citation dans localStorage
const storedCitation = localStorage.setItem("citations", JSON.stringify(data));
console.log(storedCitation);

//*
