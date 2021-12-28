document.getElementById("fullName").onblur = onblurValidateName;
document.getElementById("fullName").onkeydown = onblurValidateName;
function onblurValidateName() {
  try {
    validateName(this.value);
    this.classList.remove("is-invalid");
  } catch (e) {
    var errorDiv = this.nextElementSibling;
    errorDiv.innerHTML = e.message;
    this.classList.add("is-invalid");
  }
}
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
document.getElementById("phone").onblur = onblurValidatePhone;
document.getElementById("phone").onkeydown = onblurValidatePhone;
function onblurValidatePhone() {
  try {
    validatePhone(this.value);
    this.classList.remove("is-invalid");
  } catch (e) {
    var errorDiv = this.nextElementSibling;
    errorDiv.innerHTML = e.message;
    this.classList.add("is-invalid");
  }
}
document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  try {
    validateName(document.getElementById("fullName").value);
    validateEmail(document.getElementById("email").value);
    validatePassword(document.getElementById("password").value);
    validatePhone(document.getElementById("phone").value);
    this.submit();
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
