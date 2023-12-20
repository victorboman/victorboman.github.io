import './style.css'

document.querySelector('.toggleModeButton').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

onLoad();

function appendText(text, index) {
  const divItem = document.createElement("div");
  const paragraph = document.createElement("h1");
  const content = document.createTextNode(text);
  const listElement = document.querySelector(".flex-container_2");
  const newButton = document.createElement("button");

  newButton.textContent = 'remove';
  newButton.setAttribute("class", "card-button");
  newButton.setAttribute('data-number', index);
  paragraph.appendChild(content);
  divItem.classList.add('removeItem-' + index);
  divItem.setAttribute('class', `flex-items_2 divItem-${index}`);
  divItem.appendChild(paragraph);
  divItem.appendChild(newButton);
  listElement.insertBefore(divItem, listElement.children[0]);
}

function removeItem(e) {
  let deleteCard = parseInt(e.target.getAttribute('data-number'));
  let divItem = document.querySelector('.divItem-'+deleteCard);
  divItem.remove();

  const localStorageRaw = localStorage.getItem('Information');
  const localStorageItems = JSON.parse(localStorageRaw);

  const updateLocalStorage = Array.from(localStorageItems).filter(function(item, index){
    console.log(item, index, deleteCard);
    return index !== deleteCard;
  });
  addToLocalStorage(updateLocalStorage);
}

function onLoad() {
  const localStorageItems = getLocalStorage();
  if (!localStorageItems) return;
  for (let i = 0; i < localStorageItems.length; i++) {
    appendText(localStorageItems[i].toString(), i);
  }
}

function clearAllValues() {
  localStorage.removeItem('Information');
  document.querySelector(".flex-container_2").innerHTML = '';
}

function addToLocalStorage(storage) {
  const localValue = 'Information';
  localStorage.setItem(localValue, JSON.stringify(storage));
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('Information'));
}

function saveValues() {
  let text = document.querySelector(".textArea").value;
  if (!text) return;
  
  let localStorageItems = getLocalStorage();
  let index = localStorageItems && Array.isArray(localStorageItems) ? localStorageItems.length : 0;

  appendText(text, index);

  localStorageItems = localStorageItems ?? [];
  localStorageItems.push(text);
  addToLocalStorage(localStorageItems);
}

let divItems = document.querySelectorAll(".card-button");

for (let i = 0; i < divItems.length; i++) {
  divItems[i].addEventListener("click", removeItem);
}

const cardButton = document.querySelector(".card-button");

if (cardButton) {
  cardButton.addEventListener("click", removeItem);
}
document.querySelector(".textButton").addEventListener("click", saveValues);
document.querySelector(".textButtonClearAll").addEventListener("click", clearAllValues);
