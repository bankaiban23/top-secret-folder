// Function that runs when the page loads
function loadWelcome() {
    alert("Welcome to my page!");
}

// Function that changes background color of 1st paragraph on mouse enter
function changeP1Color() {
    document.querySelectorAll("p")[0].style.backgroundColor = "yellow";
}

// Function that changes background color of 3rd paragraph when mouse enters 1st paragraph
function changeP3Color() {
    document.querySelectorAll("p")[2].style.backgroundColor = "lightblue";
}

// Function that responds to double-click on 2nd paragraph
function doubleClickP2() {
    alert("You double clicked the 2nd paragraph!");
}

// Function for onmouseover event on 4th paragraph (unique event handler)
function highlightP4() {
    document.querySelectorAll("p")[3].style.backgroundColor = "lightgreen";
}
