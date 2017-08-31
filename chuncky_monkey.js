
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result=[];
var cp=arr;
  for(var i=0;i<arr.length;i++){
	result.push(cp.substr(0,size));
    cp=cp.slice(size);
console.log(cp);

  }
  //return result;
}

chunkArrayInGroups(["a", "b", "c", "d","aa", "bb", "cc", "dd"], 2);
