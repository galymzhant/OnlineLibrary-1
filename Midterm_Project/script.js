document.addEventListener("DOMContentLoaded", function(event) {
  
    var e = document.getElementById("go");
    
    e.addEventListener( "click", function() {
  
      var name=prompt("Please  enter your name?","");
      if ( name!=null && name!="" ) {
        output = "Well " + name + ". You seem very daring!";
        }
      else {
        output = "Hey, I asked you your name!";
        }
      
      document.getElementById( "msg" ).innerText = output;
  
    }, false);
    
  });