// bring tags
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email-address');
const address = document.getElementById('address');
const city = document.getElementById('city');
const postalCode = document.getElementById('postal-code');
const reasons = document.querySelectorAll('.input-option');
const message = document.querySelector('#message');

// after implementation, start this function // e--> event
form.addEventListener('submit', (s) => {
   
    checkInputs();

    // && checkReason() 일단 이거 제외시킴!
    if (!checkName() || !checkEmail() || !checkAddress() || !checkCity() || !checkPostalCode() || !checkMessage()) {
        s.preventDefault();
    }
});

function checkInputs() {
    checkName();
    checkEmail();
    checkAddress();
    checkCity();
    checkPostalCode();
    // checkReason();
    checkMessage();
};

// === --> value and type equal // == --> only value equal
function checkName() {
    const nameValue = name.value.trim();

    if (nameValue == '') {
            //show error
        //add error class
        setErrorFor(name, 'Name cannot be blank')
        return false;
    }
    else {
        // add success class
        setSuccessFor(name);
        return true;
    }
};

function checkEmail() {
    const emailValue = email.value.trim();

    if (emailValue == '') {
        setErrorFor(email, 'Email Address cannot be blank');
        return false;
    }
    else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email Address is not valid');
        return false;
    }
    else {
        setSuccessFor(email);
        return true;
    }
};

//bool true false
function isEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
};

function checkAddress() {
    const addressValue = address.value.trim();

    if (addressValue == '') {
        setErrorFor(address, 'Address cannot be blank')
        return false;
    }
    else {
        setSuccessFor(address);
        return true;
    }
};

function checkCity() {
    const cityValue = city.value.trim();

    if (cityValue == '') {
        setErrorFor(city, 'City cannot be blank')
        return false;
    }
    else {
        setSuccessFor(city);
        return true;
    }
};

function checkPostalCode() {
    const postalCodeValue = postalCode.value.trim();

    if (postalCodeValue == '') {
        setErrorFor(postalCode, 'Postal code cannot be blank');
        return false;
    }
    else if(!isPostalCode(postalCodeValue)) {
        setErrorFor(postalCode, 'Postal code is not valid');
        return false;
    }
    else {
        setSuccessFor(postalCode);
        return true;
    }
};

function isPostalCode(postalCode) {
    const re = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
    return re.test(postalCode);
};


// 여기 위로는 이상이 없다.

function checkReason() {
   
    for(let i = 0; i < reasons.length; i++) {
        if (reasons[i].checked) {
            return true;
        }
    }

    const formControl = document.querySelector('#form-contact'); // .form-control

    const small = formControl.querySelector('small');
        //add error class --> form-control --> overwrite
    formControl.className = 'form-control error'; // having two class names 
    
    //add error message inside small
    small.innerText = message;

    return false;
};

function checkMessage() {
    const messageValue = message.value.trim();

    if (messageValue == '') {
        setErrorFor(message, 'Message cannot be blank');
        return false;
    }
    else {
        setSuccessFor(message);
        return true;
    }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error'; 
    small.innerText = message;
};

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
};

///
const radioOption = document.querySelector('#radio-options');
const orderProblem = document.querySelector('#order-problem');
const orderNum = document.querySelector('#order-number');

radioOption.onclick = function(){
    if(orderProblem.checked) {
        setVisibleOrderNum(orderNum);
    }
    else {
        setHiddenOrderNum(orderNum);
    }
};

function setVisibleOrderNum(input) {
    const order = input.parentElement;
    order.className = 'order visible';
};

function setHiddenOrderNum(input) {
    const order = input.parentElement;
    order.className = 'order hidden';
    input.value = '';
};