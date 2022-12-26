function changelever() {
  document.getElementById('gitimg').style.animationName="bugAnimation";
  document.getElementById('bganima').style.animationName="backgroundAnimation"
  document.getElementById('textFoundBugs').style.animationName="textAnimation";

  setTimeout(function() {
    document.getElementById('gitimg').style.transform="translateX(180px)";
    document.getElementById('bganima').style.backgroundColor="#4248ff";
    document.getElementById('textFoundBugs').style.transform="translateX(-40px)"
    document.getElementById('textFoundBugs').style.marginTop="9%"
  },400);
}
