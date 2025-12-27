console.log("Script loaded");

//select your errormessage elements
let firstNameError = document.getElementById("firstname-error");
let lastNameError = document.getElementById("lastname-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let consentError = document.getElementById("consent-error");



function validateForm(event) {
    

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const queryTypeElements = document.getElementById("select-query").getElementsByTagName("input");
    const message = document.getElementById("message").value;
    const consent = document.getElementById("consent").checked;
    const submitBtn = document.getElementById("submit-btn");
 

    // Reset errors
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    consentError.textContent = "";
    document.getElementById("query-type-error").textContent = "";

    //define your patterns
    let firstNameRegex = /[A-Za-z]/;
    let lastNameRegex = /[A-Za-z]/;
    let emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]{3,20}$/;



    let isValid = true;

    // Check firstName
    if (firstName === "") {
        firstNameError.textContent = "This field is required";
        isValid = false;
    } else if(!firstNameRegex.test(firstName)){
        firstNameError.textContent = "Please enter a valid first name";
        isValid = false;
    }
    
    //validate lastName
    
    if (lastName === "") {
        lastNameError.textContent = "This field is required";
        isValid = false;
    } else if(!lastNameRegex.test(lastName)){
        lastNameError.textContent = "Please enter a valid last name";
        isValid = false;
    }
    
    // Check email
    if (email === "") {
        emailError.textContent = "This field is required";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    // Check queryType
    let querySelected = false;
    for (let i = 0; i < queryTypeElements.length; i++) {
        if (queryTypeElements[i].checked) {
            querySelected = true;
            break;
        }
    }
    if (!querySelected) {
        document.getElementById("query-type-error").textContent = "Please select a query type";
        isValid = false;
    }

    // Check message
    if (message === "") {
        messageError.textContent = "This field is required";
        isValid = false;
    }

    // Check consent
    if (!consent) {
        consentError.textContent = "You must consent to be contacted";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("demo").innerHTML = "Thank you for contacting us! We will get back to you shortly.";
    } else {
        document.getElementById("demo").innerHTML = "Please correct the errors above.";
    }
}

 