// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            alert(`Thank you, ${name}! Your message has been sent.`);

            // Here you can add the email-sending functionality.
            console.log(`Message from ${name} (${email}): ${message}`);
        });
    }

    // Order Form Submission
    const orderForm = document.getElementById("order-form");
    if (orderForm) {
        orderForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const product = document.getElementById("product").value;
            const quantity = document.getElementById("quantity").value;
            const address = document.getElementById("address").value;

            alert(`Your order for ${quantity} x ${product} has been placed! Shipping to: ${address}`);

            // Here you can add the order processing functionality.
            console.log(`Order: ${quantity} x ${product}, Address: ${address}`);
        });
    }
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS (Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your details)
    emailjs.init("asad47952@gmail.com");

    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            emailjs.send("asad47952@gmail.com", "asad47952@gmail.com", {
                from_name: name,
                from_email: email,
                message: message,
                to_email: "asad47952@gmail.com"
            })
            .then(() => {
                alert(`Thank you, ${name}! Your message has been sent.`);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Failed to send the message. Please try again later.");
            });
        });
    }

    // Order Form Submission
    const orderForm = document.getElementById("order-form");
    if (orderForm) {
        orderForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const product = document.getElementById("product").value;
            const quantity = document.getElementById("quantity").value;
            const address = document.getElementById("address").value;

            emailjs.send("asad47952@gmail.com", "asad47952@gmail.com", {
                product: product,
                quantity: quantity,
                shipping_address: address,
                to_email: "asad47952@gmail.com"
            })
            .then(() => {
                alert(`Your order for ${quantity} x ${product} has been placed!`);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Failed to process your order. Please try again later.");
            });
        });
    }
});
function sendFormData() {
    // Get the selected size and color values
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;

    // Prepare the query parameters
    const queryParams = `?size=${encodeURIComponent(size)}&color=${encodeURIComponent(color)}`;

    // Redirect to order.html with the query parameters
    window.location.href = `order.html${queryParams}`;
}

