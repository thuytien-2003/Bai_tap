document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let isValid = true;

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const phone = document.getElementById("phone");
    const dob = document.getElementById("dob");
    const country = document.getElementById("country");
    const hobbies = document.querySelectorAll("input[name='hobbies']:checked");
    const gender = document.querySelector("input[name='gender']:checked");

    function showError(id, message) {
        document.getElementById(id).textContent = message;
        isValid = false;
    }

    function clearError(id) {
        document.getElementById(id).textContent = "";
    }

    // Full Name
    if (fullName.value.trim().length < 3) {
        showError("nameError", "At least 3 characters.");
    } else {
        clearError("nameError");
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError("emailError", "Invalid email.");
    } else {
        clearError("emailError");
    }

    // Password
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!passRegex.test(password.value)) {
        showError("passwordError", "Min 8 chars with letters & numbers.");
    } else {
        clearError("passwordError");
    }

    // Confirm Password
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        showError("confirmPasswordError", "Passwords must match.");
    } else {
        clearError("confirmPasswordError");
    }

    // Phone
    if (!/^\d{10,}$/.test(phone.value)) {
        showError("phoneError", "At least 10 digits.");
    } else {
        clearError("phoneError");
    }

    // Gender
    if (!gender) {
        showError("genderError", "Select gender.");
    } else {
        clearError("genderError");
    }

    // DOB
    if (!dob.value) {
        showError("dobError", "Enter your birth date.");
    } else {
        const dobDate = new Date(dob.value);
        const age = new Date().getFullYear() - dobDate.getFullYear();
        if (age < 18) {
            showError("dobError", "You must be over 18.");
        } else {
            clearError("dobError");
        }
    }

    // Country
    if (country.value === "") {
        showError("countryError", "Select your country.");
    } else {
        clearError("countryError");
    }

    // Hobbies
    if (hobbies.length === 0) {
        showError("hobbiesError", "Choose at least one hobby.");
    } else {
        clearError("hobbiesError");
    }

    if (isValid) {
        alert("Registration successful!");
        this.reset();
    }
});