if (localStorage.getItem("darkMode") === "enabled") {
    document.documentElement.classList.add("dark-mode");
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle("dark-mode");

    document.querySelectorAll(".dark-toggle").forEach((btn) => {
        btn.textContent = isDark ? "Light Mode" : "Dark Mode";
    });

    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".dark-toggle");

    if (document.documentElement.classList.contains("dark-mode")) {
        buttons.forEach((btn) => (btn.textContent = "Light Mode"));
    }

    buttons.forEach((btn) => btn.addEventListener("click", toggleDarkMode));
});
