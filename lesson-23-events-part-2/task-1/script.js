'use strict';
<<<<<<< HEAD
console.log('--- Events in JavaScript. Part-2. Task-1. ---');
=======
console.log('--- Events in JavaScript. Part-2 ---');
>>>>>>> 93a7c06152739a3293948e8992546e213e1dea83
console.log('              ---------');

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => value
    ? undefined
    : 'Required';

const isEmail = value => value.includes('@')
    ? undefined
    : 'Should be an email';
<<<<<<< HEAD
=======
/*
const onEmailChange = event => {
    const errorText = [isRequired, isEmail]
        .map(validator => validator(event.target.value))
        .filter(errorText => errorText)
        .join(', ')
    emailErrorElem.textContent = errorText;
}

const onPasswordChange = event => {
    const errorText = [isRequired]
        .map(validator => validator(event.target.value))
        .filter(errorText => errorText)
        .join(', ')
    passwordErrorElem.textContent = errorText;
}
*/
>>>>>>> 93a7c06152739a3293948e8992546e213e1dea83

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired],
};

const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
<<<<<<< HEAD
        .join(', ');
};
// ========
// const onEmailChange = event => {
//     const errorText = validate('email', event.target.value);
//     emailErrorElem.textContent = errorText;
// }

// const onPasswordChange = event => {
//     const errorText = validate('password', event.target.value)
//     passwordErrorElem.textContent = errorText;
// }

const onEmailChange = event => {
    emailErrorElem.textContent = validate('email', event.target.value);
}

const onPasswordChange = event => {
    passwordErrorElem.textContent = validate('password', event.target.value);
}
// ========
=======
        .join(', ')
};

const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    emailErrorElem.textContent = errorText;
}

const onPasswordChange = event => {
    const errorText = validate('password', event.target.value);
    passwordErrorElem.textContent = errorText;
}
>>>>>>> 93a7c06152739a3293948e8992546e213e1dea83

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
<<<<<<< HEAD
        .reduce((acc, [field, value]) => ({ ...acc, [field]: value}), {});

    alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);
=======
        .reduce((acc, [field, value]) => ({...acc, [field]: value}), {});

    alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);
>>>>>>> 93a7c06152739a3293948e8992546e213e1dea83
