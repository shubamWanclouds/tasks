var text = "";

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

//Add a Post 
function addPost(callback) {
  fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    userId: document.getElementById("userId").value,
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
    })
  })
    .then(res => res.json())
    .then(data => {
    callback(data);
    }) 
}

addbtn.onclick = function() {
  addPost((data) => {
    console.log("Post with Following Data Added Successfully", data)  
  })
  modal.style.display = "none";
}

// Get Post Details
function getPostDetails(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => {
      callback(null, data);
    })
}

function viewPostDetails(id) {
  getPostDetails(id , (err, data) => {
    document.getElementById("detailsContainer").innerHTML = '<p>userId : '+ data.userId + '</p>' + '<br>' 
    + '<p>Id : '+ data.id + '</p>' + '<br>'
    + '<p>Title : '+ data.title + '</p>' + '<br>'
    + '<p>Body : '+ data.body + '</p>' + '<br>'
    
    //  "View Modal" Open and Close functionality
    var modal = document.getElementById("viewModal");
    var span = document.getElementsByClassName("close")[1];
    showModal();
    function showModal () {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
  })
}

// Fetch Data from API 
function getTableData(callback) {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(data => {
        callback(null, data);
    })
}

function tableData() {
  getTableData((err, data) => {
    //  Filling Our Table
    for (let i = 0; i < data.length; i++) { 
        text += "<tr>";
        text += "<td >" + data[i].userId + "</td>";
        text += "<td>" + data[i].id + "</td>";
        text += "<td>" + data[i].title + "</td>";
        text += 
        `<td><button onclick = viewPostDetails(${data[i].id}) > <i class="fa fa-info-circle" aria-hidden="true" style="font-size:24px;color:white;"> </i>
        </button>  &nbsp;&nbsp;&nbsp;&nbsp; <button onclick = editPost(${data[i].id}) > <i class="fa fa-pencil" aria-hidden="true" style="font-size:24px;color:white;"> </i>
        </button>  &nbsp;&nbsp;&nbsp;&nbsp; <button onclick = deletePost(${data[i].id}) > <i class="fa fa-trash" aria-hidden="true" style="font-size:24px;color:white;"> </i>
        </button>  &nbsp;&nbsp;&nbsp;&nbsp;  </td> </tr>`;
    }
    document.getElementById("userDiv").innerHTML += text;
  })
}

tableData();

//  Edit Post
function editPostApi(obj, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${obj.id}`, {
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify({
        userId:obj.userId,
        title:obj.title,
        body: obj.body
      })
    })
    .then(res => res.json())
    .then(data => {
        callback(null, data);
    });
}
  
function editPost(i) {

    getPostDetails(i, (err, data) => {
      //  Filling Input Fields
      document.getElementById("userId2").value = data.userId,
      document.getElementById("title2").value = data.title ,
      document.getElementById("body2").value = data.body   
      
      //  "Update Modal" Open and Close functionality
    let modal = document.getElementById("updateModal");
    let span = document.getElementsByClassName("close")[2];
    let updatebtn = document.getElementById("update");
    
    showModal();

    function showModal () {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    updatebtn.onclick = function() {
        let obj2 = {
          id:i,
          userId: document.getElementById("userId2").value,
          title: document.getElementById("title2").value,
          body: document.getElementById("body2").value,
        };

        editPostApi(obj2, (err, data) => {
            console.log(`Post with id ${i} is now Modified as userId: ${data.userId} title: ${data.title} body: ${data.body}`)
            modal.style.display = "none";
        })
    }
    })  
}

//Delete Post
function deletePostApi(i, callback) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
      method: 'DELETE',
  })
  .then(res => res.json())
  .then(data => {
    callback(null, data);
  })
}

function deletePost(i) {
  deletePostApi(i, (err, data) => {
    alert(`Post with id ${i} deleted Successfully!`)
  })
}

  //PATCH Method
  fetch("https://jsonplaceholder.typicode.com/posts/2", {
      method: 'PATCH',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({
          title:"Modification",
          body:"I have successfully modified using patch method"
      })
  })
  .then(res => res.json())
  .then(data =>console.log(data))


  
  

