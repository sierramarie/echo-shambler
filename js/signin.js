document.querySelector('#signinButton').addEventListener('click', signin);

function signin() {
    var name = document.querySelector('#name').value;
    var password = document.querySelector('#password').value;

    // fetch('http://acc70ddc.ngrok.io/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },

    //     // Back-end controls the left side, properties, of this object
    //     // Front-end controls the variables names and values on the right side
    //     body: JSON.stringify({
    //         username: name,
    //         password: password,
    //     })
    // })
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(response) {
    //         // console.log(response);

    //         if (response.token) {
    //             // Saves any string into a named spot within your browser for the current domain.
    //             sessionStorage.setItem('token', response.token);
    //             location.href = 'users.html';
    //         }
    //         else {
    //             alert('There was an error. Check out your console.');
    //             console.log(response);
    //         }
        // })
        location.href = "chirp.html";
}
