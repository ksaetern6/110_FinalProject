document.cookie = doucment.body.style.backgroundImage;
function brightness(){
  document.body.style.backgroundImage = "url(night.jpeg)";
  //var elem = document.getElementById("bg");
  //var opac = document.getElementById('myRange').value;
  //elem.style.opacity = opac;
}
function viewmode(){
  var bg = document.body.style.backgroundImage;
  
  if(bg == "url(\"night.jpeg\")"){
    document.body.style.backgroundImage = "url(homepage.jpg)"
    document.cookie = document.body.style.backgroundImage;
  }
  else{
    document.body.style.backgroundImage = "url(night.jpeg)";
    document.cookie = document.body.style.backgroundImage;
  }
}
function bgfunc(){
  var x = document.cookie;
  document.body.style.backgroundImage = x;
}
