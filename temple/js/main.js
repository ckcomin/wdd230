//hamburger

function toggleMenu() {
    document.getElementById("priNav").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn")
x.onclick = toggleMenu;

