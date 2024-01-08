function reverseString(str) {
  // Converting string to array
  let letterArray= str.split('');
  // Reversing the array
  let reversedArray= letterArray.reverse();
  // Converting back to string
  let reversedString= reversedArray.join('');
  // Returning the reversed string
  return reversedString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
