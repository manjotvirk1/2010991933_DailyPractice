const posts=[
    {title:'Post One',body:'This is the post 1'},
    {title:'Post Two',body:'This is the post 2'},
];

function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${index}${post.title}</li>`
        });
        document.body.innerHTML=output;
    }, 1000);
}

// function createPost(post,f){
//     setTimeout(()=>{
//         posts.push(post);
//         f();
//     },2000);
// }
// getPosts();
// createPost({title:'Post Three',body:'This is the post 3'},getPosts);


// PROMISES
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const err=false;
            if(!err){
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        },2000);
    });
}

// createPost({title:'Post Three',body:'This is the post 3'}).then(getPosts).catch(err=>console.log(err));

// async/await 
async function init(){
    await createPost({title:'Post Three',body:'This is the post 3'});
    getPosts();
}
init();