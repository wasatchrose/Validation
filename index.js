function submitForm(event){
    event.preventDefault();

    let isFormValid = true;

    // Get values from HTML input elements
    const firstNameElement = document.querySelector("#firstName");
    const firstName = firstNameElement.value;

    const lastNameElement = document.querySelector("#lastName");
    const lastName = lastNameElement.value;

    const ageElement = document.querySelector("#age");
    const age = ageElement.value;

    const emailElement = document.querySelector("#email");
    const email = emailElement.value;

    const eighteenOrOlderElement = document.querySelector("#eighteenOrOlder");
    const eighteenOrOlder = eighteenOrOlderElement.value;

    const passwordElement = document.querySelector("#password")
    const password = passwordElement.value;

    const confirmPasswordElement = document.querySelector("#confirmPassword")
    const confirmPassword = confirmPasswordElement.value;
    
    // clear previous error indicators
    firstNameElement.classList.remove("error");
    lastNameElement.classList.remove("error");
    ageElement.classList.remove("error");
    emailElement.classList.remove("error");
    eighteenOrOlderElement.classList.remove("error");
    passwordElement.classList.remove("error");
    confirmPasswordElement.classList.remove("error");

    // First name
    if (firstName === ""){
        // highlight the firstName input 
        firstNameElement.classList.add("error");
        isFormValid = false;
    }

    // Last name
    if (lastName === ""){
        // highlight the lastName input 
        lastNameElement.classList.add("error");
        isFormValid = false;
    }

    // Age
    const numberAge = Number(age);
    
    if(age === '' || isNaN(numberAge) || numberAge < 0){
    
        // highlight the age input (!)
        ageElement.classList.add("error");
        isFormValid = false;
    }
    
    // 18 or older
    if(eighteenOrOlder === 'true' && numberAge < 18) {
        ageElement.classList.add('error');
        eighteenOrOlderElement.classList.add('error');
        isFormValid = false;
    }

    // email
    const isEmailValid = is_email(email);

    if (!isEmailValid) {
        emailElement.classList.add("error");
        isFormValid = false;
    }
    
    // Password / Confirm Password
    if ((password =="") ||
        (password.length < 8) ||
        (confirmPassword == "") ||
        (confirmPassword < 8) ||
        (password != confirmPassword)) {
            passwordElement.classList.add("error");
            confirmPasswordElement.classList.add("error");
            isFormValid = false;
        }

     // If form is valid, submit to server
     if (isFormValid){
        alert("Successfully Submitted Form!")
    }
    // if form is NOT valid, show an error
    else {
        alert("Form not valid.  Please fix.")
    }
}

    function is_email(email){      
        var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        console.log("Hello");
        return emailReg.test(email); 
    }      
        
       
    
      

   

    

