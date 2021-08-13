//Add a Post API
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

// Get Post Details API
function getPostDetails(id, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        callback(null, data);
      })
  }

// Fetch Table from API 
function getTableData(callback) {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(data => {
        callback(null, data);
    })
}

//  Edit Post
function editPostApi(obj, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${obj.id}`, {
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify({
        userId:obj.id,
        title:obj.title,
        body: obj.body
      })
    })
    .then(res => res.json())
    .then(data => {
        callback(null, data);
    });
}

//Delete Post API
function deletePostApi(i, callback) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
      method: 'DELETE',
  })
  .then(res => res.json())
  .then(data => {
    callback(null, data);
  })
}

//PATCH API
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

export { deletePostApi, editPostApi, getPostDetails, getTableData, addPost};