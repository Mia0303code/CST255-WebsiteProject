// Displays a welcome message
function showWelcome() {
    alert("Welcome to my CST255 Website! Thank you for visiting!");
}

// Changes the background color of the webpage
function changeBackground() {
    document.body.style.backgroundColor = "#dbeafe";
}

// Shows or hides the skills list
function toggleSkills() {
    const skillsList = document.getElementById("skillsList");

    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
    } else {
        skillsList.style.display = "none";
    }
}

// Displays today's date
function showDate() {
    const today = new Date();
    document.getElementById("dateDisplay").innerHTML =
        "Today's Date: " + today.toDateString();
}