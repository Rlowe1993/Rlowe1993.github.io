// Conditional Logic for Featured Content

const projectImages = document.querySelectorAll("#projects img");
const universityDiv = document.getElementById("universityResources");
const personalDiv = document.getElementById("personalProjects");

if (projectImages.length < 3) {
    universityDiv.style.display = "";
    personalDiv.style.display = "block";
} else {
    universityDiv.style.display = "none";
    personalDiv.style.display = "block";
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

// Form Submit Interactivity

const form = document.querySelector("#contact form");
const nameInput = form.querySelector("input[type='text']");
const submitButoon = form.querySelector("button");

submitButoon.addEventListener("click", (event) => {
    event.preventDefault();

    const name = nameInput.ariaValueMax.trim();
    alert(`Thank you, ${name}, your message has been sent!`);
});