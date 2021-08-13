var users = JSON.parse(localStorage.getItem("users"));
var text = "";

//  Filling Our Table
for (i = 0; i < users.length; i++) { 
    text += "<tr>";
    text += "<td >" + users[i].username + "</td>";
    text += "<td>" + users[i].email + "</td>";
    text += "<td>" + users[i].mobile + "</td>";
    text += 
    `<td><button onclick = 'updateUser(${i})' > <i class="fa fa-pencil" aria-hidden="true" style="font-size:24px;color:white;"> </i>
    </button>  &nbsp;&nbsp;&nbsp;&nbsp;  <button onclick = 'deleteUser(${i})'> <i class="fa fa-trash" aria-hidden="true" style="font-size:24px;color:white;"> </i></button> </td> </tr>`;
}
document.getElementById("userDiv").innerHTML += text;

//  "Add Modal" Open and Close functionality
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var addbtn = document.getElementById("add");

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

addbtn.onclick = function() {
// modal.style.display = "none";
// location.reload();
}

function check(){
    let uname = document.forms["myForm"]["uname"].value;
    let passwd = document.forms["myForm"]["passwd"].value;
    let email = document.forms["myForm"]["email"].value;
    let mobile = document.forms["myForm"]["mobile"].value;
    console.log(uname,passwd,email,mobile)
    if(uname == "" || passwd == "" || email == "" || mobile == "") {
        return false;
    } else {
        addUser();
        return true;
    }
}

//  Add User Function
function addUser() {
    let obj = {
        username: document.getElementById("uname").value,
        password: document.getElementById("passwd").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value
    };
    let users = JSON.parse(localStorage.getItem("users"));
    users.push(obj);
    localStorage.setItem("users",JSON.stringify(users));
}

//  Delete User Function
function deleteUser(i) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(i, 1);
    localStorage.setItem("users",JSON.stringify(users));
    location.reload();
}

//  Update User Function
function updateUser(i) {
    let users = JSON.parse(localStorage.getItem("users"));
    let ourUser = users[i];

    //  Filling Input Fields
    document.getElementById("newuname").value = ourUser.username,
    document.getElementById("newpasswd").value = ourUser.password ,
    document.getElementById("newemail").value = ourUser.email,
    document.getElementById("newmobile").value = ourUser.mobile

    //  "Update Modal" Open and Close functionality
    var modal = document.getElementById("updateModal");
    var span = document.getElementsByClassName("close")[1];
    var updatebtn = document.getElementById("update");
    
    showModal();

    function showModal () {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    updatebtn.onclick = function() {
        let obj = {
        username: document.getElementById("newuname").value,
        password: document.getElementById("newpasswd").value,
        email: document.getElementById("newemail").value,
        mobile: document.getElementById("newmobile").value
        };

        //storing updated values
        users.splice(i, 0, obj);
        //deleting old values
        users.splice(i+1,1);

        localStorage.setItem("users", JSON.stringify(users));
        modal.style.display = "none";
        location.reload();
    }
}