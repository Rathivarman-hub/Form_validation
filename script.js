const form = document.getElementById("register-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const age = document.getElementById("age");

const checkusername = document.getElementById("checkusername");
const checkemail = document.getElementById("checkemail");
const checkpassword = document.getElementById("checkpassword");
const checkconfirmpassword = document.getElementById("checkconfirmpassword");
const checkage = document.getElementById("checkage");
const formsuccess = document.getElementById("formsuccess");

function validateUsername() {
    if (username.value.trim().length < 3) {
        checkusername.innerText = "Username must be 3 letters";
        return false;
    }
    else {
        checkusername.innerText = "";
        return true;
    }
}

function validateEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email.value.trim())) {
        checkemail.innerText = "enter a valid email";
        return false;
    }
    else {
        checkemail.innerText = "";
        return true;
    }
}

function validatePassword() {
    if (password.value.length < 6) {
        checkpassword.innerText = "Password must be 6 characters";
        return false;
    }
    else {
        checkpassword.innerText = "";
        return true;
    }
}

function validateConfirmPassword() {
    if (password.value != confirmpassword.value) {
        checkconfirmpassword.innerText = "Password doesn't match";
        return false;
    }
    else {
        checkconfirmpassword.innerText = "";
        return true;
    }
}

function validateAge() {
    if (age.value < 18 || age.value > 60) {
        checkage.innerText = "Age must be between 18 and 60";
        return false;
    }
    else {
        checkage.innerText = "";
        return true;
    }
}

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmpassword.addEventListener("input", validateConfirmPassword);
age.addEventListener("input", validateAge);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword() && validateAge();
    if (valid) {
        formsuccess.innerText = " ✅ Form Sumbit Successfully";
        form.reset();
    }
    else {
        formsuccess.innerText = "";
    }
}
)