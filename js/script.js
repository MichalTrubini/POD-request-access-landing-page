const email = document.getElementById('email');
const emailError = document.getElementById('email-error');

const form  = document.getElementsByTagName('form')[0];


form.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.textContent = ''; // Reset the content of the message
      emailError.style.visibility = 'hidden'; // Reset the visual state of the message
    }

  });

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
  
    if(!email.validity.valid) {
      // If it isn't, we display an appropriate error message
      showErrorEmail();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
});

function showErrorEmail() {
    if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Oops! Please check your email';
    emailError.style.visibility = 'visible';
  } 
}