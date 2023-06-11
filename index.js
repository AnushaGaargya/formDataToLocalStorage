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
      document.getElementById("test").appendChild(paragraph);
       // create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    paragraph.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", delete_fn);
        // create edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    paragraph.appendChild(editBtn);
    editBtn.addEventListener("click", edit_fn);


    function delete_fn(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                var item = e.target.parentElement; //the parent element of delete btn is list item. 
                document.getElementById("test").removeChild(item);
                const first = (item.textContent).split(' ')[0]
                localStorage.removeItem(first);
                console.log(first)
            }
        }
    }

    function edit_fn(e){
        if(e.target.classList.contains('edit')){
            
        var item = e.target.parentElement; //the parent element of edit btn is list item. 
        document.getElementById("test").removeChild(item);
        const first = (item.textContent).split(' ')[0]
        x = localStorage.getItem(first)
        const usr_obj = JSON.parse(x);
        console.log(usr_obj["email"]);
        
        var em = document.getElementById("email");
        em.value = usr_obj["email"]
        var ph = document.getElementById("pw")
        ph.value = usr_obj["phone"]

        localStorage.removeItem(first);
            
        }
    }
    

}


// console.log("Hi");
// localStorage.setItem("email",x );