// EmailJS integration for contact form
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Replace these with your EmailJS UserID, TemplateID, and ServiceID
    const userID = "your_user_id";
    const templateID = "your_template_id";
    const serviceID = "your_service_id";

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send(serviceID, templateID, formData, userID)
        .then(function (response) {
            document.getElementById("contact-status").innerText = "Message sent successfully!";
            document.getElementById("contact-form").reset();
        }, function (error) {
            document.getElementById("contact-status").innerText = "Failed to send message. Please try again.";
            console.error("EmailJS Error:", error);
        });
});