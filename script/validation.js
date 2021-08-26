const form = document.querySelector('form');

const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const username = document.querySelector('#name');
const message = document.querySelector('#message');


const emailError = document.querySelector('#email-error');
const subjectError = document.querySelector('#subject-error');
const usernameError = document.querySelector('#username-error');
const messageError = document.querySelector('#message-error');


//Error message can be appended using parent node of input
//that way I don't have to create error message

form.addEventListener('submit', (event) => {

    if (email.checkValidity() && subject.checkValidity()
        && username.checkValidity() && message.checkValidity()) {

        alert('All input is valid');
    } else {

        if (!email.validity.valid) {
            emailError.textContent = createErrorMessage('email');
            email.style.borderColor = 'red';
        }

        if (!subject.validity.valid) {
            subjectError.textContent = createErrorMessage('subject');
            subject.style.borderColor = 'red';
        }

        if (!username.validity.valid) {
            usernameError.textContent = createErrorMessage('username');
            username.style.borderColor = 'red';
        }

        if (!message.validity.valid) {
            messageError.textContent = createErrorMessage('message');
            message.style.borderColor = 'red';
        }
    }
    event.preventDefault();

});


const createErrorMessage = (input = '') => {
    const cap = input[0].toUpperCase();
    const capInput = cap + input.substring(1, input.length);
    return `${capInput} is invalid. Please enter again!`;
}

