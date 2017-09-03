function bouncer(arr) {
  // Don't show a false ID to this bouncer.
    var noFalsyValues = arr.filter(function(word){
		var f=new Boolean(word);
		console.log(f);
      return f==true;
    });

  return noFalsyValues;
}

bouncer([7, "ate", "", false, 9]);
