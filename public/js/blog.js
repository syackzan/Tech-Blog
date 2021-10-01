const newComment = document.getElementById('newComment');
const form = document.getElementById('form');
let visible = false;

const addComment = () => {
    
    if (!visible){
        form.style.display = "block";
        visible = true;
    } else {
        form.style.display = "none";
        visible = false;
    }
}

newComment.addEventListener("click", addComment);

// function openProjectModal (){
//     $(function () {
//         myModal.modal("show");
//     });
// }

// const addNewProject = async (event) => {
//     event.preventDefault();

//     let converter = false;
//     let name = document.getElementById('name').value.trim();
//     let address = document.getElementById('address').value.trim();
//     let cost = parseInt(document.getElementById('cost').value.trim());
//     let description = document.getElementById('description').value.trim();
//     let owner = parseInt(document.getElementById('owner').value.trim());

//     console.log(name);
//     console.log(cost);
//     console.log(address);
//     console.log(description);
//     console.log(owner)

//     if (name && address && cost && description && owner){
//         const response = await fetch ('/api/projects', {
//             method: 'POST',
//             body: JSON.stringify({name, address, cost, description, owner}),
//             headers: {'Content-Type': 'application/json'}
//         });
        
//         converter = true;
//     }

//     if (converter){
//         $(function () {
//             myModal.modal("hide");
//             location.reload();
//         });
//     }
// }



// newProject.click(openProjectModal);
// addProjectBtn.addEventListener('click', addNewProject);