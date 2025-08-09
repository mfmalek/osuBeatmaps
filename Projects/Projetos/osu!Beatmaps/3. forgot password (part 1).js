document.getElementById("confirmationLink").addEventListener('click', (event) => {
    const username = document.getElementById("emailRecover").value.trim()

    if(username === '') {
        event.preventDefault();
        alert("Please, fill the username/email field.");
    }
});