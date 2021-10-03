//Elements for Editing a Post//
const editBtn = document.getElementById("editBtn");
let userId = document.getElementById("userId").textContent;
let id = document.getElementById("EoDid").textContent;
console.log(userId);

//Elements for Deleting a Post//
const deleteBtn = document.getElementById('deleteBtn');

//Trigger Post Route to update Blog Post//
const editPost = async (event) => {
    event.preventDefault();
    console.log("hello");

    let title = document.getElementById('editTitle').value.trim();
    let contents = document.getElementById('editContent').value.trim();
    
    console.log(title);
    console.log(contents);
    console.log(id);
    const response = await fetch(`/api/blog/u/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, contents }),
        headers: { 'Content-Type': 'application/json' }
    })
       
    
    if (response.ok) {
        document.location.replace(`/dashboard/${userId}`)
      } else {
        alert(response.statusText);
      }
}

//Triggers Route to delete Element
const deletePost = async (event) => {
    event.preventDefault();
    console.log("hello");

    const answer = confirm("Are you sure you want to delete");

    if (answer){

        let response = await fetch(`/api/blog/${id}`, {
            method: "DELETE",
        })
            
        if (response.ok) {
            document.location.replace(`/dashboard/${userId}`)
          } else {
            alert(response.statusText);
          }

    } else {
        return;
    }
}

//Edit Post Event Listener//
editBtn.addEventListener('click', editPost)

//Delete Event Listener//
deleteBtn.addEventListener('click', deletePost)
