async function getPosts(){
    const elPosts = document.getElementById("posts");
    try{
        
        const response = await Poster.getPosts();
        
        response.forEach(post => {
            elPosts.appendChild(Poster.createPostTemplate(post));
        });

    }
    catch(e){
        console.error(e);
    }
}

getPosts();

async function filterGetPosts(){
    const elPosts = document.getElementById("posts");
    elPosts.innerText = "";
    const elSearch = document.getElementById("searchBar");
    console.log("searching")
    console.log(elSearch.value)
    try{
        const response = await Poster.getPosts();
        console.log(response.filter(posts => posts.title.includes(elSearch.value)))

        const result = response.filter(posts => posts.title.includes(elSearch.value));
        
        result.forEach( posts => {
            elPosts.appendChild(Poster.createPostTemplate(posts));
        });

    }
    catch(e){
        console.error(e);
    }
}