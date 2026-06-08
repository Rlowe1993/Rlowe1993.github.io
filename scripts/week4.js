if (localStorage.getItem("darkMode") === "enabled") {
    document.documentElement.classList.add("dark-mode");
}

/**
 * Performs the toggling of Dark Mode when any Dark Mode button is used
 */
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle("dark-mode");

    darkButtons.forEach((btn) => {
        btn.textContent = isDark ? "Light Mode" : "Dark Mode";
    });

    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

function main() {
    window.darkButtons = document.querySelectorAll(".dark-toggle");

    if (document.documentElement.classList.contains("dark-mode")) {
        darkButtons.forEach((btn) => (btn.textContent = "Light Mode"));
    }

    // Dark mode toggle
    darkButtons.forEach((button) => {
        button.addEventListener("click", toggleDarkMode);
    });

    // Modal Window Logic
    const welcomeOverlay = document.getElementById("welcomeOverlay");
    const closeModal = document.getElementById("closeModal");

    closeModal.addEventListener("click", () => {
        welcomeOverlay.style.display = "none";
    });
}

// Prevents race conditions
document.addEventListener("DOMContentLoaded", main);
