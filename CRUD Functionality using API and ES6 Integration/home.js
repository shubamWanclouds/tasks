let allPostsData = "";
let newPostData = ""; 
let postAdditionModal = document.getElementById("postAdditionModal");
let openPostAdditionModal = document.getElementById("openAddAPostModal");
let closePostAdditionModal = document.getElementsByClassName("close")[0];
let addAPostBtn = document.getElementById("add");

openPostAdditionModal.onclick = () => postAdditionModal.style.display = "block";
closePostAdditionModal.onclick = () => postAdditionModal.style.display = "none";

const fetchAllPostsAPI = callback => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(result => result.json())
  .then(data => {
    callback(null, data);
  })
}
const showAllPosts = () => {
  fetchAllPostsAPI((err, data) => {
    data.forEach((post, index) => { 
      allPostsData += `<tr id="${post.id}">`; 
      allPostsData += `<td > ${post.userId} </td>`;
      allPostsData += `<td>  ${post.id} </td>`;
      allPostsData += `<td> ${post.title} </td>`;
      allPostsData += `<td><button onclick = viewPostDetails(${post.id})><i class = "fa fa-info-circle" aria-hidden = "true" 
      style = "font-size:24px;color:white;"></i></button> &nbsp;&nbsp;&nbsp;&nbsp; <button onclick = editPost(${post.id})> 
      <i class = "fa fa-pencil" aria-hidden = "true" style = "font-size:24px;color:white;"></i></button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button onclick = deletePost(${post.id})><i class = "fa fa-trash" aria-hidden = "true" style = "font-size:24px;color:white;"> 
      </i></button> &nbsp;&nbsp;&nbsp;&nbsp; </td></tr>`;
    })
    document.getElementById("tableBody").innerHTML += allPostsData;
  })
}
showAllPosts();

const addPostAPI = callback => {
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
  .then(result => result.json())
  .then(data => {
    callback(data);
  }) 
}
addAPostBtn.onclick = () => {
  addPostAPI((data) => {
    console.log(`Post with Following Data Added Successfully, ${JSON.stringify(data)}`);
    newPostData += `<tr id = "${data.id}">`;
    newPostData += `<td>${data.userId}</td>`;
    newPostData += `<td>${data.id}</td>`;
    newPostData += `<td>${data.title}</td>`;
    newPostData += `<td><button onclick = viewPostDetails()><i class = "fa fa-info-circle" aria-hidden = "true" 
    style = "font-size:24px;color:white;"></i></button> &nbsp;&nbsp;&nbsp;&nbsp; <button onclick = editPost()> 
    <i class = "fa fa-pencil" aria-hidden = "true" style = "font-size:24px;color:white;"></i></button>  
    &nbsp;&nbsp;&nbsp;&nbsp; <button onclick = deletePost()><i class = "fa fa-trash" aria-hidden = "true" 
    style = "font-size:24px;color:white;"></i></button> &nbsp;&nbsp;&nbsp;&nbsp; </td> </tr>`;
    document.getElementById("tableBody").innerHTML += newPostData;
    postAdditionModal.style.display = "none";
  })
}

const getPostDetails = (postId, callback) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(result => result.json())
  .then(data => {
    callback(null, data);
  })
}
const viewPostDetails = postId => {
  getPostDetails(postId , (err, data) => {
    document.getElementById("detailsContainer").innerHTML = `<br> <p>userId : ${data.userId} </p> <br> 
    <p> Id : ${data.id }</p> <br> <p>Title : ${data.title} </p> <br> <p>Body : ${data.body}</p> <br>`;
    
    let postDetailsModal = document.getElementById("viewPostDetailsModal");
    let closePostDetailsModal = document.getElementsByClassName("close")[1];
    
    const showPostDetailsModal = () => {
      postDetailsModal.style.display = "block";
    }
    showPostDetailsModal();
    closePostDetailsModal.onclick = function() {
      postDetailsModal.style.display = "none";
    }
  })
}

const editPostApi = (obj, callback) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${obj.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      userId: obj.userId,
      title: obj.title,
      body: obj.body
    })
  })
  .then(res => res.json())
  .then(data => {
    callback(null, data);
  });
}  
const editPost = postId => {
  getPostDetails(postId, (err, data) => {
    document.getElementById("editPostModalUserId").value = data.userId;
    document.getElementById("editPostModalTitle").value = data.title ;
    document.getElementById("editPostModalBody").value = data.body ;  
    
    let PostUpdationModal = document.getElementById("PostUpdationModal");
    let closePostUpdationModal = document.getElementsByClassName("close")[2];
    let updateBtn = document.getElementById("update");
  
    const showPostUpdationModal = () => {
      PostUpdationModal.style.display = "block";
    }
    showPostUpdationModal();
    
    closePostUpdationModal.onclick = () => {
      PostUpdationModal.style.display = "none";
    }
    updateBtn.onclick = () => {
      let obj2 = {
        id: postId,
        userId: document.getElementById("editPostModalUserId").value,
        title: document.getElementById("editPostModalTitle").value,
        body: document.getElementById("editPostModalBody").value,
      };
      editPostApi(obj2, (err, data) => {
        console.log(`Post with id ${postId} is now Modified as following: ${JSON.stringify(data)}`);
        PostUpdationModal.style.display = "none";
      })
    }
  })  
}

const deletePostApi = (postId, callback) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(data => {
    callback(null, data);
  })
}
const deletePost = postId => {
  deletePostApi(postId, (err, data) => {
    alert(`Post with id ${postId} deleted Successfully!`);
    document.getElementById(postId).remove();
  })
}

  
  

