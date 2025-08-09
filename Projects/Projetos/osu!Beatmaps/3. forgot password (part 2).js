document.getElementById("changePasswordLink").addEventListener('click', (event) => {
    const password = document.getElementById("passwordField").value.trim();
    const passwordConfirm = document.getElementById("passwordConfirmField").value.trim();

    if(password === '' || passwordConfirm === '') {
        event.preventDefault();
        alert("Please, fill both password fields.");
    }
});

// TODO: CONFIRM THAT BOTH PASSWORD FIELDS HAVE THE EXACT SAME TEXT (BOTH PASSWORD ARE THE SAME)