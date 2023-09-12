// -------- Signup/Login JS -----------------

document.querySelector("#signup_btn").addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById("form-signup").style.display = "block";
    document.getElementById("form-login").style.display = "none";
    console.log("test");
});

document.querySelector("#login_btn").addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById("form-login").style.display = "block";
    document.getElementById("form-signup").style.display = "none";
    console.log("test");
});

let infoArr = [];

document.querySelector("#create_act").addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Account created btn click");
    let getEmail = document.getElementById("input-email").value;
    let getName = document.getElementById("input-name").value;
    let getPass = document.getElementById("input-password").value;

    let emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!getEmail.match(emailValidation)) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showCancelButton: true,
            showConfirmButton: false
          })
        Toast.fire({
            icon: 'error',
            title: 'Invalid Email Address'
          })
      return true;
    } 

    let passValidation=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!getPass.match(passValidation)){ 
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showCancelButton: true,
            showConfirmButton: false
          })
        Toast.fire({
            icon: 'error',
            title: 'Invalid Password, please enter 7 to 15 characters which contain at least one numeric digit and a special character'
          })
        return true;
    }

    let infoObj = {
        email: getEmail,
        name: getName,
        pass: getPass
    };

    infoArr.push(infoObj);
    console.log(infoArr);
    let userData = localStorage.setItem("users", JSON.stringify(infoArr));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    document.getElementById("create_act").reset();
});


let jsonData = localStorage.getItem("users");
let objData = JSON.parse(jsonData);
// console.log(jsonData);

document.querySelector("#loginacc").addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Account created btn click");
    let getLogEmail = document.getElementById("input-email-login").value;
    let getLogPass = document.getElementById("input-password-login").value;

    let emailValidation1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!getLogEmail.match(emailValidation1)) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showCancelButton: true,
            showConfirmButton: false
          })
        Toast.fire({
            icon: 'error',
            title: 'Invalid Email Address'
          })
      return true;
    } 

    let passValidation1 =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!getLogPass.match(passValidation1)){ 
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showCancelButton: true,
            showConfirmButton: false
          })
        Toast.fire({
            icon: 'error',
            title: 'Invalid Password, please enter 7 to 15 characters which contain at least one numeric digit and a special character'
          })
        return true;
    }

    objData.find((data) => {
        console.log(data);
        if (getLogEmail === data.email) {
            console.log("Email is ", data.email);
            console.log("Email is ", getLogEmail);
            if (getLogPass === data.pass) {
                    console.log("Password is ", data.pass);
                    window.location.href = "./dashboard.html";
                    document.getElementById("loginacc").reset();
                }else{
                    console.log("Password is invalid");
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid Password',
                        text: 'Please enter valid Password...',
                        confirmButtonColor: '#36A9E2'
                    })
                }
            return true;
        }
        else{
            console.log("Email is invalid...");
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter valid email address...',
                confirmButtonColor: '#36A9E2'
            })
        }
    });
});


// -------- Dashboard JS -----------------
function logoutUser() {
    localStorage.removeItem("users");
    window.location.href = "./index.html";
};