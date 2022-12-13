const LIKES_KEY = "temple-likes";
function initTempleLikes(){
    let likes_string = localStorage.getItem(LIKES_KEY);
    if (likes_string==null){
        likes_string="[]";
        localStorage.setItem(LIKES_KEY, likes_string);
    }
}
function displayTemple(temple){
    let main = document.querySelector("section");
    let newsection = document.createElement("section");
    newsection.innerHTML = `
             <div id="cardWord">
                <h2>${temple.name}</h2>
                <p><span id="address">${temple.address}</span></p>
                <p>Phone: <span id="phone">${temple.phone}</span></p>
                <p id="dedication-date">Dedicated: <span>${temple.dedication}</span></p>
                <div id="check"><label><input class="mycheck" id="check-${temple.id}" type="checkbox" onclick="likeTemple(this);">Like This Temple!</label></div>
             </div>
             <div id="cardImg">
                <a href="reservation.html"><img src="${temple.imageURL}" alt="${temple.name}-temple" width="280px" height="448px"></a>
                <a id="tempResBtn" class='btn' href="reservation.html">Reserve Now!</a>
             </div>`;
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
let requestURL = "json/temples.json";
initTempleLikes();
fetch(requestURL)
        .then((response) => {            
            return response.json();
        })
        .then((jsonObject) => {          
          let temples = jsonObject['temples'];
            temples.forEach(displayTemple);
        })
        .then(() => {
            let likes_string = localStorage.getItem(LIKES_KEY);
            let likeslist = JSON.parse(likes_string);            
            likeslist.forEach(displayLike);
        });