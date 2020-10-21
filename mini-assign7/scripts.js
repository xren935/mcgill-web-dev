function myFunction() {
    var validFN = validateFirstName(); 
    var validLN = validateLastName(); 
    var validEmail = validateEmail(); 
    var validNo = validatePhone();
    var validBook = validateBook();
    var validOS = validateOS();
    if( validFN && validLN && validEmail && validNo && validBook && validOS){
        alert("Submitted!"); 
        return true;
    }else{
        alert("Please correct the errors on the page and submit again!");
        return false;
    }
} 

function validateFirstName(){
    var fname = document.getElementById("fname").value;
    console.log("print first name");
    console.log(fname);
    if(fname == null || fname == "" || fname == undefined || fname == " "){
        document.getElementById("fnerrormsg").innerHTML = "First Name is required. Please fill it out!";
        return false;
    }else{
        document.getElementById("fnerrormsg").innerHTML = "";
        return true;
    }
}

function validateLastName(){
    var lname = document.getElementById("lname").value;
    if(lname == null || lname == "" || lname == undefined ){
        document.getElementById("lnerrormsg").innerHTML = "Last Name is required. Please fill it out!";
        return false;
    }else{
        document.getElementById("lnerrormsg").innerHTML = "";
        return true;
    }
}

function validateEmail(){
    var email = document.getElementById("email").value;
    console.log("email: ");
    console.log(document.getElementById("email").value);
    if(email == null || email == "" || email == undefined ){
        document.getElementById("emailerrormsg").innerHTML = "Email is required. Please fill it out!";
        return false;
    }else{
        // validate the email
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            document.getElementById("emailerrormsg").innerHTML = "";
            return true;
        }else{
            document.getElementById("emailerrormsg").innerHTML = "The email you entered is invalid. Please try again!";
            return false;
        }
    }
}

function validatePhone(){
    var phone = document.getElementById("phone").value;
    if(phone == null || phone == "" || phone == undefined ){
        document.getElementById("phoneerrormsg").innerHTML = "Phone Number is required. Please fill it out!";
        return false;
    }else{
        // could have used regex to validate the number here (similar to the email address)
        document.getElementById("phoneerrormsg").innerHTML = "";
        return true;
    }
}

function validateBook(){
    var book = document.getElementById("booktype");
    if(book.selectedIndex == 0){
        document.getElementById("bookmsg").style.color = "OrangeRed";
        document.getElementById("bookmsg").innerHTML = "Please select a book!";
        return false;
    }else {
        document.getElementById("bookmsg").style.color = "green";
        document.getElementById("bookmsg").innerHTML = book.options[book.selectedIndex].text;
        return true;
    }
}

function validateOS(){
     if(document.getElementById("win").checked || document.getElementById("mac").checked || document.getElementById("lin").checked || document.getElementById("other").checked){
        document.getElementById("oserrormsg").innerHTML = ""
        return true;
     }else{
        document.getElementById("oserrormsg").innerHTML = "Please select an OS!"
        return false;
     }
}
