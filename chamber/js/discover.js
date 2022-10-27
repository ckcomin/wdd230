const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 300px 0px 0px"
}

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    imagesToLoad.forEach((img) => {
        observer.observe(img); 
      });
}


const visit = document.querySelector("#visit-message");

let visitMessage = "This is your first visit";
let currentDay = new Date();

let lastVisitString = window.localStorage.getItem("last-visit");
if (lastVisitString != null){
    let lastVisitDate = new Date(lastVisitString);
    let dataDifference = Math.floor((currentDay.getTime() - lastVisitDate.getTime()) / (24 * 60 * 1000));
    visitMessage = `You last visited ${dataDifference} days ago.`;
}

visit.textContent = visitMessage;
window.localStorage.setItem("last-visit", today.toString());