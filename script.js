//! Declaration des constantes

const citationForm = document.getElementById("citationForm");
const citationInput = document.getElementById("citationInput");
const authorInput = document.getElementById("authorInput");
const quoteList = document.getElementById("quote-list");

let quoteCount = 0;

//! fonction pour afficher une citation

function addQuote(quote, author) {
  const quoteAdd = document.createElement("p");
  quoteAdd.classList.add("text");
  quoteAdd.textContent = `🗨️ "${quote}"`;

  const authorAdd = document.createElement("p");
  authorAdd.classList.add("author");
  authorAdd.textContent = `🐰 ${author}`;

  const divQuote = document.createElement("div");
  divQuote.classList.add("quote");

  divQuote.appendChild(quoteAdd);
  divQuote.appendChild(authorAdd);

  quoteList.appendChild(divQuote);

  quoteCount += 1;

  const count = document.getElementById("count");
  count.innerText = `${quoteCount} citations`;
}

//! on écoute le submit du form

citationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const textForm = citationInput.value;
  const authorForm = authorInput.value;

  addQuote(textForm, authorForm);

  storageQuote(textForm, authorForm);

  // vider les champs
  citationInput.value = "";
  authorInput.value = "";
});

//! fonction pour sauvegarder les citations

function storageQuote(textForm, authorForm) {
  const storedData = localStorage.getItem("citations");

  let citations = [];

  if (storedData) {
    citations = JSON.parse(storedData);
  }

  citations.push({
    author: authorForm,
    text: textForm,
  });

  localStorage.setItem("citations", JSON.stringify(citations));
}

//! charger les citations au démarrage

const storedData = JSON.parse(localStorage.getItem("citations")) || [];

storedData.forEach((citation) => {
  addQuote(citation.text, citation.author);
});

/*
//! vider le localStorage avec un bouton

const clearBtn = document.getElementById("clearQuotes");

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("citations");
  quoteList.innerHTML = "";
  quoteCount = 0;
  document.getElementById("count").innerText = "0 citations";
});

*/
