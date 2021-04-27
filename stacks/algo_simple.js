var letters = [];
var word = "pafdmp";
var reverse_word = "";

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
  reverse_word += letters.pop();
}

if (reverse_word === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}
