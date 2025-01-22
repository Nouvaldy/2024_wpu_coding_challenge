const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

// Ranks of cards in lexicographical order
const suits = ["C", "D", "H", "S"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
const deckTemplate = ranks.flatMap(rank => suits.map(suit => rank + suit));

console.log(deckTemplate);

// Converts a message to a numeric value in base 27
const messageToNumber = (message) => {
  return [...message.toUpperCase()].reduce((total, char) => {
    const value = char === " " ? 0 : char.charCodeAt(0) - 64;
    return total * 27 + value;
  }, 0);
};

console.log('A'.charCodeAt(0)-64);
console.log(messageToNumber('SIAPKAN SEMUA PASUKAN UNTUK SERANGAN'))

// Converts a number to a base-27 string
const numberToMessage = (number) => {
  let message = "";
  while (number > 0) {
    const value = number % 27;
    message = (value === 0 ? " " : String.fromCharCode(value + 64)) + message;
    number = Math.floor(number / 27);
  }
  return message;
};

// Converts a number to a permutation of a deck
const numberToPermutation = (number, items) => {
  const result = [];
  const available = [...items];
  for (let i = items.length - 1; i >= 0; i--) {
    const fact = factorial(i);
    const index = Math.floor(number / fact);
    result.push(available.splice(index, 1)[0]);
    number %= fact;
  }
  return result;
};

// Converts a permutation of a deck to a number
const permutationToNumber = (permutation, items) => {
  const available = [...items];
  return permutation.reduce((total, card) => {
    const index = available.indexOf(card);
    available.splice(index, 1);
    return total * available.length + index;
  }, 0);
};

// Encode a message into a deck of cards
  

// Decode a deck of cards into a message
const decode = (deck) => {
  const number = permutationToNumber(deck, deckTemplate);
  return numberToMessage(number);
};

// Example usage:
const encodedDeck = encode("ATTACK TONIGHT ON CODEWARS");
console.log("Encoded Deck:", encodedDeck);

const decodedMessage = decode([
    "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC",
    "AD", "2D", "3D", "4D", "5D", "6D", "JD", "9D", "7S", "9S", "QD", "5S", "TH",
    "7D", "TS", "QS", "2H", "JS", "6H", "3S", "6S", "TD", "8S", "2S", "8H", "7H",
    "4S", "4H", "3H", "5H", "AS", "KH", "QH", "9H", "KD", "KS", "JH", "8D", "AH"
]);
console.log("Decoded Message:", decodedMessage);
