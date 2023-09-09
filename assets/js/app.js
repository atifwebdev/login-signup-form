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
    let infoObj = {
        email: getEmail,
        name: getName,
        pass: getPass
    };

    infoArr.push(infoObj);
    console.log(infoArr);
    let userData = localStorage.setItem("users", JSON.stringify(infoArr));
});


let jsonData = localStorage.getItem("users");
let objData = JSON.parse(jsonData);
// console.log(jsonData);

document.querySelector("#loginacc").addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Account created btn click");
    let getLogEmail = document.getElementById("input-email-login").value;
    let getLogPass = document.getElementById("input-password-login").value;

    objData.find((data) => {
        console.log(data);
        if (data.email !== getLogEmail) {
            console.log("Email is  invalid...");
            // alert("Email is invalid...");
        }
        else if (data.pass !== getLogPass) {
            console.log("Password is also invalid");
            // alert("Password is also invalid");"ewfdweqfew"
        }
        else {
            alert("Loged In Successfully");
            window.location.href = "./dashboard.html";
        }
    });

});


// -------- Dashboard JS -----------------
function logoutUser() {
    localStorage.removeItem("users");
    window.location.href = "./index.html";
};