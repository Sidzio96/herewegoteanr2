// Helper function to count occurrences of each character in a string
function countCharacters(str) {
    const charCount = {};
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  }
  
  // Main code to use the helper function
  const testString = "hello world"; // You can change the test string
  const characterCounts = countCharacters(testString);
  console.log("Character Counts:");
  for (let char in characterCounts) {
    console.log(`${char}: ${characterCounts[char]}`);
  }
  