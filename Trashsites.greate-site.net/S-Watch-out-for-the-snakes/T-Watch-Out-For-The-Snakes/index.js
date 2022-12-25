function gameStart() {
  document.getElementById("wrapper").style.animationName = "exitAnim";
  document.getElementById("bg").style.animationName = "blurFade";
  setTimeout(function(){
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("bg").style.display = "none";
    document.getElementById("game").style.display = "inline";
    //update();
  },500);

}

var yPos = 0;

function update() {
  setTimeout(function(){
    yPos += 50;
    update();
  },500);

  //document.getElementById("item").style.transform = "translateX(" + yPos + "px)";

}
