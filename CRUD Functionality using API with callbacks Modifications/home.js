let text = "";
let newtext = "";

//  "Add Modal" Open and Close functionality
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let addbtn = document.getElementById("add");

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";

//Add a Post 
const addPost = callback => {
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

addbtn.onclick = () => {
  addPost((data) => {
    console.log(`Post with Following Data Added Successfully, ${data}`);
    newtext += `<tr id="${data.id}">`;
    newtext += "<td >" + data.userId + "</td>";
    newtext += "<td>" + data.id + "</td>";
    newtext += "<td>" + data.title + "</td>";
    newtext += 
    `<td><button onclick = viewPostDetails() > <i class="fa fa-info-circle" aria-hidden="true" style="font-size:24px;color:white;"> </i>
    </button>  &nbsp;&nbsp;&nbsp;&nbsp; <button onclick = editPost() > <i class="fa fa-pencil" aria-hidden="true" style="font-size:24px;color:white;"> </i>
    </button>  &nbsp;&nbsp;&nbsp;&nbsp; <button onclick = deletePost() > <i class="fa fa-trash" aria-hidden="true" style="font-size:24px;color:white;"> </i>
    </button>  &nbsp;&nbsp;&nbsp;&nbsp;  </td> </tr>`;
    
    document.getElementById("userDiv").innerHTML += newtext;
    modal.style.display = "none";
  })
}

// Get Post Details
const getPostDetails = (id, callback) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => {
      callback(null, data);
    })
}

const viewPostDetails = id => {
  getPostDetails(id , (err, data) => {
    document.getElementById("detailsContainer").innerHTML = `<br> <p>userId : ${data.userId} </p> <br> 
    <p> Id : ${data.id }</p> <br> <p>Title : ${data.title} </p> <br> <p>Body : ${data.body}</p> <br>`
    
    //  "View Modal" Open and Close functionality
    let modal = document.getElementById("viewModal");
    let span = document.getElementsByClassName("close")[1];
    
    const showModal = () => {
      modal.style.display = "block";
    }
    showModal();
    span.onclick = function() {
        modal.style.display = "none";
    }
  })
}

// Fetch Data from API 
const getTableData = callback => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(res => res.json())
  .then(data => {
      callback(null, data);
  })
}

const tableData = () => {
  getTableData((err, data) => {
    //  Filling Our Table
    for (let i = 0; i < data.length; i++) { 
      text += `<tr id="${data[i].id}">`
      text += `<td > ${data[i].userId} </td>`
      text += `<td>  ${data[i].id} </td>`
      text += `<td> ${data[i].title} </td>`
      text += 
      `<td><button onclick = viewPostDetails(${data[i].id}) > <i class="fa fa-info-circle" aria-hidden="true" style="font-size:24px;color:white;"> </i>
      </button>  &nbsp;&nbsp;&nbsp;&nbsp; <button onclick = editPost(${data[i].id}) > <i class="fa fa-pencil" aria-hidden="true" style="font-size:24px;color:white;"> </i>
      </button>  &nbsp;&nbsp;&nbsp;&nbsp; <button onclick = deletePost(${data[i].id}) > <i class="fa fa-trash" aria-hidden="true" style="font-size:24px;color:white;"> </i>
      </button>  &nbsp;&nbsp;&nbsp;&nbsp;  </td> </tr>`;
    }
    globalData = data;
    document.getElementById("userDiv").innerHTML += text;
  })
}
tableData();

//  Edit Post
const editPostApi = (obj, callback) => {
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
  
const editPost = i => {
  getPostDetails(i, (err, data) => {
    //  Filling Input Fields
    document.getElementById("userId2").value = data.userId,
    document.getElementById("title2").value = data.title ,
    document.getElementById("body2").value = data.body   
    
    //  "Update Modal" Open and Close functionality
    let modal = document.getElementById("updateModal");
    let span = document.getElementsByClassName("close")[2];
    let updatebtn = document.getElementById("update");
  
    const showModal = () => {
      modal.style.display = "block";
    }
    showModal();
    
    span.onclick = () => {
      modal.style.display = "none";
    }
    updatebtn.onclick = () => {
      let obj2 = {
        id:i,
        userId: document.getElementById("userId2").value,
        title: document.getElementById("title2").value,
        body: document.getElementById("body2").value,
      };
      editPostApi(obj2, (err, data) => {
          console.log(`Post with id ${i} is now Modified as following: ${JSON.stringify(data)}`)
           modal.style.display = "none";
      })
    }
  })  
}

//Delete Post
const deletePostApi = (i, callback) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(data => {
    callback(null, data);
  })
}

const deletePost = i => {
  deletePostApi(i, (err, data) => {
    alert(`Post with id ${i} deleted Successfully!`)
    document.getElementById(i).remove();
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
  .then(data => console.log(data))


  
  

