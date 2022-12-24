var count = 0;
var age = 40;

function pressbutton() {
  count++;
  age -= 6;
  var random = Math.floor(Math.random()*1750);
  var random2 = Math.floor(Math.random()*850);
  document.getElementById("honix").style.marginLeft = random + "px";
  document.getElementById("honix").style.marginTop = random2 + "px";
  document.getElementById("age").innerHTML = "Your Brain Age: " + age + " Years";
}

function onHover() {
  if (count >= 5) {
    pressbutton();
    age *= 3;
    document.getElementById("age").style.fontSize = age+"px";
  }
}
