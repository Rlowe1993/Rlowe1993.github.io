document.addEventListener("DOMContentLoaded", () => {
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

        setTimeout(() => {
            statusMessage.style.backgroundColor = "#4CAF50";
            statusMessage.textContent = `Message sent successfully, ${name || "guest"}!`;
        }, 3000);

        form.reset();
    });
});
