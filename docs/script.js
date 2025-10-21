document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".category");
  const sections = document.querySelectorAll(".content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      // Hide all sections
      sections.forEach(section => section.style.display = "none");

      // Show the selected one
      const target = document.getElementById(targetId);
      if (target) target.style.display = "block";
    });
  });
});
