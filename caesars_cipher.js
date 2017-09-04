function rot13(str) { // LBH QVQ VG!
  var num = 0;
  var  abc = 0;
  var s = 0;
  var newStr = '';

  for (var i = 0; i < str.length; i++) {
    s = str.charCodeAt(i);
    abc = s - 13 >= 65;

    if (abc)
      num = s - 13;
    else
      num = s + 13;

    if (s >= 65 && s <= 91)
      newChar = String.fromCharCode(num);
    else
      newChar = String.fromCharCode(s);

    newStr = newStr + newChar;

  }

  return newStr;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
