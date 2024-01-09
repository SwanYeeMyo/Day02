let formData = document.querySelectorAll('[data-require]');
let submitBtn = document.querySelector('.submit');
let error = document.querySelectorAll('.error');
let Person = {
    'first-name': 'First Name',
    'last-name': 'Last Name',
    'id': 'ID',
    'email': 'Email',
    'password': 'Password',
    'confirm-password': 'Confirm password'
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Collect and validate form data
    for (let i = 0; i < formData.length; i++) {
        console.log(formData[i].value);
        // Check if the value of the form field is an empty string
        if (formData[i].value.trim() === "") {
            // Display error message
            error[i].innerText = Person[formData[i].getAttribute('name')] + " is required.";

            //console.log(formData[i].getAttribute('name'));
            //console.log(formData[4].getAttribute('name'));
           
        }
    }
    
    //4 5
});