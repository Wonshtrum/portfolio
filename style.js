function resize() {
  console.log("here");
  if (autoCloseDetect.offsetLeft+autoCloseDetect.offsetWidth > document.body.offsetWidth) {
    document.body.classList.add('close');
  } else {
    document.body.classList.remove('close');
    if (autoCloseDetect.offsetLeft+autoCloseDetect.offsetWidth > document.body.offsetWidth) {
      document.body.classList.add('close');
    }
  }
}

window.onresize = resize;
window.onload = resize;
