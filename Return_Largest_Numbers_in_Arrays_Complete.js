
function largestOfFour(arr) {
	var l=0;
	var newArr=[];
  // You can do this!
  for(i=0;i<arr.length;i++){
	l=0;
	for(j=0;j<4;j++){
	 if (arr[i][j]>l){
		l=arr[i][j];
	 }
    }
	newArr.push(l);

  }
console.log(newArr);
  return arr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
