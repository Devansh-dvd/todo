document.addEventListener("DOMContentLoaded", () => {
  const createAccountLink = document.getElementById("create-account-link");
  if (createAccountLink) {
    createAccountLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "signin.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const forgotLink = document.getElementById("forgot-link");
  if (forgotLink) {
    forgotLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "reset.html"; 
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful! Redirecting...");
        window.location.href = "dashboard.html"; 
      } else {
        const err = await response.json();
        alert("Login failed: " + (err.message || "Invalid credentials"));
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
});




