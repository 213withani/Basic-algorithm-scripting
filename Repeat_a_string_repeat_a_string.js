function repeatStringNumTimes(str, num) {
  // repeat after me
  var copy="";
  for (i=0; i<num; i++){
    copy+=str;
  }
  return copy;
}

repeatStringNumTimes("*", 3);
