
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
 var l=target.length;

  return str.substr(-l)===target;
}

confirmEnding("He has to give me a new name", "name")
