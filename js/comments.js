var urlParams = new URLSearchParams(window.location.search);
async function getComments(){
    const elPosts = document.getElementById("comments");
    try{
        
        const response = await Poster.getComments();
        
        const result = response.filter(comment => comment.postId == urlParams.get('post'));
        
        result.forEach( comment => {
            elPosts.appendChild(Poster.createCommentTemplate(comment));
        });
        // response.forEach(comment => {
            
        //     if(comment.postId == urlParams.get('post')){
        //         elPosts.appendChild(Poster.createCommentTemplate(comment));
        //     }
        // });

    }
    catch(e){
        console.error(e);
    }
}
getComments()