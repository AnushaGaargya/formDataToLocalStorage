var form = document.getElementById("user-form");
form.addEventListener('submit', addToLocal);

function addToLocal(e){
    e.preventDefault();
    var myObj = new Object();
    var email = document.getElementById('email').value;
    var pword = document.getElementById('pw').value;
    myObj["email"] = email
    myObj["password"] = pword
    let myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem("myObj", myObj_serialized);


    // localStorage.setItem("email", email);
    // localStorage.setItem("password", pword);

}


// console.log("Hi");
// localStorage.setItem("email",x );