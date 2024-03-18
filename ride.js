document.addEventListener("DOMContentLoaded", function(){
const loginForm = document.getElementById("#login-form");
const serviceSelection = document.getElementById("#service-selection");


 // EVET LISTENER FOR THE LOGIN FORM
loginForm.addEventListener("submit", function(event){
event.preventDefault();

const username = loginForm.querySelector('input[type="text"]').value;
const password = loginForm.querySelector('input[type="password"]').value;

// TO SEE OUTPUT
console.log("Username: " Username);
console.log("Password: " Password);

serviceSelection.style.display = "block";
});

// EVENT LISTENER FOR SERVICE SELECTION BUTTON
serviceSelection.addEventListener("click", function(event){
  if(event.target.tagName === "BUTTON"){
const service = event.target.id;


  }
});

});
