document.getElementById("createAccountLink").addEventListener('click', (event) => {
    const username = document.getElementById("userNameField").value.trim();
    const email = document.getElementById("userEmailField").value.trim();
    const emailConfirm = document.getElementById("userEmailConfirmField").value.trim();
    const password = document.getElementById("userPasswordField").value.trim();
    const passwordConfirm = document.getElementById("userPasswordConfirmField").value.trim();

    const fields = [username, email, emailConfirm, password, passwordConfirm];
    const fieldNames = ["Username", "Email", "Email confirmation", "Password", "Password confirmation"];

    for(let i = 0; i < fields.length; i++) {
        if(fields[i] === '') {
            event.preventDefault();
            alert(`Please, fill all the required fields.\n${fieldNames[i]} field is empty.`);
            return;
        }
    }

    if(email != emailConfirm) {
        event.preventDefault();
        alert("The emails entered do not match.");
        return;
    }

    if(password != passwordConfirm) {
        event.preventDefault();
        alert("The passwords entered do not match.");
        return;
    }
});