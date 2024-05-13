const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if(validateForm()) {
        form.submit();
    }
});

function validateForm() {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');
    
    let isValid = true;

    if(name.value.trim() === '') {
        showError(name, 'Please enter your name');
        isValid = false;
    } else {
        removeError(name);
    }

    if(email.value.trim() === '') {
        showError(email, 'Please enter your email');
        isValid = false;
    } else if(!isValidEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        removeError(email);
    }

    if(message.value.trim() === '') {
        showError(message, 'Please enter your message');
        isValid = false;
    } else {
        removeError(message);
    }

    return isValid;
}

function showError(input, message) {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.error-message');
    error.textContent = message;
    formControl.classList.add('error');
}

function removeError(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



var typed = new Typed(".text", {
    strings: ["Programming" , "Cybersecurity" , "Web Development","Mobile application"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})