var msgs = ["hi", "74"]
function auslesen() {
  var textWritten = document.getElementById("eingeben").value;
  if (textWritten == "" || textWritten.charAt(0) == " " ) {
    document.getElementById('eingeben').style.animationName="falscheEingabe";
    setTimeout(() => {  document.getElementById('eingeben').style.animationName="none"; },500);
  }
  else {
    msgs.push(textWritten)
    const node = document.createElement("li");
    const textnode = document.createTextNode(textWritten);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("eingeben").value="";
    zurücksenden();
  }
}

function zurücksenden() {
  if (msgs[msgs.length - 1] == "hi") {
    const node = document.createElement("li");
    const textnode = document.createTextNode("Huhu");
    node.appendChild(textnode);
    setTimeout(() => {  document.getElementById("myList").appendChild(node); },500);
    document.getElementById("eingeben").value="";
  }
}
