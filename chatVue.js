const postId = "_321321";

globalCars = [
    {brand: "saab", id:"2"},
    {brand: "bmw", id:"1"},
    {brand: "MB", id:"3"},
    {brand: "VW", id:"4"}
] ;

let myVue = new Vue({
    
    el:"#chat",
    data:{
            author: "Fredric",
            post:"<h2> This is a post with <a onclick = 'alert(1)'>click</a>",
            id : "_123",
            href : "delete.php?id="+postId,
            cars : globalCars  
    
        },
        methods:{

            // funktion för att ändra på datan, carChange kommer från utsidan
            change(carChange)
            {
                this.author = "Henry";
                this.car = carChange;
            }


        }
});

// anropar funktionen efter en viss tid
setTimeout(function(){
    // Ändra på en global variabel och skickar in i vue-metoden change
    globalCars.push({brand: "Kia", id :"123"});
    myVue.change(globalCars);
},4000);

console.log(globalCars);