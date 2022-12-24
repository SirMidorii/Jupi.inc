var count = 0;
var age = 61;

function pressbutton() {
  count++;
  age -= 6;
  var random = Math.floor(Math.random()*1750);
  var random2 = Math.floor(Math.random()*600);
  document.getElementById("hoverDiv").style.marginLeft = random + "px";
  document.getElementById("hoverDiv").style.marginTop = random2 + "px";
  document.getElementById("age").innerHTML = age + " Years";
}

function onHover() {
  if (count >= 5) {
    
    pressbutton();
    if (count > 6) {
      document.body.style.animationName = "bgAnim";
      document.body.style.animationDuration = 5/count + "s";
      document.getElementById("age").style.animationDuration = 5/count+"s";
    }
    age *= 3;
  }
}
