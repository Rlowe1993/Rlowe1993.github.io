// Prompt user for their name
const userName = prompt("Welcome! What is your name?");

// Update welcome message dynamically
const welcomeMessage = document.getElementById("welcomeMessage");

if (userName && userName.trim() !== "") {
    welcomeMessage.textContent = `Welcome, ${userName}!`;
} else {
    welcomeMessage.textContent = "Welcome to my page!";
}

// Accordion open/close
const accessibilityMenu = document.getElementById("accessibility")
const accessibilityToggle = document.getElementById("accessibilityToggle");
const accessibilityPanel = document.getElementById("accessibilityPanel");

// Event listener for touchscreen tap to open
accessibilityToggle.addEventListener("click", (event) => {
    if (!isTouchDevice()) return;
    
    event.stopPropagation();
    const isOpen = accessibilityPanel.style.display === "flex";
    accessibilityPanel.style.display = isOpen ? "none" : "flex";
});

// Event listener listener for touchscreen tap to close
document.addEventListener("click", (event) => {
    if (!isTouchDevice()) return;
    
    if (!accessibilityMenu.contains(event.target)) {
        accessibilityPanel.style.display = "none";
    }
})

// Dyslexic font toggle
const dysToggle = document.getElementById("toggleDyslexic");
dysToggle.addEventListener("click", () => {
    document.body.classList.toggle("dyslexic-mode");
});

// Helper function to determine if device is a touchscreen
function isTouchDevice() {
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

// Conditional Logic for Featured Content

const projectImages = document.querySelectorAll("#projects img");
const universityDiv = document.getElementById("universityResources");
const personalDiv = document.getElementById("personalProjects");

if (projectImages.length < 3) {
    universityDiv.style.display = "";
    personalDiv.style.display = "";
} else {
    universityDiv.style.display = "none";
    personalDiv.style.display = "";
}

// Skills Loop

const skills = ["HTML", "CSS", "Python", "JavaScript", "Rust"];
const skillsList = document.getElementById("skillsList");

skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Dark mode toggle
const darkButtons = document.querySelectorAll(".dark-toggle");

darkButtons.forEach(button => {
    button.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        darkButtons.forEach(btn => {
            btn.textContent = isDark ? "Light Mode" : "Dark Mode";
        });
    });
});