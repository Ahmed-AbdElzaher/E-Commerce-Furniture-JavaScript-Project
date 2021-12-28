function logout() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
  
    document.cookie = "userName=;expires=" + date.toUTCString();
    document.cookie = "email=;expires=" + date.toUTCString();
    location.replace("./Registration.html");
  }
  