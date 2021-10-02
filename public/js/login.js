const loginBtn = document.getElementById('loginBtn');

//LOGIN EVENT LISTENER//
const logIn = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    let response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'}
    })

    
    if (response.ok){
        location.reload();
        document.location.replace('/')
    } else {
        alert("Login Failed")
    }
    
}

loginBtn.addEventListener('click', logIn);
