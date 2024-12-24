// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
    } else {
        alert("Please fill out all fields.");
    }
});
