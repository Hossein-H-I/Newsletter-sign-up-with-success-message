let signupPage = document.querySelector('#signup-page');
let form = document.querySelector('#myForm');
let errorMessage = document.querySelector('#error-message');
let emailInput = document.querySelector('#email');
let submitBtn = document.querySelector('#submitBtn');

let thanksPage = document.querySelector('#thanks-page');
let dismessageBtn = document.querySelector('#dis-messageBtn');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener('submit', function(event){
    event.preventDefault();

    const emailValue = emailInput.value.trim(); // email value without space around it

    if(emailValue == '' || !emailPattern.test(emailValue)){
        emailInput.classList.add('error-input');
        errorMessage.textContent= 'Valid email required';
    } else{
        signupPage.style.display = 'none';
        thanksPage.style.display = 'flex';
        
        // show user email in thansks message
        document.getElementById('user-email').textContent = emailValue;

    }

})

dismessageBtn.addEventListener('click',function(){
    thanksPage.style.display = 'none';
    signupPage.style.cssText = 'flex';
    form.reset();
    emailInput.classList.remove('error-input');
    errorMessage.textContent= '';
})
