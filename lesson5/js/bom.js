const myInput = document.getElementById("favchap");
const myList = document.querySelector(".list");
const myBtn = document.querySelector("main div button");

myBtn.addEventListener('click', () => {

if (myInput.value==""){
        return;
    };

    const newItem = document.createElement("li");

    const newBtn = document.createElement("button");

    newItem.textContent = myInput.value;

    newBtn.textContent = "❌";

    newItem.append(newBtn);

    myList.append(newItem);

    newBtn.addEventListener("click", () => {
        newItem.remove();
    });

    myInput.focus();

    myInput.value="";
});
