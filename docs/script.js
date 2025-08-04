let cards = [
  { native: "Привет", translated: "Hallo" },
  { native: "Спасибо", translated: "Danke" },
  { native: "Пока", translated: "Tschüss" }
];

let currentIndex = 0;

function showCard() {
  document.getElementById("native").innerText = cards[currentIndex].native;
  document.getElementById("translated").innerText = "•••";
  hideEditFields();
}

function showTranslation() {
  document.getElementById("translated").innerText = cards[currentIndex].translated;
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard();
}

function addCard() {
  const native = document.getElementById("nativeInput").value.trim();
  const translated = document.getElementById("translatedInput").value.trim();

  if (native && translated) {
    cards.push({ native, translated });
    document.getElementById("nativeInput").value = "";
    document.getElementById("translatedInput").value = "";
    alert("Карточка добавлена!");
  } else {
    alert("Введите оба поля!");
  }
}

function editCard() {
  document.getElementById("editFields").style.display = "block";
  document.getElementById("editNative").value = cards[currentIndex].native;
  document.getElementById("editTranslated").value = cards[currentIndex].translated;
}

function saveEdit() {
  const newNative = document.getElementById("editNative").value.trim();
  const newTranslated = document.getElementById("editTranslated").value.trim();

  if (newNative && newTranslated) {
    cards[currentIndex] = { native: newNative, translated: newTranslated };
    showCard();
    alert("Карточка обновлена!");
  } else {
    alert("Поля не должны быть пустыми.");
  }
}

function hideEditFields() {
  document.getElementById("editFields").style.display = "none";
}

showCard();
