
function mutation(arr) {
  var firstArray=arr[0].toLowerCase();
  var secondArray=arr[1].toLowerCase();
  var splittedArray=secondArray.split("");
  var found=0;

  //console.log(splittedArray);
  for(var i=0; i<splittedArray.length;i++){
	  //console.log(splittedArray[i].charAt(0));
      if(firstArray.indexOf(splittedArray[i].charAt(0))>=0){
		found++;
	}
  }

   if (found == arr[1].length){
		return true;
	}else {return false;}
}

mutation(["Hello", "hey"]);
