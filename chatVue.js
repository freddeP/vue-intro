const postId = "_321321";
new Vue({
    
    el:"#chat",
    data:{
        author: "Fredric",
        post:"<h2> This is a post with <a onclick = 'alert(1)'>click</a>",
        id : "_123",
        href : "delete.php?id="+postId,
        cars : [
            {brand: "saab", id:"2"},
            {brand: "bmw", id:"1"},
            {brand: "MB", id:"3"},
            {brand: "VW", id:"4"}
        ]    
    }
});
