let temples = [
    {
        "id": "temple1",
        "name":"Rexburg Idaho Temple",
        "dedication":"10 February 2008",
        "imageURL":"https://assets.ldscdn.org/29/8a/298a8b01fbc736923e83e7c748e60abcad8511c9/rexburg_idaho_temple.jpeg"
    },
    {
        "id": "temple2",
        "name":"Idaho Falls Idaho Temple",
        "dedication":"23 September 1945",
        "imageURL":"https://assets.ldscdn.org/90/a0/90a0c0d599f94a2d955930e90fa95b9aa85a5004/idaho_falls_idaho_temple.png"
    },
    {
        "id": "temple3",
        "name":"Mount Timpanogos Utah Temple",
        "dedication":"13 October 1996",
        "imageURL":"https://assets.ldscdn.org/38/f4/38f4f0d08d11f9aa517fb57f68bbf7f95f1de7ed/mount_timpanogos_utah_temple.jpeg"
    },
    {
        "id": "temple4",
        "name":"Provo Utah Temple",
        "dedication":"9 February 1972",
        "imageURL":"https://assets.ldscdn.org/f7/43/f743a6a7ecb335e36c8847d1ed3153f44422460e/provo_temple_lds.jpeg"
    }
];

// First check to see if we need to initialize local storage with an empty array
const LIKES_KEY = "temple-likes";
let likes_string = localStorage.getItem(LIKES_KEY);
if (likes_string==null){
    likes_string="[]";
    localStorage.setItem(LIKES_KEY, likes_string);
}

// Turn the string value from local storage into a Java array
let likeslist = JSON.parse(likes_string);

// This displays the temple card as before
function displayTemple(temple){
    let main = document.querySelector("main");
    let newsection = document.createElement("section");
    newsection.innerHTML = `<h2>${temple.name}</h2>
             <h3>Dedicated on: <span id="dedication-date">${temple.dedication}</span></h3>
             <img src="${temple.imageURL}">
             <input class="mycheck" id="check-${temple.id}" type="checkbox" onclick="likeTemple(this);"> Like This Temple!`;
    main.appendChild(newsection);
}

// This function handles when a user checks an individual checkbox
// First, it updates the list of "liked" temples by either adding or removing it
// depending on if the box is checked or unchecked.
// push adds an item to a list
// splice removes an item from a list.
// Finally, the new list is put into local storage for later use. 
function likeTemple(item){
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);
    if (item.checked){
        if (!likeslist.includes(item.id)){
            likeslist.push(item.id);
        }
    }
    else{
        if (likeslist.includes(item.id)){
            likeslist.splice(likeslist.indexOf(item.id), 1);
        }
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

// Upon page reload, the list of individual items (by id) is checked.
function displayLike(item){
    let obj = document.getElementById(item);
    obj.checked = true;
}

temples.forEach(displayTemple);
likeslist.forEach(displayLike);