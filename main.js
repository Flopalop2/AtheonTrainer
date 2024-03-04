window.addEventListener("keypress", function(event) {
  switch(event.key) {
    case "1":
      document.getElementById("btn1").click();
      break;
    case "2":
      document.getElementById("btn2").click();
      break;
    case "3":
      document.getElementById("btn3").click();
      break;
    case "4":
      document.getElementById("btn4").click();
      break;
    case "5":
      document.getElementById("btn5").click();
      break;
    case "6":
      document.getElementById("btn6").click();
      break;
    case "r":
      event.preventDefault();
      location.reload();
  }
});
