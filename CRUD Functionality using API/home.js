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

addbtn.onclick = function() {

//  let obj= {
//     userId: document.getElementById("userId").value,
//     title: document.getElementById("title").value,
//     body: document.getElementById("body").value  
//  }
//  console.log(obj);
  //Add a Post 
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
  }).then(res => console.log(res))
    .then(data => console.log(data)); 
    
    //hide modal
    modal.style.display = "none";
    // location.reload();
  }

//  View Post Function
function viewDetails(id) {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
         
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
      });
}

// Fetch Data from API 
fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(res => res.json())
  .then(data => {
      
    //  Filling Our Table
    for (i = 0; i < data.length; i++) { 
        text += "<tr>";
        text += "<td >" + data[i].userId + "</td>";
        text += "<td>" + data[i].id + "</td>";
        text += "<td>" + data[i].title + "</td>";
        text += 
        `<td><button onclick = 'viewDetails(${data[i].id})' > <i class="fa fa-info-circle" aria-hidden="true" style="font-size:24px;color:white;"> </i>
        </button>  &nbsp;&nbsp;&nbsp;&nbsp; </td> </tr>`;
    }
    document.getElementById("userDiv").innerHTML += text;
  });


  //PUT Method
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: 'PUT',
      headers:{
          'content-type': 'application/json'
      },
      body:JSON.stringify({
           userId:1,
           id:1,
           title:"title changed"
      })
  })
  .then(res => res.json())
  .then(data => console.log(data));

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

  //Delete Method
  fetch("https://jsonplaceholder.typicode.com/posts/3", {
      method: 'DELETE',
  })
  .then(res => res.json())
  .then(data =>console.log(data))
  

