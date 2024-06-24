var hiddenimage = null;
var image = null;
var n = null;

function uploadHidden() {
  var canvas = document.getElementById("can");
  var hidden = document.getElementById("fhidden");
  hiddenimage = new SimpleImage(hidden);
  hiddenimage.drawTo(canvas);
}

function uploadImage() {
  var canvas = document.getElementById("cancan");
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  image.drawTo(canvas);
}

function makeGray() {
  for(var pixel of gimage.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas = document.getElementById("can");
  gimage.drawTo(imgcanvas);
}

function resetImage() {
  var canvas = document.getElementById("can");
  var canvas2 = document.getElementById("cancan");
  var ctx = canvas.getContext("2d");
  var ctx2 = canvas2.getContext("2d");
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
}