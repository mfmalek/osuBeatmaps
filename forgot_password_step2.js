document.getElementById("changePasswordLink").addEventListener('click', (event) => {
    const password = document.getElementById("passwordField").value.trim();
    const passwordConfirm = document.getElementById("passwordConfirmField").value.trim();

    if(password === '' || passwordConfirm === '') {
        event.preventDefault();
        alert("Please, fill both password fields.");
        return;
    }

    if(password != passwordConfirm) {
        event.preventDefault();
        alert("The passwords entered do not match.");
        return;
    }
});