function allCookies(){
    var pairs = document.cookie.split(";");
    var cookieArray = {};
    for(i of pairs) {
        var keyValue = i.split("=");
        cookieArray[keyValue[0]] = keyValue[1]
    }
    // console.log(cookieArray)
    return cookieArray;
}


function getCookies(cookieName){
    var cookies = allCookies();
    return cookies[cookieName]
}

showWelcomeFunction()
function showWelcomeFunction() {
    if(getCookies("userName") == null){
      // document.getElementById("welcomeMessge").innerText = `Welcome`;
    }else{
      document.getElementById("welcomeMessge").innerText = `Welcome ${getCookies("userName")} `;
    }
}
