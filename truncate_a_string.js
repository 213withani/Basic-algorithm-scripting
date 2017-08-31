function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length===num || str.length<num)
    return str;
    //runcate a string (first argument) if it is longer than the given
    //maximum string length (second argument).
    //Return the truncated string with a ... ending.
  if (str.length >num && str.length>3 && num >=3)
    return str.substr(0,num-3).concat("...");

  if (str.length<=3 || num <=3)
    return str.substr(0,num).concat("...");

}

truncateString("Absolutely Longer", 2);
