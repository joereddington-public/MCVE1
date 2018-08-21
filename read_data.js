
manifest=""


function load_manifest(filename){
	//go and get a manifest. We're starting with the one in the root of the template for now.
	  var req = new XMLHttpRequest();
          console.log("a"); 
	  req.open("GET", filename);
	  req.send(null);
    req.onreadystatechange = function() {
        
        if (req.readyState == 4 && req.status == 200) {
           console.log("hello"); 
           console.log(req.responseText); 
           manifest= JSON.parse(req.responseText);
        } else {
            console.log("Problem reading file");
        }
    };
          console.log("b"); 

}





