//Elements for Editing a Post//
const editBtn = document.getElementById("editBtn");

//Elements for Deleting a Post//
const deleteBtn = document.getElementById('deleteBtn');

//Trigger Post Route to update Blog Post//
const editPost = async () => {

    let title = document.getElementById('editTitle').value.trim();
    let contents = document.getElementById('editContent').value.trim();
    let id = document.getElementById("EoDid").textContent;
    let userId = document.getElementById("userId").textContent;
    
    const response = await fetch(`/api/blog/u/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, contents }),
        headers: { 'Content-Type': 'application/json' }
    })
        
    if (response.ok) {
        document.location.replace(`/dashboard/${userId}`);
      } else {
        alert(response.statusText);
      }
}

//Triggers Route to delete Element
const deletePost = async () => {

    let answer = confirm("Are you sure you want to delete");

    if (answer){

        let id = document.getElementById("EoDid").textContent;
        let userId = document.getElementById("userId").textContent;
        
        const response = await fetch(`/api/blog/${id}`, {
            method: "DELETE",
        })
            
        if (response.ok) {
            location.href = (`/dashboard/${userId}`);
        } else {
            alert(response.statusText);
        }
    }
    return;
}

//Edit Post Event Listener//
editBtn.addEventListener('click', editPost)

//Delete Event Listener//
deleteBtn.addEventListener('click', deletePost)
