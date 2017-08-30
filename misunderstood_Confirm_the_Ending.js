
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
 console.log(str.charAt(str.length-1));

  return str.charAt(str.length-1)===target;
}

confirmEnding("Bastian", "x");
