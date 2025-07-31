const cards = [
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

window.onload = loadCard;
