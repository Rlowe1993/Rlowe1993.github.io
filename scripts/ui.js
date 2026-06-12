document.addEventListener("DOMContentLoaded", () => {
    // Banner
    const banner = document.createElement("div");
    banner.textContent = "WEEK 5 Of JAVASCRIPT";
    Object.assign(banner.style, {
        backgroundColor: "#222",
        color: "white",
        padding: "10px",
        textAlign: "center",
    });
    document.body.prepend(banner);

    // Hover effects
    document
        .querySelectorAll("#about, #projects, #contact, #featured")
        .forEach((section) => {
            section.addEventListener("mouseenter", () =>
                section.classList.add("section-hover"),
            );
            section.addEventListener("mouseleave", () =>
                section.classList.remove("section-hover"),
            );
        });

    // Skills list
    const SKILLS = ["HTML", "CSS", "Python", "JavaScript", "Rust"];
    const skillsList = document.getElementById("skillsList");

    SKILLS.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Featured content logic
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

    // Modal Window Logic
    const welcomeOverlay = document.getElementById("welcomeOverlay");
    const closeModal = document.getElementById("closeModal");

    closeModal.addEventListener("click", () => {
        welcomeOverlay.style.display = "none";
    });

    // Scroll to top
    window.scrollTo(0, 0);
});
