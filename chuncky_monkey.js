function chunkArrayInGroups(arr, size) {
  // Break it up.
  var cp = arr;
  var newArr=[];
  var s=size,max=arr.length/size;

	newArr.push(cp.slice(0,size));
    for(var i=0; i< max-1;i++){
        newArr.push(cp.slice(s,s+size));
		s+=size;
    }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
