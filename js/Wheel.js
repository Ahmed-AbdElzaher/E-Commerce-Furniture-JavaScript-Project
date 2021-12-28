// global variables

var result;
var offerResult;

function rotate() {
  //rotating degree of the wheel
  var degree =
    Math.ceil(Math.random() * 8) * 360 +
    (360 * Math.ceil(Math.random() * 8)) / 8;

  document.getElementById("sa").style.transform = "rotate(" + degree + "deg)";
  document.getElementById("sa").style.transition = "5s ";

  //for disable once
  const button = document.querySelector("button");
  button.disabled = true;

  if (degree <= 360) {
    result = degree;
    console.log(result);
  } else {
    while (degree > 360) {
      degree -= 360;
    }
    result = degree;
    console.log(result);
  }
  offers();
  //store the offer into cookie
  var date = new Date();
  date.getDay();
  date.setDate(date.getDay() + 1);
  console.log(date);
  document.cookie = "offer=" + offerResult + ";expires=" + date;

  console.log(document.cookie);
  //congratulation message
  setTimeout(function () {
    document.getElementById("con").innerText =
      "Congratulations! you get " + offerResult + " EP Off";
  }, 5000);
  //closing the window after 8sec
  setTimeout(function () {
    window.close();
  }, 8000);
}

//pair of degree and offer value
function offers() {
  switch (result) {
    case 360:
      offerResult = 100;
      break;
    case 45:
      offerResult = 250;
      break;
    case 90:
      offerResult = 200;
      break;
    case 135:
      offerResult = 300;
      break;
    case 180:
      offerResult = 50;
      break;
    case 225:
      offerResult = 350;
      break;
    case 270:
      offerResult = 150;
      break;
    case 315:
      offerResult = 400;
      break;
    default:
      console.log("better luck next time!");
  }
}



