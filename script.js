let imgElement = document.getElementById('srcImage')
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener("change", (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function() {
  let img = cv.imread(imgElement);
  cv.cvtColor(img, img, cv.COLOR_RGBA2GRAY);
  cv.imshow('outputCanvas', img);
  img.delete();
}

function opencvIsReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js (WebAssembly) is ready.'
}