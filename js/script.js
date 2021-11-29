const loginSubmit = document.getElementById('login_submit')
const registerSumbit = document.getElementById('register_submit')

if (registerSumbit != null) {

    registerSumbit.addEventListener('click', function (event) {
        event.preventDefault();
        let hasErrors = false;

        const registerForm = document.getElementById('registration')

        // Field Values Start
        const userName = document.getElementById('user_name').value
        const email = document.getElementById('email').value
        const age = document.getElementById('age').value
        const password = document.getElementById('password').value
        const passwordConfirm = document.getElementById('password_confirm').value
        const registerAgreement = document.getElementById('register_agreement')
        // Field Values End

        // Errors Variable Start
        const userNameError = document.getElementById("error_username")
        const emailError = document.getElementById("error_email")
        const ageError = document.getElementById("error_age")
        const passwordError = document.getElementById("error_password")
        const passwordConfirmError = document.getElementById("error_password2")
        const registerAgreementError = document.getElementById("error_agree")
        // Errors Variable End

        let errors = {}

        if (userName.length < 3) {
            errors.userName = 'Name should be minimum 3 letters'
            userNameError.innerHTML = errors.userName
            userNameError.style.color = 'red'
            hasErrors = true
        } else {
            userNameError.innerHTML = ''
            localStorage.setItem('userName', userName)
        }

        if (!(email.includes('@'))) {
            errors.email = "Invalid Email"
            emailError.innerHTML = errors.email
            emailError.style.color = 'red'
            hasErrors = true
        } else {
            emailError.innerHTML = ''
            localStorage.setItem('email', email)
        }

        if (age < 15) {
            errors.age = 'Your age should be at least 15'
            ageError.innerHTML = errors.age
            ageError.style.color = 'red'
            hasErrors = true
        } else {
            ageError.innerHTML = ''
            localStorage.setItem('age', age)
        }

        if (password.length < 8) {
            errors.password = 'Passwords should be at least 8 symbol'
            passwordError.innerHTML = errors.password
            passwordError.style.color = 'red'
            hasErrors = true
        } else {
            passwordError.innerHTML = ''
        }

        if (password !== passwordConfirm) {
            errors.passwordConfirm = 'Passwords doesn\'t match'
            passwordConfirmError.innerHTML = errors.passwordConfirm
            passwordConfirmError.style.color = 'red'
            hasErrors = true
        } else if (password === passwordConfirm && password.length > 7) {
            passwordConfirmError.innerHTML = ''
            localStorage.setItem('password', password)
        }

        if (registerAgreement.checked === false) {
            errors.agreement = 'You need to agree terms'
            registerAgreementError.innerHTML = errors.agreement
            registerAgreementError.style.color = 'red'
            hasErrors = true
        } else {
            registerAgreementError.innerHTML = ''
        }

        if (hasErrors === true) {
            return hasErrors;
        } else if (hasErrors === false){
            registerForm.setAttribute('action', 'login.html')
            registerForm.submit()
        }
    })
}

if (loginSubmit != null) {
    loginSubmit.addEventListener('click', function (event) {
        event.preventDefault()
        let hasErrors = false

        const loginForm = document.getElementById('login')

        const loginUsername = document.getElementById('login_user').value
        const loginPassword = document.getElementById('login_password').value

        const userNameLoginError = document.getElementById("error_login_username")
        const userNamePasswordError = document.getElementById("error_login_password")

        let errors = {}

        if (loginUsername !== localStorage.getItem('userName')) {
            errors.loginUserName = 'User doesn\'t exists'
            userNameLoginError.innerHTML = errors.loginUserName
            userNameLoginError.style.color = 'red'
            hasErrors = true
        }

        if (loginPassword !== localStorage.getItem('password')) {
            errors.loginPassword = 'Password doesn\'t match'
            userNamePasswordError.innerHTML = errors.loginPassword
            userNamePasswordError.style.color = 'red'
            hasErrors = true
        }

        if (hasErrors === true) {
            return hasErrors
        } else if (hasErrors === false){
            loginForm.setAttribute('action', 'profile.html')
            loginForm.submit()
        }
    })
}