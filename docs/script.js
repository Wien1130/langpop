let cards = [
  { native: "Привет", translated: "Hallo" },
  { native: "Спасибо", translated: "Danke" },
  { native: "Как дела?", translated: "Wie geht's?" }
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
  const nativeInput = document.getElementById("nativeInput").value.trim();
  const translatedInput = document.getElementById("translatedInput").value.trim();

  if (nativeInput && translatedInput) {
    cards.push({ native: nativeInput, translated: translatedInput });
    alert("Карточка добавлена!");
    document.getElementById("nativeInput").value = "";
    document.getElementById("translatedInput").value = "";
  } else {
    alert("Пожалуйста, заполните оба поля.");
  }
}

window.onload = loadCard;
