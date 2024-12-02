const phrases = [
  "You are my sunshine.",
  "You are the reason I smile.",
  "Forever and always.",
  "My heart beats for you.",
  "You are a part of me",
  "I love you more than anything",
  "You are the air I breathe",
  "You make me better",
  "You are my best soulmate",
  "Together, forever."
];

let phraseIndex = 1;

function updateSubText() {
  const subText = document.getElementById("sub-text");
  subText.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(updateSubText, 3000);



