const registerSumbit = document.getElementById('register_submit')

if (registerSumbit != null) {

    registerSumbit.addEventListener('click', function e() {

        const userName = document.getElementById('user_name').value
        const email = document.getElementById('email').value
        const age = document.getElementById('age').value
        const password = document.getElementById('password').value
        const passwordConfirm = document.getElementById('password_confirm').value
        const registerAgreement = document.getElementById('register_agreement')

        //error divs
        const userNameError = document.getElementById("error_username")
        const emailError = document.getElementById("error_email")
        const ageError = document.getElementById("error_age")
        const passwordError = document.getElementById("error_password")
        const passwordConfirmError = document.getElementById("error_password2")
        const registerAgreementError = document.getElementById("error_agree")

        let errors = {}

        if (userName.length < 3) {
            errors.userName = 'Name should be minimum 3 letters'
            userNameError.innerHTML = errors.userName
            userNameError.style.color = 'red'
        } else {
            userNameError.innerHTML = ''
            localStorage.setItem('userName', userName)
        }

        if (!(email.includes('@'))) {
            errors.email = "Invalid Email"
            emailError.innerHTML = errors.email
            emailError.style.color = 'red'
        } else {
            emailError.innerHTML = ''
            localStorage.setItem('email', email)
        }

        if (age < 15) {
            errors.age = 'Your age should be at least 15'
            ageError.innerHTML = errors.age
            ageError.style.color = 'red'
        } else {
            ageError.innerHTML = ''
            localStorage.setItem('age', age)
        }

        if (password.length < 8) {
            errors.password = 'Passwords should be at least 8 symbol'
            passwordError.innerHTML = errors.password
            passwordError.style.color = 'red'
        } else {
            passwordError.innerHTML = ''
        }

        if (password !== passwordConfirm) {
            errors.passwordConfirm = 'Passwords doesn\'t match'
            passwordConfirmError.innerHTML = errors.passwordConfirm
            passwordConfirmError.style.color = 'red'
        } else if (password === passwordConfirm && password.length > 7){
            passwordConfirmError.innerHTML = ''
            localStorage.setItem('password', password)
        }

        if (registerAgreement.checked === false) {
            errors.agreement = 'You need to agree terms'
            registerAgreementError.innerHTML = errors.agreement
            registerAgreementError.style.color = 'red'
        } else {
            registerAgreementError.innerHTML = ''
        }

        console.log(errors)
    })
}