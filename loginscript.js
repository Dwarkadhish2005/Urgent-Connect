document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".login-btn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        alert("Login done!");
    });
});