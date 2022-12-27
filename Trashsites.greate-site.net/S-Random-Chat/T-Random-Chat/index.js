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
    const textnode = document.createTextNode("You >> " + textWritten);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("eingeben").value="";
    zurücksenden();
  }
}



function zurücksenden() {
  var msgLowercase = msgs[msgs.length - 1].toLowerCase();
  //Hi
  if (msgLowercase == "hi" || msgLowercase == "hey" || msgLowercase == "sub" || msgLowercase == "hello") {
    let rand = Math.floor(Math.random() * 4);
    if (rand == 0) {
      Sende("hi");
    }
    else if (rand == 1){
      Sende("hey");
    }
    else if (rand == 2){
      Sende("hello");
    }
    else {
      Sende("sup?")
    }
  }
  else if (msgLowercase.charAt(0) == "d" && msgLowercase.charAt(1) == "o") {
    let rand = Math.floor(Math.random() * 3)
    if (rand == 0) {
     Sende("I don't know")
    }
    else if (rand == 1) {
     Sende("Yes")
    }
    else{
     Sende("No")
    }
  }
  else if (msgLowercase.charAt(0) == "w" && msgLowercase.charAt(1) == "h" && msgLowercase.charAt(2) == "y") {
    Sende("because")
  }
  else if (msgLowercase.charAt(0) == "s" && msgLowercase.charAt(1) == "h" && msgLowercase.charAt(2) == "u" && msgLowercase.charAt(3) == "t") {
    Sende("No")
  }
  else if (msgLowercase.charAt(0) == "i" && msgLowercase.charAt(1) == "m") {
    Sende("Who asked?")
  }
  else if (msgLowercase.charAt(0) == "i" && msgLowercase.charAt(1) == "'") {
    Sende("Who asked??")
  }
  else {
    rand = Math.floor(Math.random() * 100)
    if (rand == 0) {
      Sende("I'm a girl")
    }
    else if (rand == 1) {
      Sende("I'm a boy")
    }
    else if (rand == 2) {
      Sende("No")
    }
    else if (rand == 3) {
      Sende("Yes")
    }
    else if (rand == 4) {
      Sende("wtf")
    }
    else if (rand == 5) {
      Sende("maybe")
    }
    else if (rand == 6) {
      Sende("You are dump")
    }
    else if (rand == 7) {
      Sende("Whats your favourite color?")
    }
    else if (rand == 8) {
      Sende("No worries mate")
    }
    else if (rand == 9) {
      Sende("Thats so rude")
    }
    else if (rand == 10) {
      Sende("how old are you?")
    }
    else if (rand == 11) {
      Sende("idk")
    }
    else if (rand == 12) {
      Sende("wait a sec")
    }
    else if (rand == 13) {
      Sende("FUCK YOU")
    }
    else if (rand == 14) {
      Sende("I hate you")
    }
    else if (rand == 15) {
      Sende("blue")
    }
    else if (rand == 16) {
      Sende("why?")
    }
    else if (rand == 17) {
      Sende("I'm 9")
    }
    else if (rand == 18) {
      Sende("I'm 23")
    }
    else if (rand == 19) {
      Sende("I can see you")
    }
    else if (rand == 20) {
      Sende("I'm a hacker.")
    }
    else if (rand == 21) {
      Sende("You are stupit")
    }
    else if (rand == 22) {
      Sende("I not spaek englisch")
    }
    else if (rand == 23) {
      Sende("where do you from?")
    }
    else if (rand == 24) {
      Sende("chill")
    }
    else if (rand == 25) {
      Sende("I dont want to answer this question...")
    }
    else if (rand == 26) {
      Sende("...")
    }
    else if (rand == 27) {
      Sende("?")
    }
    else if (rand == 28) {
      Sende("what??")
    }
    else if (rand == 29) {
      Sende("shut up")
    }
    else if (rand == 40) {
      Sende("I found a snake yesterday and I ate it lol")
    }
    else if (rand == 41) {
      Sende("lol")
    }
    else if (rand == 42) {
      Sende("lmao")
    }
    else if (rand == 43) {
      Sende("lmfao")
    }
    else if (rand == 44) {
      Sende("i'm homeless")
    }
    else if (rand == 45) {
      Sende("please speak english")
    }
    else if (rand == 46) {
      Sende("I can't take this seriously")
    }
    else if (rand == 47) {
      Sende("aAAAAAAAAAHhhhhhhhhh")
    }
    else if (rand == 48) {
      Sende("Im fried and whats wrong with that")
    }
    else if (rand == 49) {
      Sende("close your mouth")
    }
    else if (rand == 50) {
      Sende("oh thats cool")
    }
    else if (rand == 51) {
      Sende("awesome")
    }
    else if (rand == 52) {
      Sende("ok")
    }
    else if (rand == 53) {
      Sende("ok?")
    }
    else if (rand == 54) {
      Sende("okey")
    }
    else if (rand == 55) {
      Sende("that wepsite is funny!")
    }
    else if (rand == 56) {
      Sende("I'm a bot btw")
    }
    else if (rand == 57) {
      Sende("why ???????????")
    }
    else if (rand == 58) {
      Sende("please do not hack me")
    }
    else if (rand == 59) {
      Sende("This website is a virus")
    }
    else if (rand == 60) {
      Sende("oh")
    }
    else if (rand == 61) {
      Sende(":(")
    }
    else if (rand == 62) {
      Sende(":)")
    }
    else if (rand == 63) {
      Sende(":/")
    }
    else if (rand == 64) {
      Sende("ehhh")
    }
    else if (rand == 657) {
      Sende("I dont think so...")
    }
    else if (rand == 66) {
      Sende("really?")
    }
    else if (rand == 67) {
      Sende("Wow. I never seen such a dump human before...")
    }
    else if (rand == 68) {
      Sende("The world is flat")
    }
    else if (rand == 69) {
      Sende("please don't do that")
    }
    else if (rand == 70) {
      Sende("whoever reads this is stupid")
    }
    else if (rand == 71) {
      Sende("nahhh")
    }
    else if (rand == 728) {
      Sende("ewww")
    }
    else if (rand == 73) {
      Sende("stop")
    }
    else if (rand == 74) {
      Sende("why are you doing this?")
    }
    else if (rand == 75) {
      Sende("sus")
    }
    else if (rand == 76) {
      Sende("Oh cool")
    }
    else if (rand == 77) {
      Sende("oh wow")
    }
    else if (rand == 78) {
      Sende("I'm in school rn")
    }
    else if (rand == 79) {
      Sende("my Phonenumber: +49 23948273")
    }
    else if (rand == 80) {
      Sende(":O")
    }
    else if (rand == 81) {
      Sende(":o")
    }
    else if (rand == 82) {
      Sende("How?")
    }
    else if (rand == 83) {
      Sende("thats awesome dude!")
    }
    else if (rand == 84) {
      Sende("No I'm a girl")
    }
    else if (rand == 85) {
      Sende("No I'm a Boyyyy")
    }
    else if (rand == 86) {
      Sende("https://youareanidiot.cc")
    }
    else if (rand == 87) {
      Sende("http://trashsites.great-site.net")
    }
    else if (rand == 88) {
      Sende("I know you")
    }
    else if (rand == 89) {
      Sende("Are you Ralph??")
    }
    else if (rand == 90) {
      Sende("Are you Joe??")
    }
    else if (rand == 91) {
      Sende("Who are you")
    }
    else if (rand == 92) {
      Sende("Ohh, you are Marcus")
    }
    else if (rand == 93) {
      Sende("Fbi open up!")
    }
    else if (rand == 94) {
      Sende("oh really?")
    }
    else if (rand == 95) {
      Sende("You are chatting with a Machine btw")
    }
    else if (rand == 96) {
      Sende("DONT SPAM")
    }
    else if (rand == 97) {
      Sende("STOP SPAMMING")
    }
    else if (rand == 98) {
      Sende("Do you watching animes?")
    }
    else if (rand == 99) {
      Sende("I'm eglish btw")
    }
    else if (rand == 30) {
      Sende("I'm from Germania")
    }
    else if (rand == 31) {
      Sende("YEY")
    }
    else if (rand == 32) {
      Sende("gratulations!")
    }
    else if (rand == 33) {
      Sende("Hurray")
    }
    else if (rand == 34) {
      Sende("??")
    }
    else if (rand == 35) {
      Sende("Are you kidding?")
    }
    else if (rand == 36) {
      Sende("Free google play card : DGH1-DJFK-29DJ-DN32")
    }
    else if (rand == 37) {
      Sende("Hey calm down")
    }
    else if (rand == 38) {
      Sende("I cant read")
    }
    else if (rand == 39) {
      Sende("ahhahahahhahaha")
    }
  }
}

function Sende(sendOption) {
  const node = document.createElement("li");
  const textnode = document.createTextNode("she/he >> " + sendOption);
  node.appendChild(textnode);
  let rand = Math.floor(Math.random() * 2000 + 500);
  setTimeout(() => {  document.getElementById("myList").appendChild(node); }, rand);
  document.getElementById("eingeben").value="";
}
