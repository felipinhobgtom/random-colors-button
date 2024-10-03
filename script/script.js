let cont = 0;

function changeColors() {
  let color = ["red", "blue ", "orange", "yellow", "green", "purple"];

  document.getElementsByTagName("body")[0].style.background = color[cont++];

  if(cont > color.length - 1){
    cont = 0
  }
}
