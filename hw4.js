/*
Name: Yulia Gorenshteyn
Date created: September 14, 2024
Date last edited: November 30, 2024
Version: 4.0
Description: Homework 4 JS Patient Form
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range")
    let output = document.getElementById("range-slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

//first name validation
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //chackes if first name field is empty
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field can't be empty";
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) { //checks if first name matches pattern
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only";
        return false;
    } else if (fname.length < 2) { //checks if first name is at least 1 character
        document.getElementById("fname-error").innerHTML = "First name can't be less than 2 characters";
        return false;
    } else if (fname.length > 30) { //checks if first name is more than 30 characters
        document.getElementById("fname-error").innerHTML = "First name can't be more than 30 characters";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//last name validation
function validateLname(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //chackes if last name field is empty
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field can't be empty";
        return false;
    } else if (lname != "") {
        if (!lname.match(namePattern)) { //checks if last name matches pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only";
        return false;
    } else if (lname.length < 2) { //checks if last name is at least 1 character
        document.getElementById("lname-error").innerHTML = "Last name can't be less than 2 characters";
        return false;
    } else if (lname.length > 30) { //checks if last name is more than 30 characters
        document.getElementById("lname-error").innerHTML = "Last name can't be more than 30 characters";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}

//middle initial validation
function validateMini(){
    let mini = document.getElementById("mini").value;
    const namePattern = /^[A-Z]+$/;

    //makes middle initial uppercase
    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    //checks that middle initial is 1 character
    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

// dob validation
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value="";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML ="";
        return true
    }
}
// ssn validation
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    // regex for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// address validation
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Please enter address";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

//city validation
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// zip code validation 
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); // removes non-numbers and non-dashes

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank"
        return false;
    }

    // Format as ZIP+4 if length is greater than 5
    if (zip.length > 5) {
        zip = zip.slice(0,5) + "-" + zip.slice(5,9); 
    } else {
        zip = zip.slice(0,5)
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

// email validation
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex pattern for email

    if (email =="") {
        document.getElementById("email-error").innerHTML = 
        "Email can't be blank"
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address"
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// phone number validation

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes non-numbers

    if (phone.length == 0) {
        document.getElementById("phone-error").innerHTML = 
        "Phone number can't be blank";
        return false;
    }

    const formattedPhone = 
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

//user id validation
function validateUid() {
    uid = document.getElementById("uid").value;

    //convert user id to lowercase
    uid = uid.toLowerCase();

    //display user id in lowercase
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    //check that user id does not start with a number
    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    //check that user id has only letters, number, and underscores
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes. No spaces";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) { // check that user id does not have more than 30 characters
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else { //if all checks above pass then user id is valid
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}
function showAlert() {
    alert("Please fill out the form correctly.");
}

// password validation
function validatePword() {
    const pword = document.getElementById("pword").value;
    const uid = document.getElementById("uid").value;

    //set up and initializes array
    const errorMessage = [];

    //check for lowercase letters
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }

    //check for uppercase letters
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }

    //check for numbers
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }

    //check for special characters
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }

    //check for user ID not in password
    if (pword == uid || pword.includes(uid)) {
        errorMessage.push("Password can't contain user ID");
    }

    //display erroe messages if there are errors
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");
}

// confirm password validation
function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

// re-display user input back to user
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";   
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked){
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "select":
                        formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            
            }       
        }       
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//alert box
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    }
 }

 //validate all info
 function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }

 //cookie for remembering info input
function setCookie (name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays*24*60*60*1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie (name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        while (cookie.charAt (0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id:"fname", cookieName: "firstName"},
    {id:"mini", cookieName: "middleInitial"},
    {id:"lname", cookieName: "lastName"},
    {id:"dob", cookieName: "dob"},
    {id:"ssn", cookieName: "ssn"},
    {id:"address1", cookieName: "address1"},
    {id:"city", cookieName: "city"},
    {id:"zcode", cookieName: "zipCode"},
    {id:"email", cookieName: "email"},
    {id:"phone", cookieName: "phone"},
    {id:"uid", cookieName: "userId"}, 
]

inputs.forEach(function(input) {
    var inputElement = document.getElementById(input.id);

    //prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !=="") {
        inputElement.value = cookieValue;
    }

    //set a cookie when the input fields changes
    inputElement.addEventListener("input", function() {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

//greet the user with their name if the cookie is set
var firstName = getCookie("firstName");
if (firstName !== " ") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML = 
    "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function(input) {
            setCookie(input.cookieName, "", -1);
        })
        location.reload();
    })
}

