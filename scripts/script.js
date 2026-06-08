// Global Constants
const SKILLS = ["HTML", "CSS", "Python", "JavaScript", "Rust"];

// Helper function to determine if device is a touchscreen
function isTouchDevice() {
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

function main() {
    // Accordion open/close
    const accessibilityMenu = document.getElementById("accessibilityMenu");
    const accessibilityToggle = document.getElementById("accessibilityToggle");
    const accessibilityPanel = document.getElementById("accessibilityPanel");

    // Event listener for touchscreen tap to open
    accessibilityToggle.addEventListener("click", (event) => {
        if (!isTouchDevice()) return;

        event.stopPropagation();
        accessibilityPanel.classList.remove("closed");
    });

    // Event listener listener for touchscreen tap to close
    document.addEventListener("click", (event) => {
        if (!isTouchDevice()) return;

        if (!accessibilityMenu.contains(event.target)) {
            accessibilityPanel.classList.toggle("closed");
        }
    });

    // Dyslexic font toggle
    const dysToggle = document.getElementById("toggleDyslexic");
    dysToggle.addEventListener("click", () => {
        document.body.classList.toggle("dyslexic-mode");
    });

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
    const skillsList = document.getElementById("skillsList");

    SKILLS.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Create a banner at the top of the page
    const banner = document.createElement("div");
    banner.textContent = "WEEK 4 Of JAVASCRIPT";

    Object.assign(banner.style, {
        backgroundColor: "#222",
        color: "white",
        padding: "10px",
        textAlign: "center",
    });

    // Add it to the very top
    document.body.prepend(banner);

    // Force scroll to top
    window.scrollTo(0, 0);

    const sections = document.querySelectorAll(
        "#about, #projects, #contact, #featured",
    );

    sections.forEach((section) => {
        section.addEventListener("mouseenter", () =>
            section.classList.add("section-hover"),
        );
        section.addEventListener("mouseleave", () =>
            section.classList.remove("section-hover"),
        );
    });

    const form = document.querySelector("#contact form");
    const nameInput = document.getElementById("contactName");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();

        const statusMessage = document.createElement("p");
        statusMessage.textContent = "Sending Message...";

        Object.assign(statusMessage.style, {
            backgroundColor: "#ff9800",
            color: "white",
            padding: "10px",
            marginTop: "10px",
        });

        form.appendChild(statusMessage);

        // Create confirmation message
        setTimeout(() => {
            statusMessage.style.backgroundColor = "#4CAF50";
            statusMessage.textContent = `Message sent successfully, ${name || "guest"}!`;
        }, 3000);

        form.reset();
    });
}

// Prevents race conditions
document.addEventListener("DOMContentLoaded", main);
