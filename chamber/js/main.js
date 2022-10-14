const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdate").textContent = document.lastModified;
// select the elements to manipulate (output to)
const datefield = document.getElementById("currentdate");
// derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);
// long, medium, short options ... try them
datefield.innerHTML = `<em>${fulldate}</em>`;

//hamburger

function toggleMenu() {
    document.getElementById("priNav").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn")
x.onclick = toggleMenu;

// banner

if (today.getDay() == 1){
   const pthing = document.querySelector("header p")
   pthing.style.display='block'
}

if (today.getDay() == 2){
    const pthing = document.querySelector("header p")
    pthing.style.display='block'
 }