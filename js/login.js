document.getElementById("email").onblur = onblurValidateEmail;
document.getElementById("email").onkeydown = onblurValidateEmail;
function onblurValidateEmail() {
  try {
    validateEmail(this.value);
    this.classList.remove("is-invalid");
  } catch (e) {
    var errorDiv = this.nextElementSibling;
    errorDiv.innerHTML = e.message;
    this.classList.add("is-invalid");
  }
}
document.getElementById("password").onblur = onblurValidatePassword;
document.getElementById("password").onkeydown = onblurValidatePassword;
function onblurValidatePassword() {
  try {
    validatePassword(this.value);
    this.classList.remove("is-invalid");
    document.getElementById("svgEye").style.display = "flex";
  } catch (e) {
    var errorDiv = this.nextElementSibling;
    errorDiv.innerHTML = e.message;
    this.classList.add("is-invalid");
    document.getElementById("svgEye").style.display = "none";
  }
}
function showPassword() {
  document.getElementById("password").setAttribute("type", "text");
}
function hidePassword() {
  document.getElementById("password").setAttribute("type", "password");
}
document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  try {
    validateEmail(document.getElementById("email").value);
    validatePassword(document.getElementById("password").value);
    var xhr = new XMLHttpRequest();
    xhr.open("get","../data/Users.json",true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            for(user of JSON.parse(xhr.responseText)){
                if(user.email == document.getElementById("email").value && user.password == document.getElementById("password").value){
                  var date = new Date();
                  date.setDate(date.getDate() + 1);
                  document.cookie = `userName=${user.username};expires=${date}`;
                  document.cookie = `email=${user.email};expires=${date}`;
                  document.forms[0].submit();
                }
            }
        }
    }
    xhr.send();
  } catch (e) {
    alert(e.message);
  }
};

if(document.cookie){
  var allCookie = document.cookie;
  var userNameRegex = /(userName)/i;
  var userNameCheck = userNameRegex.test(allCookie)
  // console.log(userNameCheck);
    if(userNameCheck){
    location.replace("./index.html")
    }
}
