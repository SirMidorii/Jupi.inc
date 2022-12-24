var isverfügbar = false

function mapNotWorking() {
  alert('Die Map ist zurzeit nicht verfügbar');
}

function tryMapVerfuegbar() {
  if (isverfügbar == false) {
    mapNotWorking();
  }
  else {
    location.href='index2/index2.html'
  }
}
