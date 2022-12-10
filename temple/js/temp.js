let temples = [
    {
        "id": "temple1",
        "name":"Star Valley",
        "address": "885 S Washington St, Afton WY 83110, United States",
        "phone": "307-886-6820",
        "dedication":"30 October 2016",
        "imageURL":"https://ckcomin.github.io/wdd230/temple/images/temp-star.jpg"
    },
    {
        "id": "temple2",
        "name":"Meridian",
        "address": "7355 N Linder Rd, Meridian ID 83646, United States",
        "phone": "208-957-7300",
        "dedication":"19 November 2017",
        "imageURL":"https://ckcomin.github.io/wdd230/temple/images/temp-Meridian.jpg"
    },
    {
        "id": "temple3",
        "name":"Cedar City",
        "address": "280 South Cove Dr, Cedar City UT 84720, United States",
        "phone": "435-572-4150",
        "dedication":"10 December 2017",
        "imageURL":"https://ckcomin.github.io/wdd230/temple/images/temp-cedar.jpg"
    },
    {
        "id": "temple4",
        "name":"Boise",
        "address": "1211 S Cole Rd, Boise ID 83709-1871, United States",
        "phone": "208-322-4422",
        "dedication":"25 May 1984",
        "imageURL":"https://ckcomin.github.io/wdd230/temple/images/temp-boise.jpg"
    }
];

const LIKES_KEY = "temple-likes";
let likes_string = localStorage.getItem(LIKES_KEY);
if (likes_string==null){
    likes_string="[]";
    localStorage.setItem(LIKES_KEY, likes_string);
}

let likeslist = JSON.parse(likes_string);

function displayTemple(temple){
    let main = document.querySelector("section");
    let newsection = document.createElement("section");
    newsection.innerHTML = `
             <div id="cardWord">
                <h2>${temple.name}</h2>
                <h3><span id="address">${temple.address}</span></h3>
                <p>Phone: <span id="phone">${temple.phone}</span></p>
                <p>Dedicated: <span id="dedication-date">${temple.dedication}</span></p>
                <div id="check"><label><input class="mycheck" id="check-${temple.id}" type="checkbox" onclick="likeTemple(this);">Like This Temple!</label></div>
             </div>
             <div id="cardImg">
                <img src="${temple.imageURL}" alt="${temple.name}-temple">
                <a id="tempResBtn" class='btn' href="reservation.html">Reserve Now!</a>
             </div>
             `;
    main.appendChild(newsection);
}

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

function displayLike(item){
    let obj = document.getElementById(item);
    obj.checked = true;
}

temples.forEach(displayTemple);
likeslist.forEach(displayLike);