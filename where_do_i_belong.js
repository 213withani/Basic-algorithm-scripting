function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var sortedArray = arr.sort(function compareNumbers(a, b) {
    return a - b;
  });

  console.log(sortedArray);

  for (var i = 0; i < sortedArray.length; i++) {

    if (sortedArray[i] >= num) {
      return i;
    }
  }
  
  return sortedArray.length;
}

getIndexToIns([20, 3, 5], 19);
