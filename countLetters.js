// 1. function count Letters **
// 2. create an empty object **
// 3. remove spaces and to lower case **
// 4. iterate through string input **
// 5. identify all different letters
// 6. count the amount of times a letter is present
// 7. identify the keys of the object as letters and the amount of times
// it is present as value
function countLetters(string) {
  var finalObject = {};
  var noSpaces = string.replace(/\ /g, '').toLowerCase();
  for(var i = 0; i < noSpaces.length; i++) {
    var letter = noSpaces[i];
    if(!finalObject[letter]) {
      finalObject[letter] = 1;
    } else {
      finalObject[letter] += 1;
    }
  }
  console.log(finalObject);
  // console.log(letterArr);
  console.log(noSpaces);
}


countLetters("lighthouse in the house");