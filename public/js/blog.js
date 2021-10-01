const newComment = document.getElementById('newComment');
const form = document.getElementById('form');
const sBtn = document.getElementById('sBtn');
const blog_id = document.getElementById('blog_id').textContent;
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

const createComment = async (event) => {
    event.preventDefault();

    let comment = document.getElementById('comment').value.trim();
    console.log(comment);
    let newTime = new Date();
    let time = moment(newTime).format("M/D/Y H:mm A");
    console.log(time);
    

    const response = await fetch ("/api/comment", {
        method: 'POST',
        body: JSON.stringify({comment, time, blog_id}),
        headers: { 'Content-Type': 'application/json' }
    })

    if(response.ok) {
        location.reload();
    } else {
        alert("Something went wrong");
    }
}

newComment.addEventListener("click", addComment);
sBtn.addEventListener('click', createComment);