function isPalindrome(word) {
// Iterate from the beginning to the middle
for (let i = 0 ; i < word.length / 2; i++){
// Check each letter to the corresponding letter from the end
  const j = word.length - 1 - i
  const startChar = word[i]
  const endChar = word[j]

  if(startChar !== endChar) return false
}
return true
}

/* 
  Add your pseudocode here
*/
// If the first letter is the same as the last letter, 
// and the second letter is thee same as the second to last letter, etc. 
// until we reach the middle, return true.

// Iterate from the beggining to the middle
// Check each letter to the corresponding letter from the end
// If any letters dont match, return false

/*
  Add written explanation of your solution here
*/
// make a fuction that returns true if a word is a palindrome.  If the first
// letter is the same as the last letter, and the second letter is te same as 
// the second to last letter, etc. until we reach the middle, return true.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
