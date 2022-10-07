const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdate").textContent = document.lastModified;
// select the elements to manipulate (output to)
const datefield = document.getElementById("currentdate");
// derive the current date using a date object
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(today);
// long, medium, short options ... try them
datefield.innerHTML = `<em>${fulldate}</em>`;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

