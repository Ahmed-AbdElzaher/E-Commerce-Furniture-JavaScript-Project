function validateName(fullName) {
    var regex = /^[a-z\s]{3,}$/i;
    var result = regex.test(fullName)
    if(result) {
        return result;
    }else {
        throw new Error("Full Name must be at least 3 letters");
    }

}

function validateEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    var result = regex.test(email)
    if(result) {
        return result;
    }else {
        throw new Error("Email should be ***@***.***");
    }
}

function validatePassword(password) {
    var regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i;
    var result = regex.test(password)
    if(result) {
        return result;
    }else {
        throw new Error("password should contain numbers & letters");
    }
}

function validatePhone(phone) {
    var regex = /^(01)(0|1|2|5)[0-9]{7,8}$/i;
    var result = regex.test(phone)
    if(result) {
        return result;
    }else {
        throw new Error("invalid phone number");
    }
}


