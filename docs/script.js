let cards = JSON.parse(localStorage.getItem("cards")) || [
  { native: "Привет", translated: "Hallo" },
  { native: "Спасибо", translated: "Danke" },
  { native: "Как дела?", translated: "Wie geht’s?" }
];

let current = 0;

function loadCard() {
  document.getElementById("native").textContent = cards[current].native;
  document.getElementById("translated").textContent = cards[current].translated;
  document.getElementById("translated").style.display = "none";
}

function showTranslation() {
  document.getElementById("translated").style.display = "block";
}

function nextCard() {
  current = (current + 1) % cards.length;
  loadCard();
}

function addCard() {
  const native = document.getElementById("nativeInput").value.trim();
  const translated = document.getElementById("translatedInput").value.trim();

  if (native && translated) {
    cards.push({ native, translated });
    localStorage.setItem("cards", JSON.stringify(cards));

    document.getElementById("nativeInput").value = "";
    document.getElementById("translatedInput").value = "";

    alert("Карточка добавлена!");
  } else {
    alert("Пожалуйста, введите слово и перевод.");
  }
}

window.onload = loadCard;
let editIndex = null;

// Функция: включить режим редактирования текущей карточки
function editCard() {
  editIndex = currentIndex;
  const currentCard = cards[editIndex];
  document.getElementById("editNative").value = currentCard.native;
  document.getElementById("editTranslated").value = currentCard.translated;
  document.querySelector(".edit-fields").style.display = "block";
}

// Функция: сохранить изменения
function saveEdit() {
  const newNative = document.getElementById("editNative").value.trim();
  const newTranslated = document.getElementById("editTranslated").value.trim();
  if (newNative && newTranslated && editIndex !== null) {
    cards[editIndex] = { native: newNative, translated: newTranslated };
    currentIndex = editIndex;
    showCard();
    document.querySelector(".edit-fields").style.display = "none";
    editIndex = null;
  }
}

