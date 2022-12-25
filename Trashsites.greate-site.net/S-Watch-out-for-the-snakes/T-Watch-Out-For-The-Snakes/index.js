function gameStart() {
  document.getElementById("wrapper").style.animationName = "exitAnim";
  document.getElementById("bg").style.animationName = "blurFade";
  setTimeout(function(){
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("bg").style.display = "none";
    document.getElementById("game").style.display = "inline";
    document.getElementById("row1-1").style.backgroundColor = "blue";
    document.getElementById("row1-1").style.backgroundImage = url();


    update();
  },500);

}

function update() {
  setTimeout(function(){

    update();
  },500);

  //document.getElementById("item").style.transform = "translateX(" + yPos + "px)";
}

//document.addEventListener('keydown', function(event) {
//  if (event.defaultPrevented) {
//  return; // Do nothing if the event was already processed
//}

// (event.key) {
//  case "ArrowDown":
//    document.getElementById().style.transform = rotateX(90);
//    break;
//  case "ArrowUp":
//    // code for "up arrow" key press.
//    break;
//  case "ArrowLeft":
//    // code for "left arrow" key press.
//    break;
//  case "ArrowRight":
//    // code for "right arrow" key press.
//    break;
//  default:
//    return; // Quit when this doesn't handle the key event.
//  }
//}
