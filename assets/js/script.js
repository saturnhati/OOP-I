let table = document.querySelector(".container-table");
let newRow;

// creo la classe user
class user {
  constructor(name, surname, birthday) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
  }
}

// funzione che viene chiamata al click sul bottone submit
const submitUser = () => {
  // creo un nuovo ooggetto con il costruttore utilizzando i valori inseriti negli input
  let newUser = new user(
    document.querySelector("#name").value,
    document.querySelector("#surname").value,
    document.querySelector("#birthday").value
  );
  // creo il nuovo div che conterrà i valori
  newRow = document.createElement("div");
  newRow.classList.add("row");
  newRow.innerHTML = `<div class="col">${newUser.name}</div><div class="col">${newUser.surname}</div><div class="col">${newUser.birthday}</div>`;
  let newTrash = document.createElement("div");
  // creo un altro div per l'icona delete
  newTrash.classList.add("col");
  newTrash.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  // "appendo" l'icona al div della nuova riga di valori
  newRow.appendChild(newTrash);
  // "appendo" la nuova riga di valori al container in html
  table.appendChild(newRow);

  // evento per rimuovere le righe al click sull'icona
  newTrash.addEventListener("click", function () {
    table.removeChild(newRow);
  });

  // resetto i campi degli input
  document.querySelector("#name").value = "";
  document.querySelector("#surname").value = "";
  document.querySelector("#birthday").value = "";
};

// evito che la pagina si refreshi al click sul bottone
document
  .getElementById("submit-form")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
