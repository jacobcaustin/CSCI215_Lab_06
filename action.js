function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

function checkAge() {
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    
    if(regEx > 3) {
        document.getElementById("age").style.backgroundColor = "red";
       
    } else {
        document.getElementById("age").style.backgroundColor = "white";
       
    }
}


function checkName() {
    var regEx = new RegExp('([<]$');
    if(regEx = true) {
        document.getElementById("name").style.backgroundColor = "red";

    }else{
        document.getElementById("name").style.backgroundColor = "white";

    }


    
}

function validate() {
    
}


