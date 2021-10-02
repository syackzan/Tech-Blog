// Elements In For Adding New Post//
const showPost = document.getElementById('newPost');
const postForm = document.getElementById('postForm')
const postBtn = document.getElementById('postBtn')


//Elements For Adding New Comment//
const newComment = document.getElementById('newComment');
const commentForm = document.getElementById('form');
const sCommentBtn = document.getElementById('sBtn');



//Function to make the Post Form Visible or Invisible
const addPost = () => {

    let visible = false;

    if (!visible){
        postForm.style.display = "block";
        visible = true;
    } else {
        postForm.style.display = "none";
        visible = false;
    }
}

// Function to set up POST Route to Add new Blog Post
const createPost = async (event) => {
    event.preventDefault();

    let title = document.getElementById('title').value.trim();
    let contents = document.getElementById('content').value.trim();
    let user_id = document.getElementById('user_id').textContent;
    
    let newTime = new Date();
    let date_created = moment(newTime).format("M/D/Y H:mm A");
    
    

    const response = await fetch ("/api/blog", {
        method: 'POST',
        body: JSON.stringify({title, contents, date_created, user_id}),
        headers: { 'Content-Type': 'application/json' }
    })

    if(response.ok) {
        location.reload();
    } else {
        alert("Something went wrong");
    }
}

// Function to Make the Add Comment Form Visibile Or Invisible
const addComment = () => {
    
    let visible = false;

    if (!visible){
        commentForm.style.display = "block";
        visible = true;
    } else {
        commentForm.style.display = "none";
        visible = false;
    }
}

// Function to set up POST Route to Add new Comment
const createComment = async (event) => {
    event.preventDefault();

    let comment = document.getElementById('comment').value.trim();
    console.log(comment);
    let newTime = new Date();
    let time = moment(newTime).format("M/D/Y H:mm A");
    let blog_id = document.getElementById('blog_id').textContent;
    

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


// Make post form visible/invisible event Listener
showPost.addEventListener("click", addPost);
postBtn.addEventListener('click', createPost)

//Make comment form visible/invisible event Listener
newComment.addEventListener("click", addComment);
sCommentBtn.addEventListener('click', createComment);