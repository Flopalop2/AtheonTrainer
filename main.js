window.addEventListener("keypress", function(event) {
  switch(event.key) {
    case "1":
      event.preventDefault();
      document.getElementById("btn1").click();
      break;
    case "2":
      event.preventDefault();
      document.getElementById("btn2").click();
      break;
    case "3":
      event.preventDefault();
      document.getElementById("btn3").click();
      break;
    case "4":
      event.preventDefault();
      document.getElementById("btn4").click();
      break;
    case "5":
      event.preventDefault();
      document.getElementById("btn5").click();
      break;
    case "6":
      event.preventDefault();
      document.getElementById("btn6").click();
      break;
    case "r":
      event.preventDefault();
      location.reload();
  }
});
