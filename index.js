var form = document.getElementById("user-form");
form.addEventListener('submit', addToLocal);

function addToLocal(e){
    e.preventDefault();
    var email = document.getElementById('email').value;
    var pword = document.getElementById('pw').value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", pword);

}


console.log("Hi");
// localStorage.setItem("email",x );