const loginBtn = document.getElementById('loginBtn');

//LOGIN EVENT LISTENER//
const logIn = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementyById('password').value.trim();

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'}
    })



    location.href = "/";
}

loginBtn.addEventListener('click', logIn);
