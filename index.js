function brightness(){
  document.body.style.backgroundImage = "url(night.jpeg)";
  //var elem = document.getElementById("bg");
  //var opac = document.getElementById('myRange').value;
  //elem.style.opacity = opac;
}
function viewmode(){
  var bg = document.body.style.backgroundImage
  if(bg == "url(\"night.jpeg\")"){
    document.body.style.backgroundImage = "url(homepage.jpg)"
  }
  else{
    document.body.style.backgroundImage = "url(night.jpeg)";
  }

}
