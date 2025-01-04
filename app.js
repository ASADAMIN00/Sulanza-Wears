// Initialize EmailJS
(function() {
    emailjs.init("asad47952@gmail.com"); // Replace with your EmailJS user ID
})();

// Function to send the contact form data
function sendContactForm(event) {
    event.preventDefault(); // Prevent the form from reloading the page on submit

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Send email using EmailJS
    emailjs.send("asad47952@gmail.com", {
        name: name,
        email: email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        alert("Your message has been sent successfully!");
        document.getElementById("contactForm").reset(); // Reset form after success
    }, function(error) {
        alert("Failed to send your message. Please try again.");
    });
}
// Initialize EmailJS
(function() {
    emailjs.init("asad47952@gmail.com"); // Replace with your EmailJS user ID
})();

// Function to send the form data to email
function sendFormData(event) {
    event.preventDefault();  // Prevent default form submission

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dress = document.getElementById("dress").value;
    var size = document.getElementById("size").value;
    var color = document.getElementById("color").value;
    var message = document.getElementById("message").value;

    // Send email using EmailJS
    emailjs.send("asad47952@gmail.com", {
        name: name,
        email: email,
        dress: dress,
        size: size,
        color: color,
        message: message
    })
    .then(function(response) {
        alert("Your order has been successfully submitted!");
        document.getElementById("orderForm").reset(); // Reset the form after successful submission
    }, function(error) {
        alert("Failed to submit the order. Please try again.");
    });
}
  // Function to redirect to the order page with selected size and color
  function sendFormData() {
    var size = document.getElementById("size").value;
    var color = document.getElementById("color").value;
    
    // Redirect to order.html with size and color as query parameters
    window.location.href = "order.html?size=" + size + "&color=" + color;
}
 // Function to redirect to the order page with selected size and color
 function sendFormData() {
    var size = document.getElementById("size").value;
    var color = document.getElementById("color").value;
    
    // Redirect to order.html with size and color as query parameters
    window.location.href = "order.html?size=" + size + "&color=" + color;
}
  // Function to redirect to the order page with selected size and color
  function sendFormData() {
    var size = document.getElementById("size").value;
    var color = document.getElementById("color").value;
    
    // Redirect to order.html with size and color as query parameters
    window.location.href = "order.html?size=" + size + "&color=" + color;
}