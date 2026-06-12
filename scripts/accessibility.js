function isTouchDevice() {
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("accessibilityMenu");
    const toggle = document.getElementById("accessibilityToggle");
    const panel = document.getElementById("accessibilityPanel");

    // Touchscreen open
    toggle.addEventListener("click", (event) => {
        if (!isTouchDevice()) return;
        event.stopPropagation();
        panel.classList.remove("closed");
    });

    // Touchscreen close
    document.addEventListener("click", (event) => {
        if (!isTouchDevice()) return;
        if (!menu.contains(event.target)) {
            panel.classList.toggle("closed");
        }
    });

    // Dyslexic mode
    document
        .getElementById("toggleDyslexic")
        .addEventListener("click", () =>
            document.body.classList.toggle("dyslexic-mode"),
        );
});
