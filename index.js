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
    
    // var paragraph = document.createElement("P");
    // paragraph.innerHTML = myObj_serialized;
    // body.appendChild(paragraph);
    
     let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"))

      var paragraph = document.createElement("P");
      paragraph.innerHTML = `${myObj_deserialized["email"]} - ${myObj_deserialized["password"]}`;
      document.getElementById("test").appendChild(paragraph);
      


    // localStorage.setItem("email", email);
    // localStorage.setItem("password", pword);

}


// console.log("Hi");
// localStorage.setItem("email",x );