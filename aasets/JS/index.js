// Selecting Elements
const form=document.getElementById("form");
const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const email=document.getElementById("email");
const password=document.getElementById("password");


// Event Handler
form.addEventListener("submit",(e)=>{
e.preventDefault();

checkinput();
})


// Checking input

function checkinput(){
const firstNameValue=firstName.value.trim();
const lastNameValue=lastName.value.trim();
const emailValue=email.value.trim();
const passwordValue=password.value.trim();

// Check Firstname

if(firstNameValue === ""){

    setError(firstName, "First Name cannot be empty");
}
else{

    setSuccess(firstName)
}


// ======================= //

// Check Lastname

if(lastNameValue === ""){

    setError(lastName, "Last Name cannot be empty");
}
else{

    setSuccess(lastName)
}


// ======================= //

// Check Email

if(emailValue === ""){

    setError(email, "Email cannot be empty");
}
else if(!isEmail(emailValue)){
    setError(email, "Looks like this is not an email");
    
}
else{

    setSuccess(email)
}

// ======================= //

//Check Password

if(passwordValue === ""){
    setError(password, "Password cannot be empty")
}
else if(passwordValue.length <= 8){
    setError(password, "Password must contain 8 characters")
}
else{
    setSuccess(password)
}

}




function setError(input, message){
    const parentEl=input.parentElement;
    // console.log(parentEl); // form-control
    const small=parentEl.querySelector('small');
    // console.log(small)

    parentEl.className="form-control error";

    small.innerHTML=message;
}

function setSuccess(input){
    const parentEl=input.parentElement;

    parentEl.className="form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}