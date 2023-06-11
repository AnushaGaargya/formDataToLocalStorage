var form = document.getElementById("user-form");
form.addEventListener('submit', addToLocal);

function addToLocal(e){
    e.preventDefault();
    // var x = 1;
    
    var subObj = new Object();
    var email = document.getElementById('email').value;
    var pword = document.getElementById('pw').value;
    subObj["email"] = email
    subObj["phone"] = pword
   
    let subObj_serialized = JSON.stringify(subObj);
    localStorage.setItem(email, subObj_serialized);
 
    

    
    //  let subObj_deserialized = JSON.parse(localStorage.getItem("subObj"));

      var paragraph = document.createElement("P");
      paragraph.innerHTML = `${subObj["email"]} - ${subObj["phone"]}`;
    //   paragraph.innerHTML = `${subObj_deserialized["email"]} - ${subObj_deserialized["phone"]}`;
      document.getElementById("test").appendChild(paragraph);
      


    // localStorage.setItem("email", email);
    // localStorage.setItem("password", pword);

}


// console.log("Hi");
// localStorage.setItem("email",x );