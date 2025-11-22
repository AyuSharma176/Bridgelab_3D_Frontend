// Q7 code placeholder
// Q7: Login Form Validation

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userRegex = /^.{5,}$/;
    const passRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&]).{8,}$/;

    let errors = [];

    if (!userRegex.test(username)) errors.push("Username must be at least 5 characters.");
    if (!passRegex.test(password)) errors.push("Password must be strong.");

    if (errors.length > 0) {
        console.log("Errors:", errors);
    } else {
        console.log("Login Successful!");
    }
}
