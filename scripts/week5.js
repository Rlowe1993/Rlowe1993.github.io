/* ============================================================
   Week 5 – Dynamic Project Rendering (Instructions.txt)
   This file contains ONLY the new assignment code.
   ============================================================ */

/* ------------------------------------------------------------
   1. Create Custom Project Objects
------------------------------------------------------------ */

const projectData = [
    {
        title: "cd-util",
        summary:
            "A Windows CD/DVD tray utility written in Rust, providing simple open/close drive controls with a lightweight system tray interface.",
        image: "images/cd-util.png",
        repo: "https://github.com/Rlowe1993/cd-util",
    },
    {
        title: "win-drives",
        summary:
            "A Rust library for enumerating and interacting with Windows storage devices, including optical, removable, and fixed drives.",
        image: "images/win-drives.png",
        repo: "https://github.com/Rlowe1993/win-drives",
    },
    {
        title: "win-resources",
        summary:
            "A Rust crate for embedding and managing Windows resource data such as icons, manifests, and version metadata.",
        image: "images/win-resources.png",
        repo: "https://github.com/Rlowe1993/win-resources",
    },
    {
        title: "win-utf16",
        summary:
            "A lightweight Rust utility crate for converting between UTF-8 and UTF-16, simplifying Windows API string handling.",
        image: "images/win-utf16.png",
        repo: "https://github.com/Rlowe1993/win-utf16",
    },
    {
        title: "win-tray",
        summary:
            "A Rust library for creating Windows system tray applications, supporting icons, menus, and event handling.",
        image: "images/win-tray.png",
        repo: "https://github.com/Rlowe1993/win-tray",
    },
];

/* ------------------------------------------------------------
   2. Store and Parse Information
------------------------------------------------------------ */

function loadProjects() {
    let stored = sessionStorage.getItem("projects");

    if (!stored) {
        // No data exists → store it
        sessionStorage.setItem("projects", JSON.stringify(projectData));
        stored = sessionStorage.getItem("projects");
    }

    // Parse stored data
    return JSON.parse(stored);
}

/* ------------------------------------------------------------
   3. Render Projects Dynamically
------------------------------------------------------------ */

function renderProjects() {
    const projects = loadProjects();
    const projectSection = document.querySelector("#projects");
    if (!projectSection) return;

    // Carousel wrapper
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    // Track (slides container)
    const track = document.createElement("div");
    track.classList.add("carousel-track");

    // Create slides
    projects.forEach((proj) => {
        const slide = document.createElement("div");
        slide.classList.add("carousel-slide");

        slide.innerHTML = `
            <h3>${proj.title}</h3>
            <p>${proj.summary}</p>
            <a href="${proj.repo}" target="_blank">
                <img src="${proj.image}" alt="${proj.title} Preview" />
            </a>
        `;

        track.appendChild(slide);
    });

    // Clone first and last slides for seamless looping
    const firstClone = track.firstElementChild.cloneNode(true);
    const lastClone = track.lastElementChild.cloneNode(true);
    firstClone.classList.add("first-clone");
    lastClone.classList.add("last-clone");
    track.appendChild(firstClone);
    track.insertBefore(lastClone, track.firstElementChild);

    // Add track to carousel
    carousel.appendChild(track);

    // Add navigation buttons
    const prevBtn = document.createElement("button");
    prevBtn.classList.add("carousel-btn", "carousel-prev");
    prevBtn.textContent = "‹";

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("carousel-btn", "carousel-next");
    nextBtn.textContent = "›";

    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);

    // After creating nextBtn and prevBtn
    const indicators = document.createElement("div");
    indicators.classList.add("carousel-indicators");

    // Create dots
    projects.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("carousel-dot");
        if (i === 0) dot.classList.add("active");
        indicators.appendChild(dot);
    });

    carousel.appendChild(indicators);

    // Add everything to the section
    projectSection.appendChild(carousel);
}

/* ------------------------------------------------------------
   4. Initialize on Page Load
------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();

    const track = document.querySelector(".carousel-track");
    const slides = Array.from(document.querySelectorAll(".carousel-slide"));
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");
    const dots = Array.from(document.querySelectorAll(".carousel-dot"));

    if (!track || slides.length === 0) return;

    let index = 1; // start on the first real slide
    const slideWidth = slides[0].clientWidth;
    let autoScrollInterval;

    // Position track initially
    track.style.transform = `translateX(-${slideWidth * index}px)`;

    function updateCarousel() {
        track.style.transition = "transform 0.4s ease";
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        dots.forEach((dot, i) =>
            dot.classList.toggle("active", i === index - 1),
        );
    }

    function startAutoScroll() {
        stopAutoScroll(); // clear any existing interval
        autoScrollInterval = setInterval(() => {
            index++;
            updateCarousel();
        }, 5000); // every 5 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    nextBtn.addEventListener("click", () => {
        if (index >= slides.length - 1) return;
        index++;
        updateCarousel();
        startAutoScroll();
    });

    prevBtn.addEventListener("click", () => {
        if (index <= 0) return;
        index--;
        updateCarousel();
        startAutoScroll();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            updateCarousel();
            startAutoScroll();
        });
    });

    track.addEventListener("transitionend", () => {
        if (slides[index].classList.contains("first-clone")) {
            track.style.transition = "none";
            index = 1;
            track.style.transform = `translateX(-${slideWidth * index}px)`;
        }
        if (slides[index].classList.contains("last-clone")) {
            track.style.transition = "none";
            index = slides.length - 2;
            track.style.transform = `translateX(-${slideWidth * index}px)`;
        }
    });

    startAutoScroll();
});
