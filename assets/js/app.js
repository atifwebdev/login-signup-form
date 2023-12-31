// -------- Signup/Login JS -----------------

function signupFunc(event){
    event.preventDefault();
    document.getElementById("form-signup").style.display = "block";
    document.getElementById("form-login").style.display = "none";
    console.log("test");
}

function loginFunc(event){
    event.preventDefault();
    document.getElementById("form-login").style.display = "block";
    document.getElementById("form-signup").style.display = "none";
    console.log("test");
}

// SignUp Form JS
var infoArr = [];
var userid = 5000;

function signupSub(event){
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

    var infoObj = {
        userId: ++userid,
        email: getEmail,
        name: getName,
        pass: getPass
    };

    infoArr.push(infoObj);
    console.log(infoArr);
    localStorage.setItem("users", JSON.stringify(infoArr));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    document.getElementById("create_act").reset();
}

// Login Form JS
var loginArr = [];

function loginSub(event){
    event.preventDefault();
    let jsonData = localStorage.getItem("users");
let objData = JSON.parse(jsonData);
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

                let loginInfoObj = {
                    userId: data.userId,
                    name: data.name,
                    email: data.email,
                    pass: data.pass
                };
            
                loginArr.push(loginInfoObj);
                console.log(loginArr);
            
                localStorage.setItem("login_user", JSON.stringify(loginArr));

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
}


// -------- Dashboard JS -----------------
function logoutUser() {
    localStorage.removeItem("login_user");
    // let jsonData = localStorage.getItem("users");
    // let objData = JSON.parse(jsonData);
    
    // var index = objData.findIndex(({email}) => email == 'test@test.com');
    // var newData = objData.splice(index, 1);
    // console.log(objData);
    // localStorage.setItem("users", JSON.stringify(objData));

    window.location.href = "./index.html";
};

var jsonLoginData = localStorage.getItem("login_user");
var getLoginData = JSON.parse(jsonLoginData);
var jsonAllData = localStorage.getItem("users");
var getAllData = JSON.parse(jsonAllData);
console.log(getLoginData[0].email);

getAllData.find((data) => {
    // console.log(data);

    if (getLoginData[0].email == data.email) {
                Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Loged In Successfully...',
  showConfirmButton: false,
  timer: 1500
})
document.getElementById("welUser").innerHTML = "Welcome "+data.name+" to our Dashboard";
    }

});

// let loginTodoArr = [];
// function todoSub(event){
//     event.preventDefault();

//     let getItem = document.getElementById("todoInp").value;

//     let addTodoObj = {
//         todoItem: getItem,
//     };

//     loginTodoArr.push(addTodoObj);
//     // console.log(loginTodoArr);

//     localStorage.setItem("login_user_todo", JSON.stringify(loginTodoArr));

//     var jsonAllTodo = localStorage.getItem("login_user_todo");
// var getAllTodo = JSON.parse(jsonAllTodo);
// console.log(getAllTodo);

//     // var ulItem = document.getElementById("incomplete-tasks");
//     var listItem = document.getElementById("inc_listings");
//         // var listItem = document.createElement("li");

// 	// var checkBox = document.createElement("input");
//     // checkBox.type = "checkbox";
// 	var label = document.createElement("label");
// 	var deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";


//     getAllTodo.forEach(element => {
//         label.innerHTML = element.todoItem;
//         listItem.appendChild(label);
//         listItem.appendChild(deleteButton);
//         // ulItem.appendChild(listItem);
//     });
//     document.getElementById("todoForm").reset();
// }


const $inputField = document.getElementById("todoInp");
const $btn = document.getElementById('btntodo');

$inputField.addEventListener('keyup', (e) => {
    // if ENTER key pressed
    if (e.keyCode === 13) {
      saveTodo();
    }
  });
  $btn.addEventListener('click', saveTodo);
  function saveTodo() {
    if ($inputField.value !== '') {
      const todo = saveToLocalStorage($inputField.value);
    //   $container.insertAdjacentHTML('beforeend', getTodoHTMLMarkup(todo));
    
 // var ulItem = document.getElementById("incomplete-tasks");
 var listItem = document.getElementById("inc_listings");
 // var listItem = document.createElement("li");

// var checkBox = document.createElement("input");
// checkBox.type = "checkbox";
var label = document.createElement("label");
var deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
     label.innerHTML = $inputField.value;
     listItem.appendChild(label);
     listItem.appendChild(deleteButton);
     // ulItem.appendChild(listItem);

      $inputField.value = '';
    }
  }
  function saveToLocalStorage(todoText) {
    let todos = readFromLocalStorage();
    
    // empty local storage
    if (!todos) todos = [];
    
    var jsonLoginData = localStorage.getItem("login_user");
    var getLoginData = JSON.parse(jsonLoginData);
    console.log(getLoginData);
    const todo = { id: getLoginData[0].userId, text: todoText, completed: false };
    todos.push(todo);
    localStorage.setItem('userTodos', JSON.stringify(todos));
    
    return todo;
  }

  function readFromLocalStorage() {
    const todos = localStorage.getItem('userTodos');
    return !todos ? [] : JSON.parse(todos); 
  }

function loadFunc(){
    var jsonAllTodo = localStorage.getItem("userTodos");
    var getAllTodo = JSON.parse(jsonAllTodo);
    console.log(getAllTodo);

        getAllTodo.forEach(element => {
            var jsonLoginData = localStorage.getItem("login_user");
    var getLoginData = JSON.parse(jsonLoginData);
    console.log(getLoginData);

    if(getLoginData[0].userId === element.id){
                // var ulItem = document.getElementById("incomplete-tasks");
        var listItem = document.getElementById("inc_listings");
        // var listItem = document.createElement("li");
    
    // var checkBox = document.createElement("input");
    // checkBox.type = "checkbox";
    var label = document.createElement("label");
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
            label.innerHTML = element.text;
            listItem.appendChild(label);
            listItem.appendChild(deleteButton);
            // ulItem.appendChild(listItem);
        }
        });    
}

window.onload = loadFunc();



// function addTodoFunc(){
//     var jsonAllTodo = localStorage.getItem("login_user_todo");
// var getAllTodo = JSON.parse(jsonAllTodo);
// console.log(getAllTodo);

//     var ulItem = document.getElementById("incomplete-tasks");
//         var listItem = document.createElement("li");

// 	var checkBox = document.createElement("input");
//     checkBox.type = "checkbox";
// 	var label = document.createElement("label");
// 	var deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";


//     getAllTodo.forEach(element => {
//         listItem.appendChild(checkBox);
//         listItem.appendChild(label);
//         listItem.appendChild(deleteButton);
//         label.innerHTML = element.todoItem;
//         ulItem.appendChild(listItem);
//     });
// }

// window.onload = addTodoFunc();