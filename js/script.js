var data;
var xhr = new XMLHttpRequest();

xhr.open("get", "../Data.json", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // console.log(JSON.parse(xhr.responseText));
    data = JSON.parse(xhr.responseText);
    data.forEach((element) => {
      // console.log(element.);
    });
  }
};
xhr.send();

var toggleNav = document.getElementById("toggle-nav");
var menuOverlay = document.querySelector(".menu-overlay");
var menuClose = document.querySelector(".menu-close");

toggleNav.addEventListener("click", function () {
  menuOverlay.classList.add("show");
});

menuClose.addEventListener("click", function () {
  menuOverlay.classList.remove("show");
});

//copy from here
function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");
  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    // console.log(cookiePair);
    /* Removing whitespace at the beginning of the cookie name
      and compare it with the given string */
    if (name == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }
  // Return null if not found
  return null;
}
var IsLogIn = getCookie("userName");
if (IsLogIn) {
  var offerexisting;
  var offerCookie;
  offerCookie = document.cookie;
  offerexisting = offerCookie.includes("offer");
  console.log(offerexisting);
  if (offerexisting == false) {
    setTimeout(function () {
      window.open("wheel.html", "_blank", "width=600px,height=600px");
    }, 3000);
  }
  document.getElementById("welcomeMessge").innerText = `Welcome ${getCookie(
    "userName"
  )} `;
}

// show welcome massege
// // var usrname = getCookie("userName");
// function showWelcomeFunction() {
//   if (getCookies("userName") == null) {
//     document.getElementById("welcomeMessge").innerText = `Welcome`;
//   } else {
//   }
// }
