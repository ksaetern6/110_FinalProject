document.cookie;
//global cookie used to keep track of the background.

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
    //changes backgroundImage
    document.cookie = document.body.style.backgroundImage;
    //stores new background in cookie.
  }//if night mode
  else{
    document.body.style.backgroundImage = "url(night.jpeg)";
    //changes backgroundImage
    document.cookie = document.body.style.backgroundImage;
  }//else its homepage

}
function bgfunc(){
  //document.cookie = document.body.style.backgroundImage;
  var bgLen = document.cookie.length;
  if(bgLen!=0){
    if(document.cookie =="url(\"night.jpeg\")"){
      document.body.style.backgroundImage = "url(night.jpeg)";
    }//if night mode
    else{
      document.body.style.backgroundImage = "url(homepage.jpg)"
    }//else its light mode.
  }//if background is changed
  else{
    return;
  }
}//bfunc()
function move(){
  var elem = document.getElementById("myBar");
  var elem2= document.getElementById("myBar2");
  var elem3= document.getElementById("myBar3");
  var width = 10;
  var id = setInterval(frame,10);
  function frame(){
    if(width>=80){
      clearInterval(id);
    }
    else{
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
      if(width<61){
      elem2.style.width = width + '%';
      elem2.innerHTML = width * 1 + '%';
    }//Java
      if(width<31){
      elem3.style.width = width + '%';
      elem3.innerHTML = width * 1 + '%';
    }//SQL
    }
  }

}
