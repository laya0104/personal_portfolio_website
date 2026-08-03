console.log("Portfolio Loaded Successfully!");

// Resume Button
const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", function () {
    alert("Resume Download Feature Coming Soon!");
});

// Contact Form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector("textarea").value;

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            const data = await response.json();

            alert(data.message);

            form.reset();

        } catch (err) {
            console.error(err);
            alert("Error connecting to backend.");
        }
    });
}