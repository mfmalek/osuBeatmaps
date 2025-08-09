document.getElementById("createAccountLink").addEventListener('click', (event) => {
    const username = document.getElementById("userNameField").value.trim();
    const email = document.getElementById("userEmailField").value.trim();
    const emailConfirm = document.getElementById("userEmailConfirmField").value.trim();
    const password = document.getElementById("userPasswordField").value.trim();
    const passwordConfirm = document.getElementById("userPasswordConfirmField").value.trim();

    if(username === '' || email === '' || emailConfirm === '' || password === '' || passwordConfirm === '') {
        event.preventDefault();
        alert("Please, fill all the required fields.");
    }
});