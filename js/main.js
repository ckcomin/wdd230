const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdate").textContent = document.lastModified;