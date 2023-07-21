
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("sign_up_butt").addEventListener("click", createUser);


// signup work 


function createUser(e) {
  e.preventDefault()

  const FullName = document.getElementById("FullName").value;
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;
  const cellnumber = document.getElementById("cellnumber").value;
  const newUser = {
 full_name:FullName,
    email,
    password,
    cell_phone:cellnumber,
  }
  console.log(newUser)
  fetch("http://localhost/Full-Stack-Mini-Project/signup.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json())
    
    .then((response) => {
        if (response.status == "success") {
          console.log("done")
          window.location.href = `index.html`;

      
        }else{
            console.log("failed")
        }
    })
    

    
    .catch(error => console.log(error))
}




})
