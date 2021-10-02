//Passing in Values Logged in Submit Form//
const submitOBtn = document.getElementById('submitBtn')



//Submit Form for Owner
const submitOForm = async (event) => {
    event.preventDefault();
    let response;

    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();;
    let password = document.getElementById('password').value.trim();
    let passwordCheck = document.getElementById('passwordCheck').value.trim();

    if(password !== passwordCheck){
        alert("Passwords did not match");
        return;
    }

    if (username && email && password) {
        response = await fetch('/api/user/add', {
            method: 'POST',
            body: JSON.stringify({username, email, password }),
            headers: { 'Content-Type': 'application/json'}
        });
    };

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to Sign Up');
    }
}

submitBtn.addEventListener('click', submitOForm);
