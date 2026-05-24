const quotes = [
  "Success is built from consistency, not luck.",
  "Small progress every day leads to big results.",
  "Discipline beats motivation.",
  "Your future depends on what you do today.",
   "Dream big, start small, act now.",
   "Push yourself because nobody else will do it for you.",
   "Learning never exhausts the mind.",
   "Every expert was once a beginner.", 
    "Focus on progress, not perfection.",
    "Hard work changes everything."
];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
   if (usedIndexes.size >= quotes.length) {
     usedIndexes.clear()
   }

   while(true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)

    if(usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
   }
}