// Show welcome alert on page load
window.onload = () => {
  alert("Welcome to Divakaran's Portfolio!");
};

// Change heading color on button click
function changeHeadingColor() {
  const heading = document.querySelector("h1");
  heading.style.color = "crimson";
}

// Show/Hide skills section
function toggleSkills() {
  const skillsSection = document.getElementById("skills");
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
  } else {
    skillsSection.style.display = "none";
  }
}

// Validate contact form
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name.trim() === "") {
    alert("Please enter your name.");
    return false;
  }

  if (email.trim() === "") {
    alert("Please enter your email.");
    return false;
  }

  return true;
}
