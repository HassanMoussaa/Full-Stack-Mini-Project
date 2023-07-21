document.addEventListener("DOMContentLoaded", function () {
 
  const signInForm = document.querySelector("form");

 
  signInForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

     const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const user = {
            email,
            password,
          }

    fetch("http://localhost/Full-Stack-Mini-Project/signin.php", {
      method: "POST",
       headers: {
          "Content-Type": "application/json"
        },
      body: JSON.stringify(user),
    })
      .then((response) => response.json()) 
      .then((data) => {
            console.log(data);

        if (data.status === "logged in") {
          
          window.location.href = `dashboard.html?username=${data.full_name}`;
        } else {
           const errorElement = document.getElementById("error-message");
           errorElement.textContent = data.status;
        }
      })
      .catch((error) => {
        
        console.error("Error occurred:", error);
      });
  });
});