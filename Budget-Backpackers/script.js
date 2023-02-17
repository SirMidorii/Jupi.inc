
function fadeOut(person) {
  if (person==true) {
    document.getElementById('bildJ').style.backgroundColor = "#1c1c1c";
    document.getElementById('bildP').style.opacity = " 40%";
    document.getElementById('bild2').style.transform = "translateY(-1vw)";
    document.getElementById('textP').style.transform = "translateY(-1vw)";
    document.getElementById('textP2').style.transform = "translateY(-1vw)";
    document.getElementById('headerP').style.transform = "translateY(-1vw)";
  }
  else {
    document.getElementById('bildP').style.backgroundColor = "#1c1c1c";
    document.getElementById('bildJ').style.opacity = " 40%";
    document.getElementById('bild1').style.transform = "translateY(-1vw)";
    document.getElementById('textJ').style.transform = "translateY(-1vw)";
    document.getElementById('textJ2').style.transform = "translateY(-1vw)";
    document.getElementById('headerJ').style.transform = "translateY(-1vw)";
  }
}

function fadeIn(person) {
  if (person==true) {
    document.getElementById('bildJ').style.backgroundColor = "#343333";
    document.getElementById('textP').style.transform = "translateY(0vw)";
    document.getElementById('bild2').style.transform = "translateY(0vw)";
    document.getElementById('bildP').style.opacity = " 100%";
    document.getElementById('textP2').style.transform = "translateY(0vw)";
    document.getElementById('headerP').style.transform = "translateY(0vw)";
  }
  else {
    document.getElementById('bildP').style.backgroundColor = "#343333";
    document.getElementById('headerJ').style.transform = "translateY(0vw)";
    document.getElementById('textJ').style.transform = "translateY(0vw)";
    document.getElementById('bildJ').style.opacity = " 100%";
    document.getElementById('bild1').style.transform = "translateY(0vw)";
    document.getElementById('textJ2').style.transform = "translateY(0vw)";
  }
}
