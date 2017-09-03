function destroyer(arr) {
  // Remove all the values
  var arg;
  var filteredArr = arr;
  for (var i = 0; i < arguments.length; i++) {
    arg = arguments[i];
    filteredArr = filteredArr.filter(function(num) {

      return num !== arg;
    });
  }
  return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
