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

accessibilityToggle.addEventListener("click", (event) => {
    if (!isTouchDevice()) return;
    
    event.stopPropagation();
    const isOpen = accessibilityPanel.style.display === "flex";
    accessibilityPanel.style.display = isOpen ? "none" : "flex";
});

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

// Dark mode toggle
const darkToggle = document.getElementById("toggleDarkMode");

darkToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode")
    darkToggle.textContent = isDark ? "Light Made" : "Dark Mode";
});

function isTouchDevice() {
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}