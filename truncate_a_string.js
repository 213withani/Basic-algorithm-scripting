function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length===num || str.length<num)
    return str;

  if (str.length >num && str.length>3 && num >=3)
    return str.substr(0,num-3).concat("...");

  if (str.length<=3 || num <=3)
    return str.substr(0,num).concat("...");

}

truncateString("Absolutely Longer", 2);
