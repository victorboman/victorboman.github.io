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
  console.log(index);
}

function removeItem(e) {
  console.log(e); 
}

function onLoad() {
  let myArr = JSON.parse(localStorage.getItem('Information'));
  if (!myArr) return;
  for (let i = 0; i < myArr.length; i++) {
    appendText(myArr[i].toString(), i);
  }
}

function clearAllValues() {
  localStorage.removeItem('Information');
  document.querySelector(".flex-container_2").innerHTML = '';
}

function saveValues() {
  console.log('test');
  let text = document.querySelector(".textArea").value;
  if (!text) return;

  let test = JSON.parse(localStorage.getItem('Information'));
  let i = test && Array.isArray(test) ? test.length : 0;

  appendText(text, i);

  let localValue = 'Information';
  let localStorageText = JSON.parse(localStorage.getItem(localValue));
  localStorageText = localStorageText ? localStorageText : [];
  localStorageText.push(text);
  localStorage.setItem(localValue, JSON.stringify(localStorageText));
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
