// ================================
// Week 3 - Dynamic Content Section
// ================================

// Create a banner at the top of the page
const banner = document.createElement("div");
banner.textContent = "WEEK 3 Of JAVASCRIPT";

Object.assign(banner.style, {
    backgroundColor: "#222",
    color: "white",
    padding: "10px",
    textAlign: "center"
});

// Add it to the very top
document.body.prepend(banner);

// Force scroll to top
window.scrollTo(0, 0);


// =========================================
// Week 3 - Modify Existing Elements (Events)
// =========================================

const sections = document.querySelectorAll("#about, #projects, #contact");

sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
    section.style.border = "3px solid #007acc";
    });
});

sections.forEach(section => {
    section.addEventListener("mouseleave", () => {
    section.style.border = "none";
    });
});


// ==================================
// Week 3 - Timed Form Confirmation
// ==================================

const form = document.querySelector("#contact form");
const nameInput= document.getElementById("contactName");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();

  const statusMessage = document.createElement("p");
  statusMessage.textContent = "Sending Message...";

  Object.assign(statusMessage.style, {
    backgroundColor: "#ff9800",
    color: "white",
    padding: "10px",
    marginTop: "10px"
  });

  form.appendChild(statusMessage);

  // Create confirmation message
  setTimeout(() => {
    statusMessage.style.backgroundColor = "#4CAF50";
    statusMessage.textContent = `Message sent successfully, ${name || "guest"}!`;
  }, 3000);

  form.reset();
});