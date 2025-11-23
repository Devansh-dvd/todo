document.addEventListener("DOMContentLoaded", () => {
  const signinLink = document.getElementById("signin-link");
  if (signinLink) {
    signinLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "login.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Account created successfully! Please log in.");
        window.location.href = "login.html"; 
      } else {
        const err = await response.json();
        alert("Signup failed: " + (err.message || "Something went wrong"));
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
});
