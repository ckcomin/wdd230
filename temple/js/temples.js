const LIKES_KEY = "temple-likes";
let likes_string = localStorage.getItem(LIKES_KEY);
if (likes_string==null){
    likes_string="[]";
    localStorage.setItem(LIKES_KEY, likes_string);
}

// Turn the string value from local storage into a Java array
let likeslist = JSON.parse(likes_string);

const requestURL = 'https://ckcomin.github.io/wdd230/temple/json/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemple);
});

// This displays the temple card as before
function displayTemple(temple){
    let main = document.querySelector("main");
    let newsection = document.createElement("section");
    newsection.innerHTML = `<h2>${temple.name}</h2>
              <p>Services: <span id="services">${temple.services}</span></p>
             <p>History: <span id="history">${temple.history}</span></p>
             <p>Closures: <span id="closure">${temple.closure}</span></p>
             <img src="${temple.imageURL}">
             <input class="mycheck" id="check-${temple.id}" type="checkbox" onclick="likeTemple(this);"> Like This Temple!`;
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

// Upon page reload, the list of individual items (by id) is checked.
function displayLike(item){
  let obj = document.getElementById(item);
  obj.checked = true;
}

temples.forEach(displayTemple);
likeslist.forEach(displayLike);




// function displayCompanies(company) {  
//     // Create elements to add to the document
//     let card = document.createElement('section');
//     let p = document.createElement('p');    
//     let p = document.createElement('p');   
//     let p2 = document.createElement('p');
//     let p3 = document.createElement('li');
//     let p4 = document.createElement('li');
//     let p5 = document.createElement('li');

//     // Change the textContent property of the h2 element to contain the company's full name
//     p.textContent = company.name;
//     p.textContent = company.address;
//     p2.textContent = company.phone;
//     p3.textContent = company.services;
//     p4.textContent = company.history;
//     p5.textContent = company.closure;

//     // Add/append the section(card) with the h2 element
//     card.appendChild(p);
//     card.appendChild(p);
//     card.appendChild(p2);
//     card.appendChild(p3);
//     card.appendChild(p4);
//     card.appendChild(p5);

//     // Add/append the existing HTML div with the cards class with the section(card)
//     document.querySelector('div.cards').appendChild(card); 
// }

// const likeBtn = document.querySelector(".like__btn");
// let likeIcon = document.querySelector("#icon"),
//   count = document.querySelector("#count");

// let clicked = false;


// likeBtn.addEventListener("click", () => {
//   if (!clicked) {
//     clicked = true;
//     likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
//     count.textContent++;
//     localStorage.removeItem(likeBtn, 'true');
//   } else {
//     clicked = false;
//     likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
//     count.textContent--;
//     localStorage.setItem(likeBtn, 'true');
//   }
//   localStorage.setItem(likeBtn, count);
// });


