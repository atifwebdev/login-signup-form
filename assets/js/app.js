// JS 

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

});

document.querySelector("#loginacc").addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Account created btn click");
    let getLogEmail = document.getElementById("input-email-login").value;
    let getLogPass = document.getElementById("input-password-login").value;
    let infoLogObj = {
        email: getLogEmail,
        pass: getLogPass
    };

    infoArr.find((data) => {
        if (infoLogObj.email === data.email) {
            console.log("Email is correct");
            alert("Email is correct");
            if (infoLogObj.pass === data.pass) {
                console.log("Password is Correct");
                alert("Password is also Correct");
            }
        }
    });

});