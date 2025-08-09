document.getElementById("signInLink").addEventListener('click', () => {
    const username = document.getElementById("userNameField").value.trim();
    const password = document.getElementById("userPasswordField").value.trim();

    if(username === '' || password === '') {
        event.preventDefault();
        alert("Please, fill both username and password fields!")
    }
});