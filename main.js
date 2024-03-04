var G=4;
var F=5;
var E=6;
var A=1;
var C=2;
var D=3;

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams != null) {
  G=urlParams.get('G');
  F=urlParams.get('F');
  E=urlParams.get('E');
  A=urlParams.get('A');
  C=urlParams.get('C');
  D=urlParams.get('D');
}

window.onload = function(){
  document.getElementById("G").innerHTML = G + "<br>(G)";
  document.getElementById("F").innerHTML = F + "<br>(F&#35;)";
  document.getElementById("E").innerHTML = E + "<br>(E)";
  document.getElementById("A").innerHTML = A + "<br>(A)";
  document.getElementById("C").innerHTML = C + "<br>(C)";
  document.getElementById("D").innerHTML = D + "<br>(D)";
};

window.addEventListener("keypress", function(event) {
  switch(event.key) {
    case A:
      document.getElementById("A").click();
      break;
    case C:
      document.getElementById("C").click();
      break;
    case D:
      document.getElementById("D").click();
      break;
    case G:
      document.getElementById("G").click();
      break;
    case F:
      document.getElementById("F").click();
      break;
    case E:
      document.getElementById("E").click();
      break;
    case "r":
      event.preventDefault();
      location.reload();
  }
});
