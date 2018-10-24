
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