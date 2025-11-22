// Q2 code placeholder (full code provided earlier)
// Q2: Student Form Validator

function validateField(input, regex, errorId) {
    const errorElement = document.getElementById(errorId);

    if (regex.test(input.value)) {
        input.style.border = "2px solid green";
        errorElement.innerText = "";
        return true;
    } else {
        input.style.border = "2px solid red";
        errorElement.innerText = "Invalid input!";
        return false;
    }
}

function validateForm() {
    const nameValid = validateField(
        document.getElementById("name"),
        /^[A-Za-z ]+$/,
        "nameError"
    );

    const emailValid = validateField(
        document.getElementById("email"),
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
        "emailError"
    );

    const phoneValid = validateField(
        document.getElementById("phone"),
        /^[0-9]{10}$/,
        "phoneError"
    );

    const passValid = validateField(
        document.getElementById("password"),
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
        "passError"
    );

    return nameValid && emailValid && phoneValid && passValid;
}
