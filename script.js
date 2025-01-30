document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username name must be at least 3 charcters long.");
    }

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Inavlid email address. Please use a valid format.");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 charcters long.");
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration succesfull";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join(" ");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
