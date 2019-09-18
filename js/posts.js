// IIFE.
const Poster = (function(){

    //private
    let posts = [];

    //Public
    return {
        getPosts(){
            return fetch('https://jsonplaceholder.typicode.com/posts')
                .then(resp => resp.json());
        },
        createPostTemplate(post) {
            const postDiv = document.createElement('div');
            const postTitle = document.createElement('h4');
            const postBody = document.createElement('p');
            const postLink = document.createElement('a');

            postTitle.innerText = post.title;
            postBody.innerText = post.body;
            postLink.innerText = 'View comments';
            postLink.href = `/comments.html?post=${post.id}`;
            postDiv.appendChild(postTitle);
            postDiv.appendChild(postBody);
            postDiv.appendChild(postLink);

            return postDiv;
        },
        getComments(){
            return fetch('https://jsonplaceholder.typicode.com/comments')
            .then(resp => resp.json());
        },

        createCommentTemplate(comments){
            const commentsDiv = document.createElement('div');
            const commentsName = document.createElement('h4');
            const commentsBody = document.createElement('p');
            commentsName.innerText = comments.name;
            commentsBody.innerText = comments.body;

            commentsDiv.appendChild(commentsName);
            commentsDiv.appendChild(commentsBody);
            return commentsDiv;
        }
    }
})();