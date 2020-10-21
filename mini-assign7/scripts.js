function validateName() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}

function clicked() {
    alert("clicked!");
}

function myFunction() {
    alert('clicked');
    var inpObj = document.getElementById("fname").innerHTML;
    validateFirstName(); 
    validateLastName(); 
    validateEmail();
    validatePhone();
    return false;
    // var fname = document.getElementById("fname").innerHTML; 
    // if(fname == null || fname == "" || fname == undefined ){
    //     document.getElementById("fnerrormsg").innerHTML = "fill it out";
    //     document.getElementById("lnerrormsg").innerHTML = "fill it out";
    // }
} 

function validateFirstName(){
    var fname = document.getElementById("fname").value;
    console.log("print first name");
    console.log(fname);
    if(fname == null || fname == "" || fname == undefined || fname == " "){
        document.getElementById("fnerrormsg").innerHTML = "First Name is required. Please fill it out!";
        // document.getElementById("lnerrormsg").innerHTML = "fill it out";
    }else{
        document.getElementById("fnerrormsg").innerHTML = "";
    }
    return false;
}

function validateLastName(){
    var lname = document.getElementById("lname").value;
    console.log("print last name");
    console.log(lname);
    if(lname == null || lname == "" || lname == undefined ){
        document.getElementById("lnerrormsg").innerHTML = "Last Name is required. Please fill it out!";
        // document.getElementById("lnerrormsg").innerHTML = "fill it out";
    }else{
        document.getElementById("lnerrormsg").innerHTML = "";
    }
    return false;
}

function validateEmail(){
    var email = document.getElementById("email").value;
    console.log("email: ");
    console.log(document.getElementById("email").value);
    if(email == null || email == "" || email == undefined ){
        document.getElementById("emailerrormsg").innerHTML = "Email is required. Please fill it out!";
    }else{
        // validate the email
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            document.getElementById("emailerrormsg").innerHTML = "";
        }else{
            document.getElementById("emailerrormsg").innerHTML = "The email you entered is invalid. Please try again!";
        }
    }
}

function validatePhone(){
    var phone = document.getElementById("phone").innerHTML;
    if(phone == null || phone == "" || phone == undefined ){
        document.getElementById("phoneerrormsg").innerHTML = "fill phone number out";
        // document.getElementById("lnerrormsg").innerHTML = "fill it out";
    }else{
        document.getElementById("phoneerrormsg").innerHTML = "";
    }
}
