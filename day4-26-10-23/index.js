const inputEL = document.querySelector(".input");
const bodyEL = document.querySelector("body");

// Retrieve the "mode" value from local storage and set it to the checkbox's checked property.
inputEL.checked = JSON.parse(localStorage.getItem("mode"));

// Call the updateBody function to set the initial background color.
updateBody();

function updateBody() {
    if (inputEL.checked) {
        bodyEL.style.background = "black";
    } else {
        bodyEL.style.background = "white";
    }
}

inputEL.addEventListener("input", () => {
    // When the input (checkbox) value changes, update the body background and local storage.
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage() {
    // Store the current state of the checkbox in local storage.
    localStorage.setItem("mode", JSON.stringify(inputEL.checked));
}
